const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')


//Get ALL the categories 
router.get('/', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    
    let queryText = `SELECT * FROM "categories";`;
    pool.query(queryText)
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


router.post('/', (req, res) => {
  
});

module.exports = router;
