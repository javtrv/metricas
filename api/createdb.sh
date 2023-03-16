#!/bin/bash

# Conexión a la base de datos
DB_NAME="metrics_api"
DB_USER="user_metrics"
DB_PASS="Faj441jay"

# Destruir la base de datos
sudo -u postgres psql -c "DROP DATABASE ${DB_NAME};"
sudo -u postgres psql -c "DROP USER ${DB_USER};"

# Crear la base de datos
sudo -u postgres psql -c "CREATE DATABASE ${DB_NAME};"

# Crear el usuario y darle permisos
sudo -u postgres psql -c "CREATE USER ${DB_USER} WITH PASSWORD '${DB_PASS}';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DB_NAME} TO ${DB_USER};"