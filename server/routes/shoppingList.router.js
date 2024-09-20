const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "ShoppingList" ORDER BY name ASC, id;`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`GET list items from the database`, result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const item = req.body;
  const sqlText = `INSERT INTO "ShoppingList" ("name", "quantity", "unit") VALUES ($1, $2, $3)`;
  pool
    .query(sqlText, [item.name, item.quantity, item.unit])
    .then((result) => {
      console.log(`Added shopping list item to the database`, item);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});
// PUT
router.put('/:id', (req, res) => {
  let listItemId = req.params.id;
  console.log('req.body??', req.body);
  console.log('PUT request for list item', listItemId);
  let sqlQuery = `UPDATE "ShoppingList" SET "purchased" = NOT purchased WHERE "id"= $1;`;
  pool
    .query(sqlQuery, [listItemId])
    .then((result) => {
      console.log('description has been updated');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500);
    });
});
//delete
router.delete('/:id', (req, res) => {
  let listItemId = req.params.id;
  console.log('req.body??', req.params);
  console.log('Delete request', listItemId);
  let sqlQuery = 'DELETE FROM "ShoppingList" WHERE id=$1;';
  pool
    .query(sqlQuery, [listItemId])
    .then((result) => {
      console.log('list item deleted');
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlQuery}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
