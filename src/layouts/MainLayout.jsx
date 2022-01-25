import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";
import SearchInput from "../components/SearchInput";

const MainLayout = ({
  contentClassName,
  children,
  title,
  titleClassName,
  headVector,
  minimalNavRight,
  exploreHeadComponent,
  exploreTitle,
  exploreSub,
  exploreComponent,
  progressNum,
  subLg,
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
            <Link to="/360">
              <img
                className="logo"
                src="./assets/img/logo-new.png"
                alt="logo"
              />
            </Link>
            <img
              className="hamburger d-1300-none"
              src="./assets/vectors/hamburger.svg"
              alt="hamburger"
              onClick={toggleSideNav}
            />

            <div className="explore">
              {progressNum && (
                <div className="round-progress mb-3">
                  <div className="fw-500 fs-20 text">{progressNum}</div>
                  <img
                    src="./assets/vectors/round-progress.svg"
                    alt="progess"
                  />
                </div>
              )}
              {exploreHeadComponent}
              <h2 className={`title-side`}>{exploreTitle}</h2>
              {exploreSub && (
                <div className={`${subLg ? "" : "fs-10"} text-light-5`}>
                  {exploreSub}
                </div>
              )}

              <div className="items mt-4">{exploreComponent}</div>
            </div>
          </div>
          <div className="bottom py-5">
            <h4 className="evidence-word">Current Usage</h4>
            <div className="fw-400 fs-12 text-light-5">
              Overall business desk Usage
            </div>

            <div className="progress-bar mt-4">
              <div className="bg"></div>
              <div
                className="progress"
                style={{ width: "38.7%", backgroundColor: "#4B40D1" }}
              ></div>
            </div>
            <div className="progress-sub">
              <span className="fw-700">Call</span> 387 / 1000 min.
            </div>
            <div className="progress-bar">
              <div className="bg"></div>
              <div
                className="progress"
                style={{ width: "72", backgroundColor: "#ECA0A0" }}
              ></div>
            </div>
            <div className="progress-sub">
              <span className="fw-700">Video</span> 72 / 100 min.
            </div>
            <div className="progress-bar">
              <div className="bg"></div>
              <div
                className="progress"
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
      <div id="content" className={contentClassName ? contentClassName : ""}>
        <div className="page-container">
          <div className="head">
            <div className="sidemenu">
              <h3 className="d-flex">
                <img
                  src="./assets/vectors/menu-outline.svg"
                  className="me-3"
                  alt="menu"
                />
                menu
              </h3>
              <div className="sidemenu-nav">
                {[
                  {
                    link: "/360",
                    title: "360",
                    vector: "./assets/vectors/360.svg",
                  },
                  {
                    link: "/conversations",
                    title: "desk",
                    vector: "./assets/vectors/desk.svg",
                  },
                  {
                    link: "/way",
                    title: "way",
                    vector: "./assets/vectors/way.svg",
                  },
                  {
                    link: "/finances-overview",
                    title: "wallet",
                    vector: "./assets/vectors/wallet.svg",
                  },
                  {
                    link: "/inventory",
                    title: "inventory",
                    vector: "./assets/vectors/inventory.svg",
                  },
                  {
                    link: "/workshop-realtime",
                    title: "workshop",
                    vector: "./assets/vectors/workshop.svg",
                  },
                ].map((el, idx) => {
                  const { link, title, vector } = el;
                  return (
                    <Link key={"nav-item" + idx} to={link} className="item">
                      <div className="img">
                        <img src={vector} alt={title} />
                      </div>
                      <div className="text">{title}</div>
                    </Link>
                  );
                })}
              </div>
              <div className="options">
                <div className="d-flex flex-column justify-content-center me-2 me-sm-4">
                  <Link to="/settings" className="text">
                    Logout
                  </Link>
                  <Link to="/settings" className="text">
                    Settings
                  </Link>
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
              {headVector && (
                <img
                  className="me-3 indicator"
                  src={headVector}
                  alt="dasboard"
                />
              )}
              <h1 className={`${titleClassName ? " " + titleClassName : ""}`}>
                {title}
              </h1>
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
                  <img src="./assets/vectors/dark-bg-menu.svg" alt="menu" />
                </div>
              </div>
            </div>
          </div>

          <div className="body">{children}</div>
        </div>
        <div className="copyright">
          © Node Technologies 2022 | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
