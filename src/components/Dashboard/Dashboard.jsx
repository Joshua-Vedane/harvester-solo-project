import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import DashboardItems from '../DashboardItems/DashboardItems';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.user_name}!</h2>
      <p>Your ID is: {user.id}</p>
      {/* DashboardItems contained within a map function for all projects */}
      <DashboardItems></DashboardItems>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
