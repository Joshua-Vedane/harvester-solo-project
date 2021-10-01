import { FormControl, Typography, Box, Button, TextField, Card } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    // <Box className='formPanel'>
    //   <Card className='card'>
    //     <Box my={3}>
    //       <Typography variant='h5'> Login</Typography>
    //     </Box>
    //     {errors.loginMessage && (
    //       <Box my={1}>
    //       <Typography variant='h5' className='alert' role='alert'>{errors.loginMessage}</Typography>
    //     </Box>
    //     )}
    //     <Box my={2}>
    //       <FormControl variant='outlined' fullWidth={true}>
    //         <TextField
    //           label='Username'
    //           fullWidth={true}
    //           variant='outlined'
    //           value={username}
    //           onChange={(event) => setUsername(event.target.value)}
    //           required
    //           ></TextField>
    //       </FormControl>
    //     </Box>
    //     <Box my={2}>
    //       <FormControl variant = 'outlined' fullWidth={true}>
    //         <TextField
    //           label='Password'
    //           type='password'
    //           fullWidth={true}
    //           variant='outlined'
    //           value={password}
    //           onChange={(event) => setPassword(event.target.value)}
    //           required
    //           ></TextField>
    //       </FormControl>
    //     </Box>
    //     <Box mx='auto' my={2}>
    //       <Button
    //         color='primary'
    //         variant='contained'
    //         type='submit'
    //         onClick={login}
    //         >
    //         Login
    //       </Button>
    //     </Box>
    //   </Card>
    //   </Box>

    <form className="formPanel" onSubmit={login}>
        <h2>Login</h2>
      {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Log In" />
      </div>
    </form>
  );
}

export default LoginForm;
