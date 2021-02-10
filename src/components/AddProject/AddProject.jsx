import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import AddProjectForm from '../AddProjectForm/AddProjectForm';
import './AddProject.css';


function AddProject() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [bidTotal, setBidTotal] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [dateStart, setDateStart] = useState('');

  const handleSubmit = () => {
    console.log('submit clicked');
  }

  return (
    <>
      <Box height={50} p={3}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box marginRight={2}>
            <Typography variant="h5"> Add Project</Typography>
          </Box>
        </Box>
      </Box>
      <Card className="add-project-card">
        
        <CardContent>
        <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
              <TextField
                label='Address 1'
                fullWidth={true}
                id="address1-input"
                variant='outlined'
                value={address1}
                onChange={(event) => setAddress1(event.target.value)}
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
                variant='outlined'
                value={address2}
                onChange={(event) => setAddress2(event.target.value)}
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
                variant='outlined'
                value={bidTotal}
                onChange={(event) => setBidTotal(event.target.value)}
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
                variant='outlined'
                value={imageURL}
                onChange={(event) => setImageURL(event.target.value)}
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
                variant='outlined'
                value={dateStart}
                onChange={(event) => setDateStart(event.target.value)}
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

export default AddProject;
