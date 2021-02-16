import { Modal } from '@material-ui/core';
import React, { useState } from 'react';
import {useSelector} from 'react-redux';



function DetailsModal(props) {
  

  return (
    <Modal
      open={props.modalOpen}
      onClose={props.handleModalClose}
    >
      <p>I'm a modal</p>
    </Modal>
  );
}

export default DetailsModal;
