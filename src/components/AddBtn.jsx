import React from "react";

const AddBtn = ({ black, blue, title, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-add${blue ? " blue" : ""}${black ? " black" : ""} ${
        className && className
      }`}
    >
      {blue || black ? (
        <img src="./assets/vectors/add-blue.svg" alt="add" className="add" />
      ) : (
        <img src="./assets/vectors/add.svg" alt="add" className="add" />
      )}
      {title || "ADD"}
    </button>
  );
};

export default AddBtn;
