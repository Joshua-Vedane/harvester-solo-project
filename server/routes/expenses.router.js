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
    WHERE "project_id" = $1 ORDER BY "project_expenses".id;`;
    

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

// get expense on edit click
router.get('/edit/:id', (req, res) => {
  if(req.isAuthenticated()){
    //do the things
    const expenseId = req.params.id
    let queryText = `SELECT "project_expenses".id, "project_expenses".project_id, "project_expenses".category_id, "project_expenses".description, "project_expenses".date, "project_expenses".total, "categories".category_name FROM "project_expenses"
    JOIN "categories" ON "categories".id = "project_expenses".category_id
    WHERE "project_expenses".id = $1;`;
    

    pool.query(queryText, [expenseId])
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

//edit an expense
router.put('/edit', (req,res) => {
  if(req.isAuthenticated()) {

    const queryText = `UPDATE "project_expenses" SET "category_id" = $1, "description" = $2, "date" = $3, "total" = $4 WHERE "id" = $5 RETURNING "project_id";`;
    pool.query(queryText, [req.body.category_id, req.body.description, req.body.date, req.body.total, req.body.id])
    .then((result) => {
      // send back the project_id to get all expenses for that project in the saga
      res.send({project_id: result.rows[0].project_id});
    }).catch((error) => {
      console.log(error);
      res.sendStatus(500);
    })
  }else{
    res.sendStatus(403);
  }
})

//delete expense
router.delete('/delete/:id', (req, res) => {
  if(req.isAuthenticated()){
    const expenseId = req.params.id;
    const queryText = `DELETE FROM "project_expenses" WHERE "id"= $1 RETURNING "project_id"; `;
    pool.query(queryText, [expenseId])
    .then((result) => {
      // send back the project_id to get all expenses for that project in the saga
      res.send({project_id: result.rows[0].project_id});
    }).catch((err) => {
      console.log('failed to delete', err);
      res.sendStatus(500);
    })
  }else{
    res.sendStatus(403);
  }
})

module.exports = router;