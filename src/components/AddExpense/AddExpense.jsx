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
  const [hours, setHours] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);

  // const [employeeWageHours, setEmployeeWageHours] = useState({id: 0,hourlyRate: 0});
  
 

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

  const handleChange=(event) => {

    // setEmployeeWageHours(
    //   {
    //     id: event.target.value.id,
    //     hourlyRate: event.target.value.hourly_rate,

    //   }
    //)
    setEmployeeId(event.target.value.id);
    setHourlyRate(event.target.value.hourly_rate);

  }

   useEffect(() => {
    dispatch({ type: 'GET_EMPLOYEES' });
    dispatch({ type: 'GET_ALL_PROJECTS' });
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  console.log('hourly rate is now ', hourlyRate);
  console.log('employeeId is now', employeeId);

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
        {/* If category selected is 'wage' (4), show something different.  */}
      {categoryId != '4' ? 
        <>
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
        </>
        : 
        // HEYYYYYYYYYYYYYYYHEYYYYYYYYYYYYYYYHEYYYYYYYYYYYYYYYHEYYYYYYYYYYYYYYYHEYYYYYYYYYYYYYYYHEYYYYYYYYYYYYYYYHEYYYYYYYYYYYYYYY
        <>
        <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
              <InputLabel
                id="employee-select-label"
              >Employee</InputLabel>
              <Select
                labelId="employee-select"
                fullWidth={true}
                id="employee-select-input"
                
                // onChange={(event) => {setEmployeeId(event.target.value.id)}}
                // onChange={(event) => {setHourlyRate(event.target.value.hourly_rate)}}
                onChange={ handleChange}
                
              >
                {employees.map((employee) => {
                  return (
                    <MenuItem key={employee.id} value={{id: employee.id, hourly_rate: employee.hourly_rate}}>{employee.user_name}</MenuItem>
                  )
                })}
              </Select>
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
            <FormControl variant = 'outlined' fullWidth={true}>
              <TextField
                label= 'Hours'
                fullWidth={true}
                id='hours-input'
                name='hours'
                variant='outlined'
                value={hours}
                onChange={(event) => setHours(event.target.value)}
              >

              </TextField>
            </FormControl>
          </Box>
          <Box m={2}>
            <FormControl variant = 'outlined' fullWidth={true}>
              <TextField
                label= 'TOTAL'
                fullWidth={true}
                id='total-input'
                name='total'
                variant='outlined'
                value={total}
                // needs to pre-fill with result of wages
                // onChange={handleHourlyTotal}
              >
              </TextField>
            </FormControl>
          </Box>
        </>
        }
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
