import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Box, Button } from '@material-ui/core';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();
  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <Grid container spacing={1}  >
      <Grid item xs={12} >
        <RegisterForm />
      </Grid>
      <Grid item xs={12}>
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <h4>Already a Member?</h4>
          <Button
            onClick={onLogin}
            variant='contained'
            color='secondary'>
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
