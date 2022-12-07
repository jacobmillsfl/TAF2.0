# TAF2.0
A new and improved web application for music and artist management

## Tech Stack
- Frontend: ReactJS + TypeScript
- Backend: Python Flask
- Database: TBD
- Distribution: Docker

## Getting Started
To develop and run this application you'll need to install the following:
 - [docker](https://docs.docker.com/get-docker/)
 - [docker-compose](https://docs.docker.com/compose/install/)
 - [NodeJS](https://nodejs.org/en/download/)
 - [python3](https://www.python.org/downloads/)


## Running the full stack in Docker
`docker-compose` can be used to launch the entire stack within a dockerized environment. When working with Docker, you need to `build` and `run` your docker images. All docker configurations are within the repo root directory. From that directory, you can run `docker-compose` commands to manage the application.

To Build:
```bash
docker-compose build
```

To Run:
```bash
docker-compose up -d
```

To Stop:
```bash
docker-compose down
```

"Building" the application creates Docker images based on the Dockerfile configurations. Whenever you make changes to the application source code, you'll want to rebuild the Docker images.

## Running locally without docker
If you want to run the application outside of docker, perhaps as part of development and testing, you'll need to run the Frontend and Backend code individually. Both of the frontend and backend applications have the following files including their respective environment variables.
- `.backend.env`
- `.frontend.env`

**These environment files help with deployment from local to production environments. They should not contain any production values, keys, or authentication tokens.**

### Running the backend manually

To run the Backend application, you need to first run the `setup_backend.sh` script from the application root directory. Then, navigate to the `backend/` directory and run the command `python3 app.py`.

If successful, the API should be available at `http://localhost:8080/`.

### Running the frontend manually
To run the Frontend application, first navigate to the `frontend/` directory. You should first ensure that you have all required NPM modules installed. To do so, run the command `npm install`.

After all NPM modules are installed, you can launch the Frontend application with the command `npm run start`. Additional NPM commands are available and can be found within the "scripts" section of the `package.json` file for the Frontend app.

If successful, the web page should be available at `http://localhost:3000/`.

Note:
 - If the backend is not running, the frontend will not be fully functional
 - You only need to run `npm install` the first time you run the app and after modifying NPM modules. You do not need to reinstall NPM modules after making code changes.
