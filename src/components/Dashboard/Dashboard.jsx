import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useEffect} from 'react-redux';
import DashboardItems from '../DashboardItems/DashboardItems';
import { Grid } from '@material-ui/core';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  useEffect(() => dispatchEvent({type:'GET_PROJECTS'}), []);
  return (
    <Grid container spacing={4} justify="center">
      <DashboardItems></DashboardItems>

    </Grid>
      
      
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
