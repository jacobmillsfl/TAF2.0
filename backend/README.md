# TAF Backend



## The Back End Stack

API - Flask
DB  -  MySQL

## Server Configuration

This solution is designed to have `nginx` running externally.
`nginx` can forward traffic to docker containers using a reverse proxy.
The best way to set this up initially would be to create an entry in
`/etc/nginx/sites-available/` that includes the following configuration
to reverse proxy app and api traffic to the docker containers.
```
# Complete Nginx Docker reverse proxy config file
server {
  listen 80;
  listen [::]:80;
  server_name tafers.net;

  location / {
    index index.html index.htm;
    proxy_pass http://0.0.0.0:3000/;
  }
}

server {
  listen 80;
  listen [::]:80;
  server_name api.tafers.net;

  location / {
    index index.html index.htm;
    proxy_pass http://0.0.0.0:8080/;
  }
}
```