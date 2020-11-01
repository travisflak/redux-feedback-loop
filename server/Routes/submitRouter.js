const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET all feedback submissions, populate with data from the form 
router.get('/', (req, res) => {
    // Find all form submissions and return them
    pool.query('SELECT * FROM "prime_feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/order', error);
        res.sendStatus(500);  
    });
})

// POST
router.post('/', async (req, res) => {
    const client = await pool.connect();


    try {
        const {
            feeling,
            understanding,
            support,
            comments,
            flagged,
            dates
        } = req.body;
        await client.query('BEGIN')
        const formResults = await client.query(`INSERT INTO "prime_feedback" ("feeling", "understanding", "support", "comments", "flagged", "dates")
        VALUES ()
        RETURNING id;`, [feeling, understanding, support, comments, flagged, dates]);
        const formId = formResults.rows[0].id;

        await Promise.all(feedback.map(form => {
            const insertLineItemText = `INSERT INTO "line_item" ("order_id", "pizza_id", "quantity") VALUES ($1, $2, $3)`;
            const insertLineItemValues = [formId, form.id, form.results];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/order', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;