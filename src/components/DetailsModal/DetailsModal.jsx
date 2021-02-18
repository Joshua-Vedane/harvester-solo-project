import { Modal, Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl, Select, MenuItem} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  modal_body: {
    width: '50vw',
    padding: '15px',
    display: 'flex', 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '5px',
  }
});
function DetailsModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const editExpense = useSelector((store) => store.editExpense)
  const categories = useSelector((store) => store.categories)
  const employees = useSelector((store) => store.employees)

  const [hourlyRate, setHourlyRate] = useState(0);
  const [hours, setHours] = useState(0);

  const handleCancel = () => {
    clearInputs();
    props.handleModalClose();
  }

  const handleSubmit = () => {
    dispatch({type: 'UPDATE_EXPENSE', payload: editExpense})
    props.handleModalClose();
  }

  const handleWageSubmit = () => {
    const wageEditExpense = {...editExpense, total: Number(hours) * Number(hourlyRate)}
    console.log('handleWageSubmit', wageEditExpense);
    const action = {
      type: 'UPDATE_EXPENSE',
      payload: wageEditExpense
    }
    dispatch(action);
    clearInputs();
    props.handleModalClose();
  }

  const clearInputs = () => {
    setHours(0);
    setHourlyRate(0);
  }

  return (
    <>
    <Box >
      <Modal
        className={classes.modal}
        open={props.modalOpen}
        onClose={props.handleModalClose}
        >
        <Box className={classes.modal_body}>
          
            <Box m={2}  width='80%'>
              <FormControl variant='outlined' fullWidth={true}>
                <InputLabel
                  m={1}
                  htmlFor="category-select-label"
                >Select Category</InputLabel>
                <Select
                  label='Select Category'
                  value={editExpense.category_id}
                  onChange={(event) => {dispatch({type: 'SET_EDIT_EXPENSE', payload: {...editExpense, category_id: event.target.value}})}}
                >
                  {categories.map((category) => {
                return (
                  <MenuItem key={category.id} value={category.id}>{category.category_name}</MenuItem>
                )
              })}
                </Select>
              </FormControl>
            </Box>
            {/* // If category selected is 'wage', show different inputs */}
            {editExpense.category_id != '4' ?
            <>
            <Box m={1} width='80%'>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label="Description"
                  InputLabelProps={{shrink:editExpense.description}}
                  name="description"
                  variant='outlined'
                  value={editExpense.description}
                  onChange={(event) => {dispatch({type: 'SET_EDIT_EXPENSE', payload: {...editExpense, description : event.target.value}})}}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={1} width='80%'>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label="Date"
                  InputLabelProps={{shrink:editExpense.date}}
                  name="date"
                  variant='outlined'
                  value={editExpense.date}
                  onChange={(event) => {dispatch({type: 'SET_EDIT_EXPENSE', payload: {...editExpense, date : event.target.value}})}}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={1} width='80%'>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label="Total"
                  InputLabelProps={{shrink:editExpense.total}}
                  name="total"
                  variant='outlined'
                  value={editExpense.total}
                  onChange={(event) => {dispatch({type: 'SET_EDIT_EXPENSE', payload: {...editExpense, total : event.target.value}})}}
                >
                </TextField>
              </FormControl>
            </Box>
            </>
            :
            // display if wage is selected
            <>
            <Box m={1} width='80%'>
              <FormControl variant = 'outlined' fullWidth={true}>
                <InputLabel>
                  Select Employee
                  </InputLabel>
                <Select
                label='Select Employee'
                fullWidth={true}
                onChange={(event) => {dispatch({type: 'SET_EDIT_EXPENSE', payload: {...editExpense, description: event.target.value.user_name}}); setHourlyRate(event.target.value.hourly_rate)}}
                >
                  {employees.map((employee) => {
                return (
                  <MenuItem key={employee.id} value={employee}>{employee.user_name}</MenuItem>
                )
              })}
                </Select>
              </FormControl>
            </Box>
            <Box m={1} width='80%'>
              <FormControl variant='outlined' fullWidth={true}>
                <TextField
                  label="Date"
                  InputLabelProps={{shrink:editExpense.date}}
                  name="date"
                  variant='outlined'
                  value={editExpense.date}
                  onChange={(event) => {dispatch({type: 'SET_EDIT_EXPENSE', payload: {...editExpense, date : event.target.value}})}}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={1} width='80%'>
              <FormControl variant = 'outlined' fullWidth={true}>
                <TextField
                  label= 'Hours'
                  fullWidth={true}
                  variant='outlined'
                  value={hours}
                  onChange={(event) => setHours(event.target.value)}
                >
                </TextField>
              </FormControl>
            </Box>
            <Box m={1} width='80%'>
              <FormControl variant = 'outlined' fullWidth={true}>
                <TextField
                  label= 'TOTAL'
                  fullWidth={true}
                  variant='outlined'
                  value={Number(hours) * Number(hourlyRate)}
                >
                </TextField>
              </FormControl>
            </Box>
            </>
          }
          <Box display="flex" justifyContent="center">
          <CardActions>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleCancel}
            >Cancel
            </Button>
            {editExpense.category_id != '4' ? 
            <Button
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >Submit
            </Button>
            :
            <Button
              color="primary"
              variant="contained"
              onClick={handleWageSubmit}
            >Submit
            </Button>
            } 
          </CardActions>
        </Box>
       
        </Box>
      </Modal>
    </Box>
    </>
  );
}

export default DetailsModal;
