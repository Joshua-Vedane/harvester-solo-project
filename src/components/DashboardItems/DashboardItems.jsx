
import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Button, Box, Typography, } from '@material-ui/core';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './DashboardItems.css';



function DashboardItems({project}) {

  const dispatch = useDispatch();
  const history = useHistory();
  

  //Clicking on Edit Button routes to Edit Project
  function handleEdit () {
    // Get details for clicked project 
    // dispatch({type: 'GET_PROJECT_DETAILS', payload: project.id})
    history.push({pathname:`/editproject/${project.id}`})
  }

  //Clicking on Details Button routes to Project Details
  // This will be similiar to the above. 
  function handleDetails () {

    history.push({pathname: `/details/${project.id}`})
  }

  useEffect(() => dispatch({type:'GET_PROJECTS'}), []);
  const image = 'documentation/images/laurel.jpg';
  return (
    <>
      <Card className='project-card-item' >
        <Box>
          <Typography variant='h5' align='center'>
            {project.address_1}
            
          </Typography>
        </Box>
        <Box className='project-image-container'>
          <img className='project-image' src={project.image} align='center'/>
        </Box>
        <Box>
          <Typography variant='h6' align='center'>
            Start Date: {project.start_date}
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6' align='center'>
            Bid Total: ${project.bid}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' m={2}>
          <Box mr={2}>
            <Button onClick={handleEdit} variant='contained' color='primary'>Edit</Button>
          </Box>
          <Box ml={2} >
            <Button onClick={handleDetails} variant='contained' color='secondary'>Details</Button>
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default DashboardItems;
