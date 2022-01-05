import React from "react";

const Dashboard = () => {
  return (
    <div id="main">
      <div id="sidenav">
        <div className="small">
          <img src="./assets/vectors/logo.svg" alt="logo" className="logo" />

          <div className="nav">
            <a className="item active">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-1.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-1__active.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div className="desc">
          <img
            className="hamburger"
            src="./assets/vectors/hamburger.svg"
            alt="hamburger"
          />

          <div className="user">
            <div className="avatar">
              <div className="text fs-42 fw-700">G</div>
            </div>
            <div className="fs-20 fw-200 lh-1 mt-4">Team</div>
            <div className="fw-600 fs-22 lh-1">Garage Lelaval</div>
          </div>

          <div className="explore">
            <div className="fs-26 fw-400 title-text">What's next?</div>
            <div className="fs-10">Tasks assign to you</div>

            <div className="item">
              <div className="title">
                <div className="arrow">
                  <img
                    src="./assets/vectors/arrow-right.svg"
                    alt="arrow-right"
                  />
                </div>
                <div className="fs-14 fw-600">Order Rear Brake Light</div>
                <div className="fs-12 fw-400 sub-title-text">
                  Service 8372782392
                </div>
              </div>
            </div>
            <div className="item">
              <div className="title">
                <div className="arrow">
                  <img
                    src="./assets/vectors/arrow-right.svg"
                    alt="arrow-right"
                  />
                </div>
                <div className="fs-14 fw-600">Make Inventory of Tires</div>
                <div className="fs-12 fw-400 sub-title-text">Nothing</div>
              </div>
            </div>
            <div className="item">
              <div className="title">
                <div className="arrow">
                  <img
                    src="./assets/vectors/arrow-right.svg"
                    alt="arrow-right"
                  />
                </div>
                <div className="fs-14 fw-600">Call Mathilde</div>
                <div className="fs-12 fw-400 sub-title-text">
                  Client Mathilde Ducharme
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content"></div>
    </div>
  );
};

export default Dashboard;
