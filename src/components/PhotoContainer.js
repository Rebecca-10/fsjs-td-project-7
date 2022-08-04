import React from "react"; //imported React
import Photo from "./Photo"; //imported Photo from './Photo'
import NoPhotos from "./NotFound"; //imported NoPhoto from './NotFound'

//Created a component named PhotoContainer
const PhotoContainer = (props) => {
  // stored the data in a variable named results
  const results = props.data;
  // named a variable photos
  let photos;

  //Created an if/else statement that checked to see if there was a photo available or there wasn't
  if (results.length > 0) {
    // map through the array and return a photo
    photos = results.map((photo) => (
      <Photo
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        key={photo.id}
      />
    ));
  } else {
    photos = <NoPhotos />;
  }

  // returned the photos
  return (
    
    <div className="container">
    <ul>
   
      {photos}
      
      </ul>
      </div>
  )
};

export default PhotoContainer;