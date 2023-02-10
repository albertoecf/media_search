# save this as app.py
import os
import requests
from flask import Flask, request
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local")

UNPLASH_URL = "https://api.unsplash.com/photos/random/"
UNPLASH_KEY = os.environ.get("UNPLASH_KEY","")

app = Flask(__name__)


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

    response = requests.get(url=UNPLASH_URL,
                           headers=headers, params=params)
    data = response.json()
    return data


@app.route("/")
def home():
    return "This is the home"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
