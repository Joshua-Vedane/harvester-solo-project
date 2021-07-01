import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardItems from '../DashboardItems/DashboardItems';
import { Grid } from '@material-ui/core';
import { useEffect } from 'react';


function UserPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const projects = useSelector((store) => store.projects);

  // console.log(projects);
  useEffect(() => dispatch({ type: 'GET_PROJECTS' }), []);
  return (
    <Grid className='card-container' container spacing={4} justify="center">
      {projects.map((project) => {
        return (
          <Grid container item xs={12} sm={6} md={4} key={project.id}>
            
              <DashboardItems project={project} />
            
          </Grid>
        )
      })}
    </Grid>
  );
}

export default UserPage;
