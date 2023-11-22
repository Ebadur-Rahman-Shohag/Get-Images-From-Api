import React from "react";
import "./ImageShow.css";
function ImageShow({ image }) {
  return (
    <div className="image-container">
      <img src={image.urls.small} alt="images" />
    </div>
  );
}

export default ImageShow;
