# TAF2.0
A new and improved web application for music and artist management

## Tech Stack

Frontend: ReactJS + TypeScript
Backend: Flask
Database: TBD
Distribution: Docker
Web Host Engine: NGINX


## Getting Started

### Install docker

On Windows: https://docs.docker.com/desktop/windows/install/
On Debian: `sudo apt install docker.io`

Verify your docker installation by entering the commands:
`docker version` - This sould print version info
`docker ps` - As long as this doesn't throw an error then it's fine

## Running the backend

`cd backend` - Changes to the backend directory
`./run.sh`   - A script that builds the dockerfile and launches the backend app

### Troubleshooting the backend

First make sure you've built the docker image
`docker build . -t taf-backend`

Then try running the image directly
`docker run -it taf-backend /bin/bash`

Try running the app directly
`python3 ./app.py`

See if you can access the webpage at `http://localhost:8080/`
