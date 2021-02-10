import React, { useState, useEffect } from 'react';

import { Box, Typography, TextField, Button, Card, CardContent, CardActions, Select, InputLabel, MenuItem } from '@material-ui/core';
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
  const [employeeId, setEmployeeId ] = useState('');
  const [projectId, setProjectId ] = useState('');

  console.log('employeeId is now:', employeeId);
  console.log('projectId is now:', projectId);

  
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
          <InputLabel
            id="employee-number-label"
            >Employee</InputLabel>
          <Select
            labelId="employee-number"
            fullWidth={true}
            id="employee-number-select"
            onChange={(event) => setEmployeeId(event.target.value)}
            // NEED TO CHANGE THIS TO AN ACTUAL FUNCTION TO KEEP REACT FROM YELLING
            >
            {employees.map((employee) => {
              return(
                <MenuItem key={employee.id} value={employee.id}>{employee.user_name}</MenuItem>
                )
              })}
          </Select>
        </Box>

        <Box>
          <InputLabel
            id="project-number-label"
            >Project</InputLabel>
          <Select
            labelId="project-number"
            fullWidth={true}
            id="project-number-select"
            onChange={(event) => setProjectId(event.target.value)}
            >
            {allProjects.map((project) => {
              return(
                <MenuItem key={project.id} value={project.id}>{project.address_1}</MenuItem>
                )
              })}
          </Select>
        </Box>

        {/* 
        <Box>
          <TextField
            label="Movie Title"
            fullWidth={true}
            variant="outlined"
            // value={movieTitle}
            // onChange={(event) => setMovieTitle(event.target.value)}
          />
        </Box>
        <Box>
          <TextField
            label="URL"
            fullWidth={true}
            variant="outlined"
            // value={movieImage}
            // onChange={(event) => setMovieImage(event.target.value)}
          />
        </Box>
          */}
      </CardContent>
      <Box display="flex" alignItems="center" justifyContent="center">
        <CardActions>
          <Button color="primary" variant="contained" 
          // onClick={handleOpenMenu}
          >
            Genres
        </Button>
          {/* <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}>
            {genreList.map((genreItem) => {
              return (
                <MenuItem key={genreItem.id} onClick={() => handleGenreSelect(genreItem.id)}>
                  {genreItem.name}
                </MenuItem>
              )
            })}
          </Menu> */}
        </CardActions>
      </Box>
      <Box display="flex" justifyContent="center">
        <CardActions>
          <Button
            color="secondary"
            variant="contained"
            // onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            // onClick={handleAddMovie}
          >
            Save
          </Button>
        </CardActions>
      </Box>
    </Card>
  </>
  );
}

export default JoinProject;
