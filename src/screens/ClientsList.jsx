import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Tabs from "../components/Tabs";
import TabContents from "../components/TabContents";
import TabContentItem from "../components/TabContentItem";

const ClientsList = () => {
  const [clientSelected, setClientSelected] = useState(false);

  return (
    <MainLayout
      headVector="./assets/vectors/nav-5__active.svg"
      sideNavVector="./assets/vectors/sidenav-right-2.svg"
      title={clientSelected ? "Client Overview" : "Clients List"}
      minimalNavRight
      exploreSub="Services &amp; Request Assign to you"
      exploreContent={[
        {
          time: "11:30",
          title: "Oil Change",
          sub: "Ford Focus 2021",
        },
        {
          time: "11:45",
          title: "Engine + AC Check up",
          sub: "Chevroley Cruze 2020",
        },
        {
          time: "13:00",
          title: "Broken Light",
          sub: "Honda Civic 2021",
        },
      ]}
    >
      {clientSelected ? (
        <div id="client-overview-main-content" className="mt-4 mt-sm-0">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-md-8 col-sm-7 d-flex flex-column user-jumbotron-container">
                <div className="user-jumbotron flex-grow-1">
                  <div className="top d-flex align-items-center">
                    <img
                      src="./assets/vectors/lock-lg.svg"
                      className="lock me-2"
                      alt="lock"
                    />
                    <div className="text-light-3 fs-10">
                      Unnode to edit Client
                    </div>
                  </div>
                  <div className="profile-info">
                    <div className="left">
                      <div className="img">
                        <img
                          src="./assets/img/clint-img-lg.png"
                          alt="client-img"
                        />
                        <div className="badge">Noded</div>
                      </div>
                      <div className="social">
                        <button className="btn">
                          <img
                            src="./assets/vectors/fb-profile.svg"
                            alt="profile"
                          />
                        </button>
                        <button className="btn">
                          <img
                            src="./assets/vectors/pinterest-profile.svg"
                            alt="profile"
                          />
                        </button>
                        <button className="btn">
                          <img
                            src="./assets/vectors/linkedin-profile.svg"
                            alt="profile"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="right">
                      <div className="user-name d-flex align-items-center">
                        <div className="fs-22 fw-600 text-blue">
                          Bryandy Boyd
                        </div>
                        <img
                          src="./assets/vectors/verified.svg"
                          className="ms-4"
                          alt="verified"
                        />
                      </div>
                      <div className="location">
                        <div className="text-manrope fw-400">
                          3452 av. de la Tour, Québec (QC) G1V 9J3 Canada
                        </div>
                      </div>

                      <div className="container-fluid px-0 mt-4 pt-2">
                        <div className="row gx-0 gy-4">
                          <div className="col-md-8">
                            <div className="text-bold">
                              ernest.mason@gmail.com
                            </div>
                            <div className="text-light-2">Phone</div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-bold">561-303-6106</div>
                            <div className="text-light-2">Email</div>
                          </div>
                          <div className="col-md-8">
                            <div className="row gy-4">
                              <div className="col-md-6">
                                <div className="text-bold">09/02/1986</div>
                                <div className="text-light-2">DOF</div>
                              </div>
                              <div className="col-md-6">
                                <div className="text-bold">Title</div>
                                <div className="text-light-2">Cook</div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-bold">Sexe</div>
                            <div className="text-light-2">Female</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs
                  className="mt-4 d-lg-flex d-none"
                  tabGroupName="client-overview-tabs"
                  data={[
                    {
                      icon: "./assets/vectors/profile.svg",
                      label: "Profiles & Services",
                      target: "profile",
                    },
                    {
                      icon: "./assets/vectors/invoices.svg",
                      label: "Invoices & Forms",
                      target: "invoices",
                      active: true,
                    },
                    {
                      icon: "./assets/vectors/requests.svg",
                      label: "Requests",
                      target: "requests",
                    },
                  ]}
                />
              </div>
              <div className="col-md-4 col-sm-5">
                <div className="card garage-card shadowed">
                  <img src="./assets/vectors/garage.svg" alt="garage" />
                  <h2 className="mt-3">Garage Specs</h2>
                  <div className="text-x-small mt-2 mb-4 desc-p">
                    Based on customer responses and Node's artificial
                    intelligence
                  </div>

                  <div className="section mt-4">
                    <div className="text-x-bold">A lot (50 000km) a year</div>
                    <div className="text-x-small">Travel</div>
                  </div>
                  <div className="section">
                    <div className="text-x-bold">Countryside</div>
                    <div className="text-x-small">Reside</div>
                  </div>
                  <div className="section">
                    <div className="text-x-bold">
                      Origin of the manufacturer
                    </div>
                    <div className="text-x-small">Preferred parts</div>
                  </div>
                  <div className="section">
                    <div className="text-x-bold">6 times a year minimum</div>
                    <div className="text-x-small">Frequency</div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-block d-lg-none">
                <Tabs
                  tabClassName="mb-4 mb-sm-0"
                  className="mt-4 justify-content-center flex-column flex-sm-row"
                  tabGroupName="client-overview-tabs"
                  data={[
                    {
                      icon: "./assets/vectors/profile.svg",
                      label: "Profiles & Services",
                      target: "profile",
                    },
                    {
                      icon: "./assets/vectors/invoices.svg",
                      label: "Invoices & Forms",
                      target: "invoices",
                      active: true,
                    },
                    {
                      icon: "./assets/vectors/requests.svg",
                      label: "Requests",
                      target: "requests",
                    },
                  ]}
                />
              </div>
              <div className="col-12">
                <TabContents tabGroupName="client-overview-tabs mt-5">
                  <TabContentItem target="profile">
                    <div className="container-fluid px-0">
                      <div className="row gx-lg-5 gy-5">
                        <div className="col-lg-4">
                          <div className="last-work-orders">
                            <div className="d-flex justify-content-between title-container">
                              <div className="title">
                                <h2 className="text-dark-1">
                                  Last Work Orders
                                </h2>
                                <div className="text-x-small mt-1">
                                  Services &amp; Products
                                </div>
                              </div>
                              <button className="btn btn-add">ADD</button>
                            </div>
                            <div className="listing-container short-vertical-scrollbar">
                              <div className="listing mt-3">
                                {[
                                  {
                                    boxClr: "#ECA0A0",
                                    orderNum: "25062019-013",
                                    orderDate: "2021-10-22",
                                    orderPrice: "0.00",
                                  },
                                  {
                                    boxClr: "#4ACBD3",
                                    orderNum: "25062019-013",
                                    orderDate: "2021-10-22",
                                    orderPrice: "83.25",
                                  },
                                  {
                                    boxClr: "#1E55A9",
                                    orderNum: "25062019-013",
                                    orderDate: "2021-10-22",
                                    orderPrice: "83.25",
                                  },
                                  {
                                    boxClr: "#1E55A9",
                                    orderNum: "25062019-013",
                                    orderDate: "2021-10-22",
                                    orderPrice: "83.25",
                                  },
                                  {
                                    boxClr: "#1E55A9",
                                    orderNum: "25062019-012",
                                    orderDate: "2020-08-03",
                                    orderPrice: "1064.83",
                                  },
                                  {
                                    boxClr: "#1E55A9",
                                    orderNum: "25062019-013",
                                    orderDate: "2021-10-22",
                                    orderPrice: "83.25",
                                  },
                                ].map((el, idx) => {
                                  const {
                                    orderNum,
                                    orderDate,
                                    orderPrice,
                                    boxClr,
                                  } = el;

                                  return (
                                    <div
                                      key={"order-list" + idx}
                                      className="list-item"
                                    >
                                      <div className="order-num d-flex align-items-center">
                                        <div
                                          className="round-box"
                                          style={{ backgroundColor: boxClr }}
                                        ></div>
                                        <div className="text-dark-2">
                                          {orderNum}
                                        </div>
                                      </div>
                                      <div className="order-date">
                                        <div className="text-light-4">
                                          {orderDate}
                                        </div>
                                      </div>
                                      <div className="order-price">
                                        <div className="">{orderPrice}$</div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8 profiles-container">
                          <div className="d-flex justify-content-between title-container">
                            <div className="title">
                              <h2 className="text-dark">Profiles</h2>
                              <div className="text-x-small mt-1">
                                Noded &amp; Internal
                              </div>
                            </div>
                            <button className="btn btn-add">ADD</button>
                          </div>

                          <div className="profiles-main mt-3">
                            <div className="left">
                              {[
                                {
                                  bg: "rgba(30, 85, 169, 0.08)",
                                  vectorBg: "#1E55A9",
                                  vector:
                                    "./assets/vectors/toyota-prius-prime.svg",
                                  text1: "2020 Toyota Prius Prime",
                                  text2: "Noded & Validated",
                                  text3: "2020 Toyota Prius Prime",
                                  noded: true,
                                },
                                {
                                  vectorBg: "rgba(30, 85, 169, 0.08)",
                                  vector:
                                    "./assets/vectors/toyo-goodrich-2021.svg",
                                  text1: "Toyo GoodRich 2021",
                                  text2: "Need to be Validate",
                                  text3: "Add Serial Number to Validate",
                                },
                                {
                                  vector: "./assets/vectors/car-lock.svg",
                                  text1: "Car Lock",
                                  text3: "Can’t be Noded",
                                },
                                {
                                  vector: "./assets/vectors/car-lock.svg",
                                  text1: "Anti-starter lever",
                                  text3: "Can’t be Noded",
                                },
                              ].map((el, idx) => {
                                const {
                                  vector,
                                  text1,
                                  text2,
                                  text3,
                                  noded,
                                  vectorBg,
                                  bg,
                                } = el;

                                return (
                                  <div
                                    key={"prod-list" + idx}
                                    className="item active d-flex align-items-center"
                                    style={{ backgroundColor: bg }}
                                  >
                                    <div
                                      className="img"
                                      style={{ backgroundColor: vectorBg }}
                                    >
                                      <img src={vector} alt={text1} />
                                    </div>
                                    <div className="text">
                                      <div className="text-dark-3 fw-600">
                                        {text1}
                                      </div>
                                      <div className="text-dark-3 fs-12">
                                        {text2}
                                      </div>
                                      <div className="text-dark-3 fs-10 d-flex align-items-center">
                                        {text3}
                                        {noded && (
                                          <img
                                            className="ms-2"
                                            src="./assets/vectors/validated.svg"
                                            alt="validated"
                                          />
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <div className="right">
                              <div className="head">
                                <div className="d-flex justify-content-between">
                                  <div className="fs-20 text-blue fw-200 text-manrope">
                                    Toyota Prius
                                  </div>
                                  <div className="d-flex align-items-center text-blue text-manrope fw-400 fs-12">
                                    <img
                                      className="me-2"
                                      src="./assets/vectors/noded-blue.svg"
                                      alt="noded"
                                    />
                                    Noded
                                  </div>
                                </div>
                                <div className="fs-7 text-small">
                                  Client’s Attribute
                                </div>
                              </div>

                              <div className="body mt-2">
                                <div className="section">
                                  <div className="text-light-5 text-manrope">
                                    Vehicle Serial Number (VIN)
                                  </div>
                                  <div className="text-dark-3 fw-600">
                                    JFTK9887263312
                                  </div>
                                </div>
                                <div className="section">
                                  <div className="text-light-5 text-manrope">
                                    Official Name - Garage ecosystem
                                  </div>
                                  <div className="text-light-5 fw-600">
                                    2020 Toyota Prius Prime LE HATCHBACK 4-DR
                                  </div>
                                </div>
                                <div className="section">
                                  <div className="text-light-5 text-manrope">
                                    Engine
                                  </div>
                                  <div className="text-light-5 fw-600">
                                    1.8L L4 DOHC 16V HYBRID
                                  </div>
                                </div>
                                <div className="container-fluid px-0">
                                  <div className="row">
                                    <div className="col-6">
                                      <div className="section">
                                        <div className="text-light-5 text-manrope">
                                          Transmission
                                        </div>
                                        <div className="text-light-5 fw-600">
                                          CVT
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="section">
                                        <div className="text-light-5 text-manrope">
                                          Tires
                                        </div>
                                        <div className="text-light-5 fw-600">
                                          P195/65R15
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="btns d-flex flex-column flex-sm-row mt-3">
                                <button className="btn btn-blue-high mb-3 mb-sm-0">
                                  Print Node QR
                                </button>
                                <button className="btn btn-blue-high ms-3">
                                  New Appointment
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContentItem>
                  <TabContentItem target="invoices">
                    <div className="container-fluid p-0">
                      <div className="row gx-sm-5 gy-5">
                        <div className="col-lg-7">
                          <div className="invoices-main">
                            <div className="d-flex justify-content-between title-container">
                              <div className="title">
                                <h2 className="text-dark">Invoices</h2>
                                <div className="text-x-small mt-1">
                                  Services &amp; Articles
                                </div>
                              </div>
                              <button className="btn btn-add">ADD</button>
                            </div>

                            <div className="listing-container ">
                              <div className="listing">
                                {[
                                  {
                                    orderNum: "78367492920",
                                    orderDate: "2021-10-22",
                                    price1: 230.1,
                                    price2: 230.1,
                                  },
                                  {
                                    orderNum: "78367492920",
                                    orderDate: "2021-10-22",
                                    price1: 230.1,
                                    price2: 230.1,
                                  },
                                  {
                                    orderNum: "78367492920",
                                    orderDate: "2021-10-22",
                                    price1: 230.1,
                                    price2: 230.1,
                                  },
                                  {
                                    orderNum: "78367492920",
                                    orderDate: "2021-10-22",
                                    price1: 230.1,
                                    price2: 230.1,
                                  },
                                  {
                                    orderNum: "78367492920",
                                    orderDate: "2021-10-22",
                                    price1: 230.1,
                                    price2: 230.1,
                                  },
                                ].map((el, idx) => {
                                  const {
                                    orderNum,
                                    orderDate,
                                    price1,
                                    price2,
                                  } = el;

                                  return (
                                    <div
                                      className="list-item"
                                      key={"invoice-list" + idx}
                                    >
                                      <div className="order-num d-flex align-items-center">
                                        <div
                                          className="round-box"
                                          style={{ backgroundColor: "#1E55A9" }}
                                        ></div>
                                        <div className="text-dark-2">
                                          {orderNum}
                                        </div>
                                      </div>
                                      <div className="order-date">
                                        <div className="text-light-4">
                                          {orderDate}
                                        </div>
                                      </div>
                                      <div className="order-price price-1">
                                        <div className="">{price1}$</div>
                                      </div>
                                      <div className="order-price">
                                        <div className="price-text">
                                          {price2}
                                          <div className="price-sign">
                                            <img
                                              src="./assets/vectors/dollar-sign.svg"
                                              alt="dollar"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5">
                          <div className="forms-main">
                            <div className="d-flex justify-content-between title-container">
                              <div className="title">
                                <h2 className="text-dark">Forms &amp; Files</h2>
                                <div className="text-x-small mt-1">
                                  All check responses
                                </div>
                              </div>
                              <button className="btn btn-add">ADD</button>
                            </div>

                            <div className="listing-container">
                              <div className="listing">
                                {[
                                  {
                                    label: "Inspection",
                                    name: "WO #893788784",
                                    date: "2021-10-22",
                                  },
                                  {
                                    label: "Inspection",
                                    name: "WO #893788784",
                                    date: "2021-10-22",
                                  },
                                  {
                                    label: "Inspection",
                                    name: "WO #893788784",
                                    date: "2021-10-22",
                                  },
                                  {
                                    label: "Inspection",
                                    name: "WO #893788784",
                                    date: "2021-10-22",
                                  },
                                  {
                                    label: "Inspection",
                                    name: "WO #893788784",
                                    date: "2021-10-22",
                                  },
                                ].map((el, idx) => {
                                  const { label, name, date } = el;

                                  return (
                                    <div
                                      className="list-item"
                                      key={"ins" + idx}
                                    >
                                      <div className="label">
                                        <div className="text-dark-2">
                                          {label}
                                        </div>
                                      </div>
                                      <div className="name">
                                        <div className="text-light-4 text-end">
                                          {name}
                                        </div>
                                      </div>
                                      <div className="date">
                                        <div className="font-manrope text-end">
                                          {date}$
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabContentItem>
                  <TabContentItem target="requests">
                    <div className="d-flex justify-content-between title-container">
                      <div className="title">
                        <h2 className="text-dark">Requests</h2>
                        <div className="text-x-small mt-1">
                          Relating Client or Items Noded
                        </div>
                      </div>
                      <button className="btn btn-add">ADD</button>
                    </div>
                    <div className="requests-list-container">
                      <div className="requests-list mt-4">
                        {[
                          {
                            titleText: "Customer Experiance Insight",
                            badgeText: "node",
                            badgeBg: "#4ACBD3",
                            boxClr: "#5165F7",
                            prodName: "Bryandy Boyd",
                            date: "9 sept 2021",
                          },
                          {
                            titleText: "Create The Icon",
                            badgeText: "approval",
                            badgeBg: "#4ACBD3",
                            boxClr: "#5197F8",
                            prodName: "2020 Toyota ",
                            date: "22 sept 2021",
                          },
                          {
                            titleText: "Order Rear Light",
                            badgeText: "Internal",
                            badgeBg: "#1E55A9",
                            boxClr: "#FA8036",
                            prodName: "WO 326323233",
                            date: "21 Sep 2021",
                          },
                        ].map((el, idx) => {
                          const {
                            titleText,
                            prodName,
                            badgeBg,
                            badgeText,
                            date,
                            boxClr,
                          } = el;

                          return (
                            <div
                              className="requests-list-item"
                              key={"req-list" + idx}
                            >
                              <div className="mini-info">
                                <img
                                  src="./assets/vectors/request-accept.svg"
                                  className="me-3"
                                  alt="request-accept"
                                />
                                <div className="text-dark-2">{titleText}</div>
                              </div>
                              <div className="more-info">
                                <div className="badge-container">
                                  <button
                                    className="btn badge"
                                    style={{ backgroundColor: badgeBg }}
                                  >
                                    {badgeText} &times;
                                  </button>
                                </div>
                                <div className="prod-name">
                                  <div
                                    className="round-box"
                                    style={{ backgroundColor: boxClr }}
                                  ></div>
                                  <div className="text-manrope">{prodName}</div>
                                </div>
                                <div className="date">
                                  <div className="text-manrope">{date}</div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TabContentItem>
                </TabContents>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="client-list-main-content">
          {/* <div className="table-container">
          <table className="styled">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>ADD</th>
              </tr>
            </thead>
          </table>
        </div> */}

          <div className="container-fluid px-0 mt-3">
            <div className="row gx-0">
              <div className="col-3">
                <div className="label ps-4">Name</div>
              </div>
              <div className="col-3">
                <div className="label">Email</div>
              </div>
              <div className="col-3">
                <div className="label">Phone</div>
              </div>
              <div className="col-3">
                <div className="label d-flex justify-content-end pe-4">
                  <button className="btn btn-add">ADD</button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-3">
            <div className="row g-3 mt-3">
              {[
                {
                  img: "./assets/img/client-img-1.png",
                  name: "Libre Baskerville",
                  visits: 4,
                  email: "ernest.mason@gmail.com",
                  phone: "561-303-6106",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-img-2.png",
                  name: "Bradley Malone",
                  visits: 0,
                  email: "bradley.m@gmail.com",
                  phone: "bradley.m@gmail.com",
                  noded: false,
                  avatarBg: "#1E55A9",
                },
                {
                  img: "./assets/img/client-img-3.png",
                  name: "Janie Todd",
                  visits: 19,
                  email: "stroman.hanna@yahoo.com",
                  phone: "467-624-8505",
                  noded: false,
                  avatarBg: "linear-gradient(0deg, #4ACBD3, #4ACBD3)",
                },
                {
                  img: "./assets/img/client-img-4.png",
                  name: "Marvin Lambert",
                  visits: 291,
                  email: "micaela.okuneva@zemlak.biz",
                  phone: "716-937-5782",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-img-5.png",
                  name: "Teresa Lloyd",
                  visits: 13,
                  email: "carlee_erdman@gmail.com",
                  phone: "496-144-8261",
                  noded: true,
                  avatarBg: "#1E55A9",
                },
                {
                  img: "./assets/img/client-img-6.png",
                  name: "Fred Haynes",
                  visits: 102,
                  email: "jarod.miller@hotmail.com",
                  phone: "305-305-1123 ",
                  noded: true,
                  avatarBg: "#ECA0A0",
                },
                {
                  img: "./assets/img/client-img-7.png",
                  name: "Fred Haynes",
                  visits: 8,
                  email: "jarod.miller@hotmail.com",
                  phone: "305-305-1123",
                  noded: false,
                  avatarBg: "linear-gradient(0deg, #4ACBD3, #4ACBD3)",
                },
                {
                  img: "./assets/img/client-img-8.png",
                  name: "Rose Peters",
                  visits: 29,
                  email: "oma.russel@hotmail.com",
                  phone: "828-963-3958",
                  noded: true,
                  avatarBg: "#1E55A9",
                },
              ].map((el, idx) => {
                const { img, name, visits, email, phone, noded, avatarBg } = el;

                return (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 col-12"
                    key={"client-list" + idx}
                  >
                    <ClientCard
                      setClientSelected={setClientSelected}
                      img={img}
                      name={name}
                      visits={visits}
                      email={email}
                      phone={phone}
                      noded={noded}
                      avatarBg={avatarBg}
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-12">
              <div className="pagination mt-5 d-flex justify-content-between">
                <button className="btn nav-btn prev">PREV</button>
                <div className="pages">
                  <button className="btn page-button">1</button>
                  <button className="btn page-button">2</button>
                  <button className="btn page-button">3</button>
                  <button className="btn page-button">4</button>
                  <button className="btn page-button active">6</button>
                </div>
                <button className="btn nav-btn next">PREV</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ClientsList;

const ClientCard = ({
  img,
  name,
  visits,
  email,
  phone,
  avatarBg,
  noded,
  setClientSelected,
}) => {
  return (
    <div className="client-card" onClick={() => setClientSelected(true)}>
      <div className="head">
        <div className="img" style={{ background: avatarBg }}>
          <img src={img} alt={name} />
        </div>
        <div className="text">
          <h2>{name}</h2>
          <div className="text-small">
            {visits} visit{visits > 1 && "s"}
          </div>
        </div>
      </div>
      <div className="body">
        <div className="section">
          <div className="text-small">Email</div>
          <div className="text-bold">{email}</div>
        </div>
        <div className="section">
          <div className="text-small">Phone</div>
          <div className="text-bold">{phone}</div>
        </div>
        <div className="section noded">
          {noded && <button className="btn btn-vert">Noded</button>}
        </div>
      </div>
    </div>
  );
};
