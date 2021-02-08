import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import AddProjectForm from '../AddProjectForm/AddProjectForm';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddProject(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Add Project');

  return (
    <div>
      <h2>{heading}</h2>
      <AddProjectForm/>
    </div>
  );
}

export default AddProject;
