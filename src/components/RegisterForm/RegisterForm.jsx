import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Button, TextField } from '@material-ui/core';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = () => {
    // event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        hourlyRate: hourlyRate,
      },
    });
  }; // end registerUser


  return (
    <Box className='formPanel' display="flex" flexDirection='column' justifyContent='center' alignItems='center'>
      {/* <form className="formPanel" onSubmit={registerUser}> */}
        <Box >
          <h2>Register User</h2>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}
        </Box>
        <Box >
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
        </Box>
        <Box >
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </Box>
        <Box >
          <label htmlFor="hourlyRate">
            Hourly Wage:
            <input
              type="text"
              name="hourlyRate"
              value={hourlyRate}
              required
              onChange={(event) => setHourlyRate(event.target.value)}
            />
          </label>
        </Box>
        <Box>
          <Button 
            variant='contained' 
            color='primary' 
            // name="submit" 
            value="Register"  
            onClick={registerUser}
            >Submit</Button>
        </Box>
      {/* </form> */}
    </Box>
  );
}

export default RegisterForm;
