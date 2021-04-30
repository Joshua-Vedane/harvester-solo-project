import React, { useState, useEffect } from 'react';
import { Box, Typography, } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './DetailsPage.css';

import DetailsTable from '../DetailsTable/DetailsTable'


function DetailsPage() {
  const page = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const projectInfo = useSelector((store) => store.projectInfo)
  const expenses = useSelector((store) => store.expenses)

  //calculate expenses total
  const sumExpenses = () => {
    let total = 0;
    for (const expense of expenses) {
      let expenseCost = Number(expense.total)
      total += expenseCost;
    }
    return total.toFixed(2);
  }

  //calculate net profit
  const netProfit = () => {
    let total = (projectInfo.bid - sumExpenses());
    return total.toFixed(2);
  }

  useEffect(() => {
    dispatch({ type: 'GET_EXPENSES', payload: page.id })
    dispatch({ type: 'GET_PROJECT_INFO', payload: page.id })
    dispatch({ type: 'GET_CATEGORIES' })
    dispatch({ type: 'GET_EMPLOYEES' })
  }, [])
  return (
    <>
      {projectInfo.address_1 && (
        <Box className='details-container'>
          <Box className='project-info-container'>
            <Box className='project-info'>
              <Typography variant='subtitle1' align='center'>
                {projectInfo.address_1}
              </Typography>
              <Typography variant='subtitle1' align='center'>
                {projectInfo.address_2}
              </Typography>
              <Typography variant='subtitle1' align='center'>
                Start Date: {projectInfo.start_date}
              </Typography>
            </Box>
            <Box className='details-image-container'>
              <img className='details-image' src={projectInfo.image} align='center' alt="" />
            </Box>
          </Box>
          {/* Displays the table of expenses */}
          <DetailsTable>
          </DetailsTable>
          <Box className='project-calculations' >
            <Typography variant='h6' >
              Bid: ${projectInfo.bid}
            </Typography>
            <Typography variant='h6' >
              Expenses: ${sumExpenses()}
            </Typography>
            <Typography variant='h6' >
              Net Profit: ${netProfit()}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
}

export default DetailsPage;
