import React from "react";
import { NavLink } from "react-router-dom";

import $ from "jquery";

const MainLayout = ({
  children,
  title,
  headVector,
  sideNavVector,
  minimalNavRight,
}) => {
  const toggleSideNav = () => {
    $("#sidenav").toggleClass("active");
    $(".dark-overlay.overlay-sidenav").toggleClass("active");
  };

  return (
    <div id="main">
      <div
        className="dark-overlay overlay-sidenav"
        onClick={toggleSideNav}
      ></div>
      <div id="sidenav">
        <div className="small">
          <img src="./assets/vectors/logo.svg" alt="logo" className="logo" />

          <div className="nav">
            <NavLink to="/dashboard" className="item">
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
            </NavLink>
            <NavLink to="/signup-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-2.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-2__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/signup-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-3.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-3__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/clients-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-4.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-4__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/clients-list" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-5.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-5__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/signup-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-6.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-6__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/signup-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-7.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-7__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/signup-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-8.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-8__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
            <NavLink to="/signup-1" className="item">
              <div className="img">
                <img
                  className="inactive"
                  src="./assets/vectors/nav-9.svg"
                  alt=""
                />
                <img
                  className="active"
                  src="./assets/vectors/nav-9__active.svg"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
        </div>
        <div className={`desc ${minimalNavRight ? "minimal" : ""}`}>
          <div className="main">
            <img
              className="hamburger d-sm-none d-block"
              src="./assets/vectors/hamburger.svg"
              alt="hamburger"
              onClick={toggleSideNav}
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
          <div className="bg">
            <img src={sideNavVector} alt="sidenav-bottom" />
          </div>
        </div>
      </div>
      <div id="content">
        <div className="page-container">
          <div className="head">
            <div className="page-heading">
              <img
                className="me-sm-5 me-4 hamburger d-1300-none"
                src="./assets/vectors/hamburger.svg"
                alt="hamburger"
                onClick={toggleSideNav}
              />
              <img className="me-3 indicator" src={headVector} alt="dasboard" />
              <h1>{title}</h1>
            </div>
            <div className="info">
              <div className="search">
                <div className="custom-form-control">
                  <div className="input">
                    <input
                      className="custom-input"
                      type="text"
                      id="search"
                      placeholder="Start typing.."
                      value=""
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="qr">
                <img src="./assets/vectors/qr.svg" alt="qr" />
              </div>
              <div className="user">
                <img src="./assets/img/user.png" alt="user" />
              </div>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
