-- Fichier de création des tables de la DB
BEGIN;

-- Suppression des tables
DROP TABLE IF EXISTS "product";

-- Création des tables
CREATE TABLE product (
  id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_product VARCHAR(45),
  type_product VARCHAR(45),
  price FLOAT,
  rating INTEGER,
  warranty_years INTEGER,
  available BOOLEAN,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

COMMIT;