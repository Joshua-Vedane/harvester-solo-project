
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
          <Typography variant='h4' align='center'>
            {project.address_1}
            
          </Typography>
        </Box>
        <Box className='project-image-container'>
          <img className='project-image' src='images/laurel.jpg' align='center'/>
          {/* <img src={image}  /> */}
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
          <Box >
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
