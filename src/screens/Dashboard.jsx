import React from "react";

const Dashboard = () => {
  return (
    <div id="main">
      <div id="sidenav">
        <div className="small">
          <img src="./assets/vectors/logo.svg" alt="logo" className="logo" />

          <div className="nav">
            <a href="#0" className="item active">
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
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
            <a href="#0" className="item">
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
            </a>
          </div>
        </div>
        <div className="desc">
          <div className="main">
            {/* <img
              className="hamburger"
              src="./assets/vectors/hamburger.svg"
              alt="hamburger"
            /> */}

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
            <img
              src="./assets/vectors/sidenav-right-1.svg"
              alt="sidenav-right"
            />
          </div>
        </div>
      </div>
      <div id="content">
        <div className="head">
          <div className="page-heading">
            <img
              className="me-3"
              src="./assets/vectors/nav-1__active.svg"
              alt="dasboard"
            />
            <h1>Dashboard</h1>
          </div>
          <div className="info">
            <div className="search">
              <div class="custom-form-control">
                <div class="input">
                  <input
                    class="custom-input"
                    type="text"
                    id="search"
                    placeholder="Start typing.."
                    value=""
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

        <div className="body">
          <div id="dashboard-main-content">
            <div className="container-fluid">
              <div className="row mt-4 g-4">
                <div className="col-md-6 row gx-2">
                  <div className="col-md-5">
                    <div className="stats card shadowed">
                      <h2 className="heading">This Month</h2>

                      <div className="stats-text d-flex justify-content-between text-center">
                        <div className="item">
                          <div className="top text-blue">15 670$</div>
                          <div className="bottom">Sales</div>
                        </div>
                        <div className="item">
                          <div className="top">437</div>
                          <div className="bottom">Services</div>
                        </div>
                        <div className="item">
                          <div className="top text-cyan">29</div>
                          <div className="bottom">Customers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="stats card grey performance">
                      <div className="heading d-flex align-items-center">
                        <img
                          className="me-3"
                          src="./assets/vectors/arrow-up.svg"
                          alt="arrow-up"
                        />
                        <h2>Performances</h2>
                      </div>

                      <div className="performances">
                        <div className="item">
                          <div className="percent">47%</div>
                          <div>Today's work</div>
                          <div className="progress-bar">
                            <div className="bg"></div>
                            <div
                              className="progress"
                              style={{ width: "47%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="percent">76%</div>
                          <div>Clients Connected</div>
                          <div className="progress-bar">
                            <div className="bg"></div>
                            <div
                              className="progress"
                              style={{ width: "76%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="percent">97%</div>
                          <div>Satisfaction</div>
                          <div className="progress-bar">
                            <div className="bg"></div>
                            <div
                              className="progress"
                              style={{ width: "97%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="card shadowed clients">
                    <div className="lg-head max-width-head d-flex justify-content-between align-items-center">
                      <h2 className="heading mb-0">Clients</h2>
                      <div className="tabs">
                        <button className="tab">Noded</button>
                        <button className="tab active">All</button>
                      </div>
                    </div>
                    <div className="table-card-wrap">
                      <table className="table-card mt-5">
                        <thead>
                          <th>Name</th>
                          <th>Linked</th>
                        </thead>
                        <tbody>
                          {[
                            {
                              img: "./assets/img/table-user-1.png",
                              name: "Georges Lacombe",
                              num: "+1 (438) 823-9382",
                              linked: "Noded",
                            },
                            {
                              img: "./assets/img/table-user-2.png",
                              name: "Mathieu Orsino-Côté",
                              num: "+1 (514) 223-9987",
                              linked: "Noded",
                            },
                            {
                              img: "./assets/img/table-user-3.png",
                              name: "Mathilde Ducharme",
                              num: "+1 (514) 793-3263",
                              linked: "To Node",
                            },
                            {
                              img: "./assets/img/table-user-4.png",
                              name: "Vanessa Dubé",
                              num: "+1 (450) 293-1269",
                              linked: "Noded",
                            },
                          ].map((el) => {
                            return (
                              <tr>
                                <td>
                                  <div className="aligned">
                                    <div className="img">
                                      <img src={el.img} alt="user" />
                                    </div>
                                    <div className="text">
                                      <h4>{el.name}</h4>
                                      <div>{el.num}</div>
                                    </div>
                                  </div>
                                </td>
                                <td>{el.linked}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="btn btn-dark mt-5">All Clients</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="logs">
                    <div className="card dark-blue">
                      <div className="number">29</div>
                      <div className="">New Messages</div>
                    </div>
                    <div className="card light-blue">
                      <div className="number">2 387</div>
                      <div className="">Total Clients</div>
                    </div>
                    <div className="card cyan">
                      <div className="number">2 108</div>
                      <div className="">Active Clients</div>
                    </div>
                  </div>
                  <div className="card shadowed mt-4">
                    <div className="lg-head max-width-head">
                      <h2 className="heading mb-0">Recently Viewed</h2>
                    </div>
                    <div className="table-card-wrap">
                      <table className="table-card mt-5">
                        <thead>
                          <th>Type / Title</th>
                          <th>Detail</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="aligned">
                                <div className="img">
                                  <img
                                    src="./assets/img/table-placeholder.png"
                                    alt="user"
                                  />
                                </div>
                                <div className="text">
                                  <h4>#AA-04-19-1890678</h4>
                                  <div>Bernard Stanley</div>
                                </div>
                              </div>
                            </td>
                            <td>118.00$</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="aligned">
                                <div className="img">
                                  <img
                                    src="./assets/img/table-placeholder.png"
                                    alt="user"
                                  />
                                </div>
                                <div className="text">
                                  <h4>Bernard Stanley</h4>
                                  <div>bernard.stanley@gmail.com</div>
                                </div>
                              </div>
                            </td>
                            <td>Noded</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="aligned">
                                <div className="img">
                                  <img
                                    src="./assets/img/table-placeholder.png"
                                    alt="user"
                                  />
                                </div>
                                <div className="text">
                                  <h4>Toyota Prius 2021</h4>
                                  <div>VIN 21738263910318</div>
                                </div>
                              </div>
                            </td>
                            <td>29 Oct 2019</td>
                          </tr>
                          <tr>
                            <td>
                              <div className="aligned">
                                <div className="img">
                                  <img
                                    src="./assets/img/table-placeholder.png"
                                    alt="user"
                                  />
                                </div>
                                <div className="text">
                                  <h4>#AA-04-19-1890243</h4>
                                  <div>Mathilde Ducharme</div>
                                </div>
                              </div>
                            </td>
                            <td>578.00$</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
