-- Permet de lancer POSTGRES
sudo -i -u postgres psql

-- On supprime les rôles S'IL EXISTE
DROP USER IF EXISTS soufiane;
-- On supprime la base de donnée SI ELLE EXISTE
DROP DATABASE IF EXISTS bonartisan;

-- Création du role et de la BDD

CREATE USER soufiane WITH PASSWORD '123';
CREATE DATABASE bonartisan OWNER soufiane;