import React from "react";


//Create a function that takes in the parameter props and returns the photos
const Photo = (props) => {
  return (


     
      <li>
        <img src={props.url} alt="" />
      </li>
    
   
  );
};

export default Photo;