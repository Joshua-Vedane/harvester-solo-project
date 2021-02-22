const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')


// gets project details for clicked on project
router.get('/projectInfo/:id', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    const projectId = req.params.id
    let queryText = `SELECT * FROM "projects" 
    WHERE "id" = $1 
    ORDER BY "projects".id DESC;`;

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


// edit project details 
router.put('/updateProject/:id', (req,res) => {
  if(req.isAuthenticated()){
    const projectId = req.params.id;
    const queryText = `UPDATE "projects" SET "address_1" = $1, "address_2" = $2, "bid" = $3, "start_date" = $4, "image"= $5 WHERE "id" = $6;`;
    pool.query(queryText, [req.body.address_1, req.body.address_2, req.body.bid, req.body.start_date, req.body.image, projectId])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  }else{
    res.sendStatus(403);
  }
})
  

module.exports = router;
