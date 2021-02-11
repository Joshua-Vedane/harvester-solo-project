import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function EditProject() {
  const page = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  // useEffect(() => dispatch({type:'GET_PROJECTS'}), []);
  // useEffect(() => {const projectDetails = useSelector((store) => store.projectDetails)});

  const projectInfo = useSelector((store) => store.projectInfo)

    // NOT STORING IN STATE. Dispatch to editProjectInfo Reducer
  // const [projectInfo, setProjectInfo] = useState({
  //   address1: projectDetails.address_1,
  //   address2: projectDetails.address_2,
  //   bid: projectDetails.bid,
  //   startDate: projectDetails.start_date,
  //   image: projectDetails.image
  // })

  //This will be handled in the reducer? 
  function handleChange(event) {
    const value = event.target.value;
    setProjectInfo ({
      ...projectInfo,
      [event.target.name] : value
    });
  }

  function handleSubmit () {
    // send dispatch to update database with edited project information. 
    console.log('submit clicked');
  }

  function handleCancel () {
    console.log('cancel clicked');
  }


  useEffect(() => {
    dispatch({type: 'GET_PROJECT_INFO', payload: page.id})
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
    {/* Only renders the card when projectDetails is a thing */}
      

      {projectInfo.id && (

      
      <Card className="add-project-card">
        
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
                onChange={handleChange}
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
                
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
      </Card>
      )}
    </>
  );
}

export default EditProject;
