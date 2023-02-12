#!/bin/bash
# This script creates the initial environment files and installs all dependencies for the application

read -p "Enter the API's base URL: " apiurl
read -p "Enter the database password: " dbpass

cat << EOF > backend/.backend.env
FLASK_API_BASE_URL="$apiurl"
MYSQL_HOSTNAME="tafweb-db"
MYSQL_API_USER=root
EOF

cat << EOF > database/.database.env
MYSQL_ROOT_PASSWORD="$dbpass"
MYSQL_DATABASE=tafdb
MYSQL_PORT=3306
EOF

cat << EOF > frontend/.frontend.env
REACT_APP_API_URL="$apiurl"
FAST_REFRESH=false
EOF