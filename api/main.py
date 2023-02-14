import os
from dotenv import load_dotenv
import requests
from flask import Flask, request
from flask_cors import CORS
from mongo_client import insert_test_document

UNPLASH_URL = "https://api.unsplash.com/photos/random"

load_dotenv(dotenv_path="./.env.local")
UNPLASH_KEY = os.getenv("UNPLASH_KEY")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNPLASH_KEY:
    raise EnvironmentError("Pleae create .env.local file and insert there UNPLASH_KEY")

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = DEBUG

insert_test_document()


@app.route("/new-image")
def new_image():
    """This function sends a GET request to the Unsplash API with a query parameter to search for an image.
    The API returns a JSON object containing data about a random image matching the query.
    The function then returns the JSON data."""
    word = request.args.get("query")
    headers = {"Accept-Version": "v1", "Authorization": "Client-ID " + UNPLASH_KEY}
    params = {"query": word}
    response = requests.get(url=UNPLASH_URL, headers=headers, params=params)
    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
