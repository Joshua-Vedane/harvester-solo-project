const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js')

//Get all project expenses when clicked
router.get('/:id', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    const projectId = req.params.id
    let queryText = `SELECT "project_expenses".id, "project_expenses".project_id, "project_expenses".category_id, "project_expenses".description, "project_expenses".date, "project_expenses".total, "categories".category_name FROM "project_expenses"
    JOIN "categories" ON "categories".id = "project_expenses".category_id
    WHERE "project_id" = $1;`;
    

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

// add expenses to a project
router.post('/', (req, res) => {
  console.log('you made it to expenses post');
  
  if(req.isAuthenticated()){
    const queryText = `INSERT INTO "project_expenses" ("project_id", "category_id", "description", "date", "total")
    VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [req.body.project_id, req.body.category_id, req.body.description, req.body.date, req.body.total])
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log('failed adding expense', error);
      res.sendStatus(500);
    })
    //do things
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;