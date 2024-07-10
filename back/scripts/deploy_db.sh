# Je lance le script de création de role et de base de donnée

sudo -u postgres psql -f ./scripts/init_db.sql



# Le script de création de table
psql -U soufiane -d bonartisan -f ./scripts/create_table.sql

# script d'insertion des données
psql -U soufiane -d bonartisan -f ./scripts/import_data.sql



