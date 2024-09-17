# TAF Backend



## The Back End Stack

API - Flask
DB  -  MySQL

## Environment variables

You will need an environment file in this directory called `.backend.env`. It requires the following environment variables (with values).

```
FLASK_API_BASE_URL="http://localhost:8080"
MYSQL_HOSTNAME="tafweb-db"
MYSQL_API_USER=root
JWT_SECRET="<change_me>"
```

The `JWT_SECRET` value should be something cryptographically generated to ensure randomness and enhance security.

## Migration Strategies

After the database is initially created we need a way to add updates over time. For now, there isn't a great way to do that. The best way is:

- Run the database
```
docker-compose up mysqldb -d
```
- Connect to the database instance
```
docker exec -it mysqldb /bin/bash
```
- Execute new scripts directly (requires MYSQL_ROOT_PASSWORD)
```
cd migration
cat <script>.sql | mysql -u root -p
```

On success, nothing will happen. On error you'll receive a message.

Disconnect from the docker container with
```
exit
```

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