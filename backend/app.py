from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import json
import os
import jwt
from datetime import datetime, timedelta
from dotenv import dotenv_values

from database import DatabaseUtil
from crypto_util import CryptoUtil

# Create global app object
app = Flask(__name__)

# Allow CORS
CORS(app)


# Get environment constants
BASE_URL = "FLASK_API_BASE_URL"
JWT_SECRET = "JWT_SECRET"
MYSQL_HOSTNAME = "MYSQL_HOSTNAME"
MYSQL_API_USER = "MYSQL_API_USER"
MYSQL_ROOT_PASSWORD = "MYSQL_ROOT_PASSWORD"
MYSQL_DATABASE = "MYSQL_DATABASE"
DEBUG = False

config_values = [BASE_URL, JWT_SECRET, MYSQL_HOSTNAME, MYSQL_API_USER, MYSQL_ROOT_PASSWORD, MYSQL_DATABASE]
missing_values = []
config = {}
for setting in config_values:
    value = os.environ.get(setting)
    if value:
        config[setting] = value
    else:
        missing_values.append(setting)

# Check for missing environment variables
if DEBUG:
    config = dotenv_values(".backend.env")
elif len(missing_values) > 0:
    raise Exception("ERROR: Missing environment variables\n\n\t" + "\t".join(missing_values))


# #####################
# Database
# #####################
db = DatabaseUtil(config)


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

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'message': 'All fields are required'}), 400

    result = db.user_search(username)
    if result:
        return "Username taken"
    else:
        # Hash the password securely before storing it
        hashed_password = CryptoUtil.hash_password(password)
        active_status = 0
        initial_scope = "User"
        saved = db.user_create(username, hashed_password, email, active_status, initial_scope)
        # TODO: Return a formalized object
        return saved


@app.route('/login', methods=['POST'])
def login():
    # Validate username + password hash against database
    # If valid, issue JWT
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'username and password required'}), 400

    result = db.user_search(username)
    if not result:
        return jsonify({'message': 'user not found'}), 400
    elif CryptoUtil.check_password(password, result[0]['password_hash']):
        user = result[0]
        payload = {
            'user_id': user['id'],
            'exp': datetime.utcnow() + timedelta(days=30),
            'scope': user['scope']
        }
        token = jwt.encode(payload, config[JWT_SECRET], algorithm='HS256')
        return jsonify({'token': token})
    else:
        return jsonify({'message': 'incorrect password'}), 400


# WARNING: Comment this code when running in docker. Uncomment only for local dev without Docker.
# if __name__ == "__main__":
#    app.run(host="0.0.0.0", port=8080)