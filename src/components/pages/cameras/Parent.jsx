import React, { useState } from 'react';
//import Cameras from './Camera/Cameras';
//import Video from './Video/Video';
//import "./parent.css";


const Parent = () => {
    // State to keep track of the clicked image
    const [selectedImage, setSelectedImage] = useState(null);
  
    // Function to handle image click and update the state
    const handleImageClick = (image) => {
      // Update the state with the clicked image
      setSelectedImage(image);
  
      // Perform any additional logic or actions based on the clicked image
      // For example, you can trigger an API call, update other components, etc.
      // ...
  
      console.log(`Image clicked: ${image}`);
    };
  
    return (
      <div className="app-container">
        <Cameras onImageClick={handleImageClick} />
        <Video selectedImage={selectedImage} />
      </div>
    );
  };
  
  export default Parent;
