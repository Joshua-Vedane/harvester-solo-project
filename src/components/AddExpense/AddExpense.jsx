import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddExpense.css'


function AddExpense() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const allProjects = useSelector((store) => store.allProjects)
  const employees = useSelector((store) => store.employees)
  const categories = useSelector((store) => store.categories)
  
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [total, setTotal] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [projectId, setProjectId] = useState('');
  const [categoryId, setCategoryId] = useState('');
 

  const handleSubmit = () => {
    const action = {
      type: 'ADD_EXPENSE',
      payload: {
        project_id: projectId,
        category_id: categoryId,
        description: description, 
        date: date, 
        total: total
      }
    }
    dispatch(action);
    // clearInputs();
    // history.push('/dashboard'); ?? Really want to re-route? 
  }

   useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEES' });
    dispatch({ type: 'GET_ALL_PROJECTS' });
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  return (
    <>
      <Box height={50} p={3}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box marginRight={2}>
            <Typography variant="h5"> Add Expense</Typography>
          </Box>
        </Box>
      </Box>

      <Card className="add-expense-card">
        <CardContent>
        <Box mt={2}>
          <FormControl variant='outlined' fullWidth={true} m={1}>

            <InputLabel
              id="project-number-label"
            >Select Project</InputLabel>
            <Select
              labelId="project-number"
              fullWidth={true}
              id="project-number-select"
              value={projectId}
              onChange={(event) => setProjectId(event.target.value) }
            >
              {allProjects.map((project) => {
                return (
                  <MenuItem key={project.id} value={project.id}>{project.address_1}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
        <Box mt={2}>
          <FormControl variant='outlined' fullWidth={true} m={1}>

            <InputLabel
              id="category-id-label"
            >Select Category</InputLabel>
            <Select
              labelId="category-id"
              fullWidth={true}
              id="category-id-select"
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value) }
            >
              {categories.map((category) => {
                return (
                  <MenuItem key={category.id} value={category.id}>{category.category_name}</MenuItem>
                )
              })}
            </Select>
          </FormControl>
        </Box>
        <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
             
              <TextField
                label="Description"
                // InputLabelProps={{ shrink: projectInfo.address_1 }}
                fullWidth={true}
                id="description-input"
                name="description"
                variant='outlined'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              >
              </TextField>
            </FormControl>
          </Box>
          <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
              <TextField
                label='Date'
                fullWidth={true}
                id="date-input"
                name="date"
                variant='outlined'
                value={date}
                onChange={(event) => setDate(event.target.value)}
              >
              </TextField>
            </FormControl>
          </Box>
          <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
              <TextField
                label='Total'
                fullWidth={true}
                id="total-input"
                name="total"
                variant='outlined'
                value={total}
                onChange={(event) => setTotal(event.target.value)}
              >
              </TextField>
            </FormControl>
          </Box>
          
        </CardContent>
        <Box display="flex" justifyContent="center">
          <CardActions>
            <Button
              color="secondary"
              variant="contained"
              // onClick={handleCancel}
            >Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >Submit
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default AddExpense;
