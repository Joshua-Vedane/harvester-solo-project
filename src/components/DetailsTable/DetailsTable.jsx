import React, { useState, useEffect } from 'react';
import { Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Modal, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import DetailsModal from '../DetailsModal/DetailsModal';


function DetailsTable() {
  const dispatch = useDispatch();
  const expenses = useSelector((store) => store.expenses)
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = (id) => {
    dispatch({ type: 'GET_EDIT_EXPENSE', payload: id })
    console.log('clicked on edit for', id);
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id })
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table size='small' stickyHeader>
          <TableHead >
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
              return (
                <TableRow key={expense.id}>
                  <TableCell>{expense.category_name}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.total}</TableCell>
                  <TableCell><Button variant="outlined" color='primary' onClick={() => handleModalOpen(expense.id)}>Edit</Button></TableCell>
                  <TableCell><Button variant="outlined" color='secondary' onClick={() => handleDelete(expense.id)}>Delete</Button></TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <DetailsModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

export default DetailsTable;
