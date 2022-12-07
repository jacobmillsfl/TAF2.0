from flask import Flask, send_from_directory
from flask_cors import CORS
import json
import os

# Create global app object
app = Flask(__name__)

# Allow CORS
CORS(app)

# Get base url from environment variable
base_url = os.environ.get("FLASK_API_HOSTNAME")
if not base_url:
    raise Exception("ERROR: Base URL not set. Please run the `setup_backend.sh` script from the repo root and relaunch the Flask app.")

@app.route("/")
def hello_world():
    return "TAF 2.0 Web API"

@app.route("/files/<path:path>")
def get_static_file(path):
    return send_from_directory("files", path)

@app.route("/songs")
def songs():
    song_list = [
        {
            "title": "AbyssOfBliss",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/AbyssOfBliss.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Audacity2",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Audacity2.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "AudacityNew",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/AudacityNew.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "BeneathTheExoskeleton",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/BeneathTheExoskeleton.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "BJCGroove01_DrumEdit",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/BJCGroove01_DumEdit_mp3_20200815.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "BJCGroove01",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/BJCGroove01.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "BringItBack",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/BringItBack.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "CornerSpaces",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/CornerSpaces.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Credence",
            "artist": "Horse",
            "url": "https://tafers.net/files/Credence.mp3",
            "albumArt": f"{base_url}/files/tafhorse.png"
        },
        {
            "title": "DarkMarrow2",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/DarkMarrow2.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "DayInTheLife",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/DayInTheLife.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "DiscoverTheBreakthrough",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/DiscoverTheBreakthrough.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Divinity",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Divinity.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "DivinityOutro",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/DivinityOutro.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "EndemicRancor",
            "artist": "Brigand",
            "url": "https://tafers.net/files/EndemicRancor.mp3",
            "albumArt": f"{base_url}/files/BrigandAlbumCover.jpg"
        },
        {
            "title": "Entropy",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Entropy.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "fallen",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/fallen.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "HEAVEN LIGHT MY CANDLE ClaytonDrumEdit",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/HEAVEN LIGHT MY CANDLE_20200712_ClaytonDrumEdit_mp3.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "HeavenLightMyCandle",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/HeavenLightMyCandle.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Iatrophobia",
            "artist": "Brigand",
            "url": "https://tafers.net/files/Iatrophobia.mp3",
            "albumArt": f"{base_url}/files/BrigandAlbumCover.jpg"
        },
        {
            "title": "Indigo Eye",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Indigo Eye.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Jam Chamber",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Jam Chamber.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "JamChamber",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/JamChamber.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "JamChamberVoxScratch",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/JamChamberVoxScratch.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Jumping It Up_DrumEdit",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Jumping It Up_DrumEdit_20200830_mp3.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Jumping It Up",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Jumping It Up.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "LoveAndTry",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/LoveAndTry.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "MyKin",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/MyKin.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Otherside",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Otherside.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "ReggaeSession01",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/ReggaeSession01.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "ReggaeSong",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/ReggaeSong.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Rudimentary_Clayton_DrumEdit",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Rudimentary_Clayton_DrumEdit_20200713_mp3.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "RudimentaryTeaser",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/RudimentaryTeaser.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "SomethingAboutUs",
            "artist": "Horse",
            "url": "https://tafers.net/files/SomethingAboutUs.mp3",
            "albumArt": f"{base_url}/files/tafhorse.png"
        },
        {
            "title": "StarChild",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/StarChild.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "StateOfMind",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/StateOfMind.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "StateOfMindVoxScratch",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/StateOfMindVoxScratch.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "synthwave",
            "artist": "Horse",
            "url": "https://tafers.net/files/synthwave.mp3",
            "albumArt": f"{base_url}/files/tafhorse.png"
        },
        {
            "title": "The Distance Between Us_DrumEdit",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/The Distance Between Us_DrumEdit_20200830_mp3.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "The Distance Between Us",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/The Distance Between Us.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "ThinkWithYourHeart",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/ThinkWithYourHeart.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "TrifoldEcstacy",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/TrifoldEcstacy.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Vinculum_DrumEdit",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Vinculum_DrumEdit_20200523_mp3.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        },
        {
            "title": "Vinculum_DrumEdit2",
            "artist": "The Ambient Funk",
            "url": "https://tafers.net/files/Vinculum_DrumEdit_20200712_mp3.mp3",
            "albumArt": f"{base_url}/files/TafAlbumCover1000x.png"
        }
    ]

    return json.dumps(song_list)


app.run(host="0.0.0.0", port=8080)
