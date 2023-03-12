from flask import Flask, send_from_directory
from flask_cors import CORS
import json
import os
from database import DatabaseUtil

# Create global app object
app = Flask(__name__)

# Allow CORS
CORS(app)

# Get base url from environment variable
BASE_URL = os.environ.get("FLASK_API_BASE_URL")
if not BASE_URL:
    raise Exception("ERROR: FLASK_API_BASE_URL not set. Please set and export environment variables and relaunch.")


# #####################
# Database
# #####################
db = DatabaseUtil()


# #####################
# Routes
# #####################

@app.route("/")
def home():
    return "TAF 2.0 Web API"

@app.route("/files/<path:path>")
def get_static_file(path):
    return send_from_directory("../files", path)

@app.route("/songs")
def songs():
    song_list = []
    songs = db.custom_load_default_playlist()

    for song in songs:
        song_list.append({
            "title": song["SongName"],
            "artist": song["ArtistName"],
            "album": song["AlbumName"],
            "url": f'{BASE_URL}/files/{song["SongPath"]}',
            "albumArt": f'{BASE_URL}/files/{song["ArtPath"]}',
            "trackNumber": song["TrackNumber"],
        })

    return json.dumps(song_list)
@app.route("/albums")
def albums():
    albums = db.album_load_all()
    return albums

#if __name__ == "__main__":
#    app.run(host="0.0.0.0", port=80)