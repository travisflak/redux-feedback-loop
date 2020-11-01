const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET all feedback submissions, populate with data from the form 
// router.get('/', (req, res) => {
//     // Find all form submissions and return them
//     pool.query('SELECT * FROM "prime_feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /api/order', error);
//         res.sendStatus(500);  
//     });
// })

// POST
// Adds new data
// Request body must be an object
router.post('/',  (req, res) => {
    let newData = req.body;
    console.log(`Adding data`, newData);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments" )
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newData.feeling, newData.understanding, newData.support, newData.comments])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new data`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;