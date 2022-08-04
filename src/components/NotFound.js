import React from 'react';

//Create a function that renders a message if what was in the input doesn't exist
const NotFound = () => {
    return (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
    );
  };
  
  export default NotFound;