#!/bin/bash
#
# WARNING:  This script is for downloading the default resources 
#           for the TAF API Docker Container. It should not be
#           executed outside of a docker container. It is executed
#           as part of the docker build process.
#

# Create default directory structure
mkdir /files
mkdir /files/livesets
mkdir /files/music
mkdir /files/images
mkdir /files/documents
mkdir /files/archives
mkdir /files/other

# Get default images
wget -O /files/images/TafAlbumCover1000x.png https://tafers.net/files/TafAlbumCover1000x.png
wget -O /files/images/BrigandAlbumCover.jpg https://tafers.net/files/BrigandAlbumCover.jpg
wget -O /files/images/tafhorse.png https://tafers.net/files/tafhorse.png

# Get default songs
wget -O /files/music/AbyssOfBliss.mp3 https://tafers.net/files/AbyssOfBliss.mp3
wget -O /files/music/EndemicRancor.mp3 https://tafers.net/files/EndemicRancor.mp3
wget -O /files/music/SomethingAboutUs.mp3 https://tafers.net/files/SomethingAboutUs.mp3