import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, CardActions, InputLabel, FormControl, Select, MenuItem, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams  } from 'react-router-dom';


function DetailsTable() {
  const expenses = useSelector((store) => store.expenses)

  return (
    <>
      <TableContainer>
        <Table stickyheader>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {expenses.map((expense) => {
            return(
              <TableRow key = {expense.id}>
                <TableCell>{expense.category_name}</TableCell>
                <TableCell>{expense.description}</TableCell>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.total}</TableCell>
                <TableCell><Button>Edit</Button></TableCell>
                <TableCell><Button>Delete</Button></TableCell>
              </TableRow>
            )
          })}
          </TableBody>
        </Table>

      </TableContainer>
    </>
  );
}

export default DetailsTable;
