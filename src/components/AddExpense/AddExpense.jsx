import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';


function AddExpense() {
  
  
  const [heading, setHeading] = useState('Add Expense');

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
        <Box mt={2}>
          <FormControl variant='outlined' fullWidth={true} m={1}>

            <InputLabel
              id="project-number-label"
            >Select Category</InputLabel>
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
        <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
             
              <TextField
                label="Description"
                InputLabelProps={{ shrink: projectInfo.address_1 }}
                fullWidth={true}
                id="address1-input"
                name="address1"
                variant='outlined'
                value={projectInfo.address_1}
                onChange={(event) => {dispatch({type: 'SET_PROJECT_INFO', payload: {...projectInfo, address_1 : event.target.value}})}}
              >
              </TextField>
            </FormControl>
          </Box>
          <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
              <TextField
                label='Date'
                fullWidth={true}
                id="address2-input"
                name="address2"
                variant='outlined'
                value={projectInfo.address_2}
                
                onChange={(event) => {dispatch({type: 'SET_PROJECT_INFO', payload: {...projectInfo, address_2 : event.target.value}})}}
              >
              </TextField>
            </FormControl>
          </Box>
          <Box m={2}>
            <FormControl variant='outlined' fullWidth={true}>
              <TextField
                label='Total'
                fullWidth={true}
                id="bid-total-input"
                name="bid"
                variant='outlined'
                value={projectInfo.bid}
                onChange={(event) => {dispatch({type: 'SET_PROJECT_INFO', payload: {...projectInfo, bid : event.target.value}})}}
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
    </>
  );
}

export default AddExpense;
