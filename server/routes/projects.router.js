const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')

//Get all user's project information
router.get('/', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    let queryText = `SELECT "projects".id, "projects".address_1, "projects".address_2, "projects".bid, "projects".start_date, "projects".image FROM "users" 
    JOIN "user_projects" ON  "users".id = "user_projects".user_id
    JOIN "projects" ON "projects".id = "user_projects".project_id
    WHERE "users".id = $1;
    `
    pool.query(queryText, [req.user.id])
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

//Get ALL the projects info
router.get('/all', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    let queryText = `SELECT * FROM "projects";`;
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

// address1: address1,
//         address2: address2, 
//         bidTotal: bidTotal,
//         imageURL: imageURL,
//         dateStart: dateStart,

//add project to DB 
router.post('/', (req, res) => {
  
  const queryText = `INSERT INTO "projects" ("address_1", "address_2", "bid", "start_date", "image")
                    VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [req.body.address1, req.body.address2, req.body.bidTotal, req.body.dateStart, req.body.imageURL ])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log('Failed adding project', error);
      res.sendStatus(500);
    })
});

module.exports = router;
