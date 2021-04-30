import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardItems from '../DashboardItems/DashboardItems';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import './Dashboard.css';

function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const projects = useSelector((store) => store.projects);

  // console.log(projects);
  useEffect(() => dispatch({ type: 'GET_PROJECTS' }), []);
  return (
    <Grid className='project-container' container spacing={4} justify="center">
      {projects.map((project) => {
        return (
          <Grid className='project-item' item xs={12} key={project.id}>
            <DashboardItems project={project} />
          </Grid>
        )
      })}
    </Grid>
  );
}

export default UserPage;
