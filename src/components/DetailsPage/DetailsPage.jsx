import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import DetailsTable from '../DetailsTable/DetailsTable'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function DetailsPage(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('DetailsPage');

  return (
    <div>
      <h2>{heading}</h2>
      {/* Here will go details about the project */}
      {/* Here will go the table. Map over expenses and get them in the table here. Give it the mapped expense as props */}

      <DetailsTable/>
      {/* Display math stuff below */}
    </div>
  );
}

export default DetailsPage;
