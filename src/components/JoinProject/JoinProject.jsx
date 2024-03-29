import React, { useState, useEffect } from 'react';

import { Box, Typography, TextField, Button, Card, CardContent, CardActions, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



function JoinProject() {
  const dispatch = useDispatch();
  const history = useHistory();

  const allProjects = useSelector((store) => store.allProjects)
  const employees = useSelector((store) => store.employees)

  const [employeeId, setEmployeeId] = useState('');
  const [projectId, setProjectId] = useState('');

  // console.log('employeeId is now:', employeeId);
  // console.log('projectId is now:', projectId);

  const handleEmployeeSelect = (event) => {
    setEmployeeId(event.target.value);
  }
  const handleProjectSelect = (event) => {
    setProjectId(event.target.value);
  }

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
    history.push('/dashboard'); // submit confirmation
  }

  const handleCancel = () => {
    clearInputs();
    history.push('/dashboard'); // cancel confirmation
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
      <Card className="card">
        <CardContent>
          <Box>
            <FormControl variant='outlined' fullWidth={true}>
              <InputLabel
                m={1}
                htmlFor="employee-number-label"
              >Employee</InputLabel>
              <Select
                label='Employee'
                labelId="employee-number"
                fullWidth={true}
                id="employee-number-label"
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
                label='Project'
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
