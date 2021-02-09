const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')

//Get all project details
router.get('/:id', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    const projectId = req.params.id
    let queryText = `SELECT * FROM "project_expenses" 
    WHERE "project_id" = $1;`

    pool.query(queryText, [projectId])
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  }else {
    //don't do the things
    res.sendStatus(403);
  }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
