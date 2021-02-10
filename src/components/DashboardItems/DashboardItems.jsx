
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Button, Box, Typography, } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DashboardItems({project}) {
  const dispatch = useDispatch();
  const history = useHistory();
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  //Clicking on Edit Button routes to Edit Project
  // don't need payload. just need to get projects reducer b/c this project is already there. 
  function handleEdit () {
    // Get details for clicked project 
    dispatch({type: 'GET_PROJECT_DETAILS', payload})
    history.push('/editproject')
  }

  //Clicking on Details Button routes to Project Details
  // Needs to dispatch an action to go get the expenses from DB with payload of project id
  //Project Details from this page will be visible by Details page via projectsReducer
  function handleDetails () {
    dispatch({type:'GET_DETAILS', payload: project.id})
    history.push('/details')
  }

  useEffect(() => dispatch({type:'GET_PROJECTS'}), []);
  return (
    <>
      <Card >
        <Box>
          <Typography variant='h4' align='center'>
            {project.address_1}
            
          </Typography>
        </Box>
        <Box>
          <img src={project.image} />
        </Box>
        <Box>
          <Typography variant='h5' align='center'>
            {project.start_date}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h5' align='center'>
            ${project.bid}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Box>
            <Button onClick={handleEdit} variant='contained'>Edit</Button>
          </Box>
          <Box>
            <Button onClick={handleDetails} variant='contained'>Details</Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default DashboardItems;
