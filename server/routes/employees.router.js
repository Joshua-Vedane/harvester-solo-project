const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')

//Get all employees from the DB
// future: will get employees by company id ;)
router.get('/', (req, res) => {
  if(req.isAuthenticated()){
    let queryText = `SELECT "users".id, "users".user_name, "users".hourly_rate FROM "users";`;
    pool.query(queryText)
    .then((result) => {
      res.send(result.rows)
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  }else {
    res.sendStatus(403);
  }
});

// add an employee to a project
router.post('/', (req, res) => {
  if(req.isAuthenticated()){
    let queryText = `INSERT INTO "user_projects"("user_id", "project_id")
                     VALUES ($1, $2) RETURNING "id";`;
    pool.query(queryText, [req.body.employeeId, req.body.projectId])
      .then(response => {
        res.sendStatus(201);
      }).catch(error => {
        console.log(error);
        res.sendStatus(500);
      })
  }
});

module.exports = router;
