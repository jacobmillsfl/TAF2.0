docker build . -t taf-backend
docker run -d -it -p 8080:8080 taf-backend