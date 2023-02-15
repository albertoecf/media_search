import os
from dotenv import load_dotenv
import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from mongo_client import mongo_client

gallery = mongo_client.gallery
images_collection = gallery.images


UNPLASH_URL = "https://api.unsplash.com/photos/random"

load_dotenv(dotenv_path="./.env.local")
UNPLASH_KEY = os.getenv("UNPLASH_KEY")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNPLASH_KEY:
    raise EnvironmentError("Pleae create .env.local file and insert there UNPLASH_KEY")

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG


@app.route("/new-image")
def new_image():
    """This function sends a GET request to the Unsplash API with a query parameter to search for an image.
    The API returns a JSON object containing data about a random image matching the query.
    The function then returns the JSON data."""
    word = request.args.get("query")
    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNPLASH_KEY}
    params = {"query": word}
    response = requests.get(
        url=UNPLASH_URL,
        headers=headers,
        params=params,
    )
    data = response.json()
    return data


@app.route("/images", methods=["GET", "POST"])
def images():
    """Endpoint for retrieving and saving images to the database.

    HTTP Methods:
    - GET: Retrieve all images from the database.
    - POST: Save a new image to the database.

    Returns:
    - For GET requests, returns a JSON object containing a list of all images in the database.
    - For POST requests, returns a JSON object containing the ID of the newly inserted image.
    """
    if request.method == "GET":
        # Read images from the database
        images_in_db = images_collection.find({})
        images_in_db_list = [img for img in images_in_db]
        return jsonify(images_in_db_list)
    if request.method == "POST":
        # Save image to the db
        image_to_save = request.get_json()
        # replace mongodb _id with unplash respond id
        image_to_save["_id"] = image_to_save.get("id")
        result = images_collection.insert_one(image_to_save)
        inserted_id = result.inserted_id
        return {"inserted_id": inserted_id}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
