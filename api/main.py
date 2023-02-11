import requests
from flask import Flask, request
import os

from dotenv import load_dotenv

UNPLASH_URL = "https://api.unsplash.com/photos/random"

load_dotenv(".env.local")
UNPLASH_KEY = os.getenv("UNPLASH_KEY")


app = Flask(__name__)

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version":"v1",
        "Authorization" : "Client-ID " + UNPLASH_KEY
    }
    params = {
        "query" : word
    }
    response = requests.get(url=UNPLASH_URL, headers=headers, params=params)
    data = response.json()
    download_url = data["links"]["download"]
    return download_url

if __name__ == "__main__":
    app.run(debug=True)
