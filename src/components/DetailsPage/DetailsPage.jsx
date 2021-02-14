import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams  } from 'react-router-dom';
import './DetailsPage.css';

import DetailsTable from '../DetailsTable/DetailsTable'


function DetailsPage(props) {
  const page = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const projectInfo = useSelector((store) => store.projectInfo)
  //expenses will go into the detailsTable component. 
  const expenses = useSelector((store) => store.expenses)

  const sumExpenses = () => {
    let total = 0;
    for (const expense of expenses) {
      let expenseCost = Number(expense.total)
      total += expenseCost;
    }
    console.log(total);
    return total.toFixed(2); 
  }
  // sumExpenses();

  useEffect(() => {
    dispatch({type: 'GET_EXPENSES', payload: page.id})
    dispatch({type: 'GET_PROJECT_INFO', payload: page.id})
  }, [])
  return (
    <>
    {projectInfo.address_1 && (
      <Box className='details-container'>

        <Box className='project-info-container'>
          <Box className='project-info'>
            <Typography variant='h6' align='center'>
              {projectInfo.address_1}
            </Typography>
            <Typography variant='h6' align='center'>
              {projectInfo.address_2}
            </Typography>
            <Typography variant='h6' align='center'>
              Start Date: {projectInfo.start_date}
            </Typography>
            
          </Box>
          <Box className='project-image'>
            <img src={projectInfo.image} alt=""/>
          </Box>
        </Box>
        

        <DetailsTable>

        </DetailsTable>

        <Box display='flex' flexDirection='column' alignItems='flex-end'>
          <Typography variant='h6' >
            Bid: $ {projectInfo.bid}
          </Typography>
          <Typography variant='h6' >
            {sumExpenses()}
          </Typography>
          <Typography variant='h6' >
            {projectInfo.bid - sumExpenses()} 
          </Typography>

        </Box>
      
      </Box>
    )}  
    </>
  );
}

export default DetailsPage;
