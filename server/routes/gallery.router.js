const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(`In server, updating likes req.params | ID: ${req.params.id}`);
    const queryText = `UPDATE gallery SET likes=likes+1 WHERE id=$1`
    const galleryId = req.params.id;
    pool.query(queryText, [galleryId])
      .then((response) => {
        res.send(response.rows)
      })
      .catch((error) => {
        console.log('PUT Error : ', error)
        res.sendStatus(500)
      })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  // Get all of the students from the database
  const sqlText = `SELECT * FROM gallery`;
  pool.query(sqlText)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500);
      });
});

module.exports = router;