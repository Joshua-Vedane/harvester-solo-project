import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './EditProject.css'


function EditProject() {
  const page = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // holding project info in a reducer because of async rendering issue. 
  // the page would load before any project info data got back from db. 
  const projectInfo = useSelector((store) => store.projectInfo)

  function handleSubmit() {
    // send dispatch to update database with edited project information. 
    dispatch({
      type: 'UPDATE_PROJECT_INFO',
      payload: projectInfo
    })
    dispatch({ type: 'CLEAR_PROJECT_INFO' });
    history.push('/dashboard'); // submit confirmation
  }

  function handleCancel() {
    dispatch({ type: 'CLEAR_PROJECT_INFO' });
    history.push('/dashboard'); // cancel confirmation
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_PROJECT', payload: page.id })
    history.push('/dashboard') // delete confirmation
  }


  useEffect(() => {
    dispatch({ type: 'GET_PROJECT_INFO', payload: page.id })
  }, [])

  return (
    <>
      <Box height={50} p={3}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box marginRight={2}>
            <Typography variant="h5"> Edit Project</Typography>
          </Box>
        </Box>
      </Box>
      {/* Only renders the card when projectDetails.id has a truthy value */}
      {projectInfo.id && (
        <Card className="edit-project-card">
          <CardContent>
            <Box m={2}>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label="Address 1"
                  InputLabelProps={{ shrink: projectInfo.address_1 }}
                  fullWidth={true}
                  id="address1-input"
                  name="address1"
                  variant='outlined'
                  value={projectInfo.address_1}
                  onChange={(event) => { dispatch({ type: 'SET_PROJECT_INFO', payload: { ...projectInfo, address_1: event.target.value } }) }}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={2}>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label='Address 2'
                  fullWidth={true}
                  id="address2-input"
                  name="address2"
                  variant='outlined'
                  value={projectInfo.address_2}
                  onChange={(event) => { dispatch({ type: 'SET_PROJECT_INFO', payload: { ...projectInfo, address_2: event.target.value } }) }}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={2}>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label='Bid Total'
                  fullWidth={true}
                  id="bid-total-input"
                  name="bid"
                  variant='outlined'
                  value={projectInfo.bid}
                  onChange={(event) => { dispatch({ type: 'SET_PROJECT_INFO', payload: { ...projectInfo, bid: event.target.value } }) }}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={2}>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label='Image URL'
                  fullWidth={true}
                  id="imageURL-input"
                  name="image"
                  variant='outlined'
                  value={projectInfo.image}
                  onChange={(event) => { dispatch({ type: 'SET_PROJECT_INFO', payload: { ...projectInfo, image: event.target.value } }) }}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={2}>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label='Date Start'
                  fullWidth={true}
                  id="date-start-input"
                  name="startDate"
                  variant='outlined'
                  value={projectInfo.start_date}
                  onChange={(event) => { dispatch({ type: 'SET_PROJECT_INFO', payload: { ...projectInfo, start_date: event.target.value } }) }}
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
                onClick={handleCancel}
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
          <Box m={4} display="flex" justifyContent="center">
            <Button
              color='secondary'
              variant='contained'
              onClick={handleDelete}
            >Delete
          </Button>
          </Box>
        </Card>
      )}
    </>
  );
}

export default EditProject;
