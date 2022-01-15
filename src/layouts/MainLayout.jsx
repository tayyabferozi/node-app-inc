import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import $ from "jquery";
import SearchInput from "../components/SearchInput";

const MainLayout = ({
  subClr,
  children,
  title,
  headVector,
  minimalNavRight,
  exploreTitle,
  exploreSub,
  exploreContent,
  itemsControlledWidth,
  itemVector,
  progressNum,
}) => {
  const toggleSideNav = () => {
    $("#sidenav").toggleClass("active");
    $(".dark-overlay.overlay-sidenav").toggleClass("active");
  };

  const toggleTopMenu = () => {
    $(".sidemenu").toggleClass("active");
  };

  return (
    <div id="main">
      <div
        className="dark-overlay overlay-sidenav"
        onClick={toggleSideNav}
      ></div>
      <div id="sidenav">
        <div className={`desc${minimalNavRight ? " minimal" : ""}`}>
          <div className="main">
            <img
              className="logo"
              src="./assets/vectors/logo-lg.svg"
              alt="logo"
            />
            <img
              className="hamburger d-1300-none"
              src="./assets/vectors/hamburger.svg"
              alt="hamburger"
              onClick={toggleSideNav}
            />

            <div className="explore">
              <div className="round-progress mb-3">
                <div className="fw-500 fs-20 text">{progressNum}</div>
                <img src="./assets/vectors/round-progress.svg" alt="progess" />
              </div>
              <h2 className="title-side">{exploreTitle}</h2>
              {exploreSub && (
                <div className="fs-10 text-light-5">{exploreSub}</div>
              )}

              <div className="items mt-4">
                {exploreContent.map((el, idx) => {
                  const { time, title, sub, small } = el;

                  return (
                    <div className={`item`} key={"explore" + idx}>
                      <div
                        className={`title${
                          itemsControlledWidth ? " max-width" : ""
                        }`}
                      >
                        <div className="arrow">
                          <img src={itemVector} alt="arrow-right" />
                        </div>
                        {time && (
                          <div className="time-container">
                            <div className="circle"></div>
                            <div className="fs-12 fw-700 font-manrope">
                              {time}
                            </div>
                          </div>
                        )}
                        <div className="fs-14 fw-600">{title}</div>
                        <div
                          className="fs-12 fw-400 sub-title-text"
                          style={{ color: subClr }}
                        >
                          {sub}
                        </div>
                        {small && (
                          <div className="mt-1 title-label">{small}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bottom py-5">
            <h4 className="evidence-word">Current Usage</h4>
            <div className="fw-400 fs-12 text-light-5">
              Overall business desk Usage
            </div>

            <div class="progress-bar mt-4">
              <div class="bg"></div>
              <div
                class="progress"
                style={{ width: "38.7%", backgroundColor: "#4B40D1" }}
              ></div>
            </div>
            <div className="progress-sub">
              <span className="fw-700">Call</span> 387 / 1000 min.
            </div>
            <div class="progress-bar">
              <div class="bg"></div>
              <div
                class="progress"
                style={{ width: "72", backgroundColor: "#ECA0A0" }}
              ></div>
            </div>
            <div className="progress-sub">
              <span className="fw-700">Video</span> 72 / 100 min.
            </div>
            <div class="progress-bar">
              <div class="bg"></div>
              <div
                class="progress"
                style={{ width: "100%", backgroundColor: "#4ACBD3" }}
              ></div>
            </div>
            <div className="progress-sub">
              <span className="fw-700">Storage</span> 12 / 100 go.
            </div>

            <button className="btn btn-dark d-flex align-items-center justify-content-center mt-2">
              <div className="fs-14 text-inter text-white me-2 lh-1">
                Add Credits
              </div>
              <img src="./assets/vectors/add-credits.svg" alt="add-credits" />
            </button>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="page-container">
          <div className="head">
            <div className="sidemenu">
              <h3>menu</h3>
              <div className="sidemenu-nav">
                <Link to="/360" className="item">
                  <div className="img">
                    <img src="./assets/vectors/360.svg" alt="360" />
                  </div>
                  <div className="text">360</div>
                </Link>
                <Link to="/360" className="item">
                  <div className="img">
                    <img src="./assets/vectors/desk.svg" alt="desk" />
                  </div>
                  <div className="text">desk</div>
                </Link>
                <Link to="/way" className="item">
                  <div className="img">
                    <img src="./assets/vectors/way.svg" alt="way" />
                  </div>
                  <div className="text">way</div>
                </Link>
                <Link to="/360" className="item">
                  <div className="img">
                    <img src="./assets/vectors/wallet.svg" alt="wallet" />
                  </div>
                  <div className="text">wallet</div>
                </Link>
                <Link to="/360" className="item">
                  <div className="img">
                    <img src="./assets/vectors/inventory.svg" alt="inventory" />
                  </div>
                  <div className="text">inventory</div>
                </Link>
                <Link to="/360" className="item">
                  <div className="img">
                    <img src="./assets/vectors/workshop.svg" alt="workshop" />
                  </div>
                  <div className="text">workshop</div>
                </Link>
              </div>
              <div className="options">
                <div className="d-flex flex-column justify-content-center me-2 me-sm-4">
                  <a href="#0" className="text">
                    Logout
                  </a>
                  <a href="#0" className="text">
                    Settings
                  </a>
                </div>
                <button
                  className="btn d-flex align-items-center"
                  onClick={toggleTopMenu}
                >
                  <img src="./assets/vectors/sidemenu-close.svg" alt="close" />
                </button>
              </div>
            </div>
            <div className="page-heading">
              <img
                className="me-lg-5 me-4 hamburger d-1300-none"
                src="./assets/vectors/hamburger.svg"
                alt="hamburger"
                onClick={toggleSideNav}
              />
              <img className="me-3 indicator" src={headVector} alt="dasboard" />
              <h1>{title}</h1>
            </div>
            <div className="info">
              <SearchInput
                placeholder="Search Clients or Things "
                icon="./assets/vectors/qr.svg"
              />
              <div className="nav">
                <div className="messages">
                  <img src="./assets/vectors/messages.svg" alt="messages" />
                </div>
                <div className="notifications">
                  <img
                    src="./assets/vectors/notifications.svg"
                    alt="notifications"
                  />
                </div>
                <div className="user">
                  <img src="./assets/vectors/nav-user.svg" alt="user" />
                </div>
                <div className="dark-menu" onClick={toggleTopMenu}>
                  <img src="./assets/vectors/dark-qr.svg" alt="dark-qr" />
                </div>
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
