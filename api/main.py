import os
from dotenv import load_dotenv
import requests
from flask import Flask, request, redirect

UNPLASH_URL = "https://api.unsplash.com/photos/random"

load_dotenv(".env.local")
UNPLASH_KEY = os.getenv("UNPLASH_KEY")
DEBUG = bool(os.environ.get("DEBUG", True))

if not UNPLASH_KEY:
    raise EnvironmentError(
        "Pleae create .env.local file and insert there UNPLASH_KEY")

app = Flask(__name__)

app.config["DEBUG"] = DEBUG


@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNPLASH_KEY
    }
    params = {
        "query": word
    }
    response = requests.get(url=UNPLASH_URL, headers=headers, params=params)
    data = response.json()
    download_url = data["links"]["download"]
    return redirect(download_url) 


if __name__ == "__main__":
    app.run()
