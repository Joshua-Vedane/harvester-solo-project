import React, { useState, useEffect } from 'react';

import { Box, Typography, TextField, Button, Card, CardContent, CardActions, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './JoinProject.css';


function JoinProject() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Get projects Reducer
  const allProjects = useSelector((store) => store.allProjects)
  // get employees Reducer
  const employees = useSelector((store) => store.employees)
  // local state for inputs (selects)
  const [employeeId, setEmployeeId] = useState('');
  const [projectId, setProjectId] = useState('');

  console.log('employeeId is now:', employeeId);
  console.log('projectId is now:', projectId);

  const handleEmployeeSelect = (event) => {
    setEmployeeId(event.target.value);
  }
  const handleProjectSelect = (event) => {
    setProjectId(event.target.value);
  }

  // handle submit. this will end up through the employees router
  // dispatch will go to employeesSaga for now. 
  const handleSubmit = () => {
    const action = {
      type: 'ADD_EMPLOYEE_TO_PROJECT',
      payload: {
        employeeId: employeeId,
        projectId: projectId
      }
    }
    dispatch(action);
    clearInputs();
    // history.push('/dashboard'); ?? Really want to re-route? 
  }

  //cancel add and route back to dashboard
  const handleCancel = () => {
    clearInputs();
    history.push('/dashboard');
  }

  //clear state 
  const clearInputs = () => {
    setEmployeeId('');
    setProjectId('');
  }
  // Get employees
  useEffect(() => dispatch({ type: 'GET_EMPLOYEES' }), []);
  // Get projects (all of them)
  useEffect(() => dispatch({ type: 'GET_ALL_PROJECTS' }), []);
  
  return (
    <>
      <Box height={50} p={3}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box marginRight={2}>
            <Typography variant="h5"> Add User To Project</Typography>
          </Box>
        </Box>
      </Box>
      <Card className="join-card">
        <CardContent>
          <Box>
            <FormControl variant='outlined' fullWidth={true}>

              <InputLabel
                id="employee-number-label"
              >Employee</InputLabel>
              <Select
                labelId="employee-number"
                fullWidth={true}
                id="employee-number-select"
                value={employeeId}
                onChange={handleEmployeeSelect}
              >
                {employees.map((employee) => {
                  return (
                    <MenuItem key={employee.id} value={employee.id}>{employee.user_name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>

          <Box mt={2}>
            <FormControl variant='outlined' fullWidth={true} m={1}>

              <InputLabel
                id="project-number-label"
              >Project</InputLabel>
              <Select
                labelId="project-number"
                fullWidth={true}
                id="project-number-select"
                value={projectId}
                onChange={handleProjectSelect}
              >
                {allProjects.map((project) => {
                  return (
                    <MenuItem key={project.id} value={project.id}>{project.address_1}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Box>

        </CardContent>

        <Box display="flex" justifyContent="center">
          <CardActions>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCancel}
            >Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >Save
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default JoinProject;
