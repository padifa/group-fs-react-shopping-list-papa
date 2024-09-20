-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
DROP TABLE IF EXISTS "ShoppingList";
CREATE TABLE "ShoppingList" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(80) NOT NULL,
  "quantity" NUMERIC(10, 2) NOT NULL,
  "unit" VARCHAR(20),
  "purchased" BOOLEAN DEFAULT FALSE
);

INSERT INTO "ShoppingList" ("name", "quantity", "unit") 
VALUES ('Carrots', 4.5, 'ounces'),('Apples', 5, 'ounces'), ('Cinnamon', 4.5, 'ounces')
SELECT * FROM "ShoppingList";
SELECT * FROM "ShoppingList" ORDER BY name ASC
UPDATE "ShoppingList" SET "purchased" = NOT purchased WHERE "id"= 1 ;