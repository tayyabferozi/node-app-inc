import React from "react";

const Performances = () => {
  return (
    <div className="performances">
      <div className="item">
        <h3 className="section-title">47%</h3>
        <h4 className="sub-title">Today's work</h4>
        <div className="progress-bar">
          <div className="bg"></div>
          <div className="progress" style={{ width: "47%" }}></div>
        </div>
      </div>
      <div className="item">
        <h3 className="section-title">76%</h3>
        <h4 className="sub-title">Clients Connected</h4>
        <div className="progress-bar">
          <div className="bg"></div>
          <div className="progress" style={{ width: "76%" }}></div>
        </div>
      </div>
      <div className="item">
        <h3 className="section-title">97%</h3>
        <h4 className="sub-title">Satisfaction</h4>
        <div className="progress-bar">
          <div className="bg"></div>
          <div className="progress" style={{ width: "97%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Performances;
