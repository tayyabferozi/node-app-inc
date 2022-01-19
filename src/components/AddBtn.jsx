import React from "react";

const AddBtn = ({ blue, title, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-add${blue ? " blue" : ""} ${className && className}`}>
      {blue ? (
        <img src="./assets/vectors/add-blue.svg" alt="add" className="add" />
      ) : (
        <img src="./assets/vectors/add.svg" alt="add" className="add" />
      )}
      {title || "ADD"}
    </button>
  );
};

export default AddBtn;
