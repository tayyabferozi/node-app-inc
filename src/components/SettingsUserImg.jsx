import React from "react";

const SettingsUserImg = ({ placeholder }) => {
  return (
    <div className="user-img-container">
      <img src="./assets/vectors/camera.svg" alt="camera" />
      <div className="img">
        {placeholder ? (
          <div className="placeholder"></div>
        ) : (
          <img src={`./assets/img/settings-user.png`} alt="user" />
        )}
      </div>
      <img src="./assets/vectors/bin-2.svg" alt="bin" />
    </div>
  );
};

export default SettingsUserImg;
