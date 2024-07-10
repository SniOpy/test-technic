BEGIN;

INSERT INTO "product" ("name_product", "type_product","price", "rating", "warranty_years", "available") 
VALUES
('AC1 Phone1', 'phone', 200.05, 3.8, 1, true),
('AC1 Phone2', 'phone', 147.21, 1, 3, false),
('AC1 Phone1', 'phone', 150, 2, 1, true),
('AC1 Phone1', 'phone', 50.20, 3, 2, true);
COMMIT;

