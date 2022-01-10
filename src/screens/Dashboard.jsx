import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import MainLayout from "../layouts/MainLayout";

ChartJS.register(CategoryScale, LineElement, PointElement, LinearScale, Title);

const Dashboard = () => {
  return (
    <MainLayout
      headVector="./assets/vectors/nav-1__active.svg"
      sideNavVector="./assets/vectors/sidenav-right-1.svg"
      title="Dashboard"
      exploreSub="Tasks assign to you"
      exploreContent={[
        {
          title: "Order Rear Brake Light",
          sub: "Service 8372782392",
        },
        {
          title: "Make Inventory of Tires",
          sub: "Nothing",
        },
        {
          title: "Call Mathilde",
          sub: "Client Mathilde Ducharme",
        },
      ]}
    >
      <div id="dashboard-main-content">
        <div className="container-fluid px-0">
          <div className="row mt-4 g-4">
            <div className="col-lg-6 ">
              <div className="row gy-xxl-0 gy-4 month-performances">
                <div className="col-xxl-6">
                  <div className="stats card shadowed">
                    <h2 className="heading">
                      <img
                        className="me-3"
                        src="./assets/vectors/calender.svg"
                        alt="calender"
                      />
                      This Month
                    </h2>
                    <div className="chart-container">
                      <svg
                        style={{ margin: "0 auto 3rem", display: "block" }}
                        width="156"
                        height="155"
                        viewBox="0 0 156 155"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M78 144.363C115.165 144.363 145.294 114.427 145.294 77.5C145.294 40.5727 115.165 10.6373 78 10.6373C40.8345 10.6373 10.7059 40.5727 10.7059 77.5C10.7059 114.427 40.8345 144.363 78 144.363Z"
                          stroke="#EEEEEE"
                          stroke-width="4"
                        />
                        <path
                          d="M78 144.363C115.165 144.363 145.294 114.427 145.294 77.5C145.294 40.5727 115.165 10.6373 78 10.6373C40.8345 10.6373 10.7059 40.5727 10.7059 77.5"
                          stroke="#1E55A9"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M106.294 126.193C133.36 110.666 142.633 76.2795 127.007 49.3873C111.38 22.495 76.7716 13.2811 49.7059 28.8073C22.6401 44.3335 13.3667 78.7205 28.9932 105.613C44.6196 132.505 79.2284 141.719 106.294 126.193Z"
                          stroke="#EEEEEE"
                          stroke-width="4"
                        />
                        <path
                          d="M106.294 126.193C133.36 110.666 142.633 76.2795 127.007 49.3873C111.38 22.495 76.7716 13.2811 49.7059 28.8073C22.6401 44.3335 13.3667 78.7205 28.9932 105.613"
                          stroke="#3E4244"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M117.773 100.473C130.335 78.8537 122.88 51.2092 101.121 38.7273C79.3624 26.2455 51.5396 33.6528 38.9772 55.272C26.4148 76.8913 33.8699 104.536 55.6286 117.018C77.3873 129.499 105.21 122.092 117.773 100.473Z"
                          stroke="#EEEEEE"
                          stroke-width="4"
                        />
                        <path
                          d="M117.773 100.473C130.335 78.8537 122.88 51.2092 101.121 38.7273C79.3624 26.2455 51.5396 33.6528 38.9772 55.272C26.4148 76.8913 33.8699 104.536 55.6286 117.018"
                          stroke="#4ACBD3"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M60.2591 83H60.9941V80.265H63.0391C63.1058 80.265 63.1841 80.2617 63.2741 80.255C63.3641 80.2483 63.4541 80.2383 63.5441 80.225C64.1041 80.1383 64.5358 79.8917 64.8391 79.485C65.1458 79.0783 65.2991 78.595 65.2991 78.035C65.2991 77.4717 65.1474 76.9867 64.8441 76.58C64.5408 76.1733 64.1074 75.9267 63.5441 75.84C63.4541 75.8233 63.3641 75.8133 63.2741 75.81C63.1874 75.8033 63.1091 75.8 63.0391 75.8H60.2591V83ZM60.9941 79.565V76.505H63.0191C63.0791 76.505 63.1491 76.5083 63.2291 76.515C63.3124 76.5183 63.3908 76.5283 63.4641 76.545C63.8341 76.625 64.1058 76.81 64.2791 77.1C64.4558 77.3867 64.5441 77.6983 64.5441 78.035C64.5441 78.3683 64.4558 78.68 64.2791 78.97C64.1058 79.26 63.8341 79.4433 63.4641 79.52C63.3908 79.5367 63.3124 79.5483 63.2291 79.555C63.1491 79.5617 63.0791 79.565 63.0191 79.565H60.9941ZM68.5102 83.15C69.0435 83.15 69.5002 83.03 69.8802 82.79C70.2635 82.55 70.5569 82.2167 70.7602 81.79C70.9669 81.36 71.0702 80.8617 71.0702 80.295C71.0702 79.7383 70.9685 79.2467 70.7652 78.82C70.5652 78.39 70.2735 78.055 69.8902 77.815C69.5102 77.5717 69.0502 77.45 68.5102 77.45C67.9835 77.45 67.5285 77.57 67.1452 77.81C66.7652 78.0467 66.4719 78.3783 66.2652 78.805C66.0585 79.2317 65.9552 79.7283 65.9552 80.295C65.9552 80.8517 66.0552 81.345 66.2552 81.775C66.4585 82.205 66.7502 82.5417 67.1302 82.785C67.5135 83.0283 67.9735 83.15 68.5102 83.15ZM68.5102 82.445C67.9269 82.445 67.4852 82.25 67.1852 81.86C66.8852 81.4667 66.7352 80.945 66.7352 80.295C66.7352 79.665 66.8802 79.1517 67.1702 78.755C67.4602 78.355 67.9069 78.155 68.5102 78.155C69.1069 78.155 69.5519 78.35 69.8452 78.74C70.1419 79.1267 70.2902 79.645 70.2902 80.295C70.2902 80.9317 70.1435 81.45 69.8502 81.85C69.5569 82.2467 69.1102 82.445 68.5102 82.445ZM74.1393 83.145C74.8027 83.145 75.3227 83 75.6993 82.71C76.0793 82.4167 76.2693 82.015 76.2693 81.505C76.2693 81.225 76.2093 80.99 76.0893 80.8C75.9727 80.61 75.771 80.445 75.4843 80.305C75.201 80.165 74.811 80.0317 74.3143 79.905C73.891 79.7983 73.5643 79.7 73.3343 79.61C73.1077 79.52 72.951 79.425 72.8643 79.325C72.7777 79.2217 72.7343 79.0983 72.7343 78.955C72.7343 78.6983 72.8543 78.4933 73.0943 78.34C73.3343 78.1867 73.646 78.1133 74.0293 78.12C74.436 78.1267 74.771 78.2233 75.0343 78.41C75.2977 78.5933 75.456 78.8433 75.5093 79.16L76.2593 79.025C76.2227 78.7117 76.106 78.4367 75.9093 78.2C75.7127 77.9633 75.4527 77.78 75.1293 77.65C74.8093 77.5167 74.446 77.45 74.0393 77.45C73.6327 77.45 73.2743 77.515 72.9643 77.645C72.6577 77.7717 72.4177 77.9517 72.2443 78.185C72.0743 78.415 71.9893 78.6833 71.9893 78.99C71.9893 79.24 72.046 79.4533 72.1593 79.63C72.276 79.8033 72.4743 79.9583 72.7543 80.095C73.0343 80.2283 73.4177 80.3617 73.9043 80.495C74.361 80.6183 74.7027 80.725 74.9293 80.815C75.1593 80.905 75.3127 81.0033 75.3893 81.11C75.466 81.2133 75.5043 81.3483 75.5043 81.515C75.5043 81.8083 75.386 82.0417 75.1493 82.215C74.9127 82.3883 74.5893 82.475 74.1793 82.475C73.7593 82.475 73.406 82.385 73.1193 82.205C72.8327 82.0217 72.651 81.7767 72.5743 81.47L71.8243 81.595C71.9177 82.0817 72.1677 82.4617 72.5743 82.735C72.9843 83.0083 73.506 83.145 74.1393 83.145ZM77.4782 76.575H78.2132V75.75H77.4782V76.575ZM77.4782 83H78.2132V77.6H77.4782V83ZM82.6522 83V82.355C82.2656 82.4183 81.9406 82.4283 81.6772 82.385C81.4172 82.3417 81.2272 82.2083 81.1072 81.985C81.0439 81.8683 81.0089 81.735 81.0022 81.585C80.9989 81.4317 80.9972 81.2417 80.9972 81.015V78.23H82.6522V77.6H80.9972V76.1H80.2672V77.6H79.1122V78.23H80.2672V81.045C80.2672 81.3083 80.2706 81.5433 80.2772 81.75C80.2872 81.9567 80.3406 82.1583 80.4372 82.355C80.5572 82.595 80.7322 82.7717 80.9622 82.885C81.1956 82.9983 81.4589 83.0617 81.7522 83.075C82.0489 83.0883 82.3489 83.0633 82.6522 83ZM83.8161 76.575H84.5511V75.75H83.8161V76.575ZM83.8161 83H84.5511V77.6H83.8161V83ZM88.3051 83.15C88.8384 83.15 89.2951 83.03 89.6751 82.79C90.0584 82.55 90.3518 82.2167 90.5551 81.79C90.7618 81.36 90.8651 80.8617 90.8651 80.295C90.8651 79.7383 90.7634 79.2467 90.5601 78.82C90.3601 78.39 90.0684 78.055 89.6851 77.815C89.3051 77.5717 88.8451 77.45 88.3051 77.45C87.7784 77.45 87.3234 77.57 86.9401 77.81C86.5601 78.0467 86.2668 78.3783 86.0601 78.805C85.8534 79.2317 85.7501 79.7283 85.7501 80.295C85.7501 80.8517 85.8501 81.345 86.0501 81.775C86.2534 82.205 86.5451 82.5417 86.9251 82.785C87.3084 83.0283 87.7684 83.15 88.3051 83.15ZM88.3051 82.445C87.7218 82.445 87.2801 82.25 86.9801 81.86C86.6801 81.4667 86.5301 80.945 86.5301 80.295C86.5301 79.665 86.6751 79.1517 86.9651 78.755C87.2551 78.355 87.7018 78.155 88.3051 78.155C88.9018 78.155 89.3468 78.35 89.6401 78.74C89.9368 79.1267 90.0851 79.645 90.0851 80.295C90.0851 80.9317 89.9384 81.45 89.6451 81.85C89.3518 82.2467 88.9051 82.445 88.3051 82.445ZM91.9631 83H92.7031V80.12C92.7031 79.51 92.8397 79.0317 93.1131 78.685C93.3864 78.3383 93.7831 78.165 94.3031 78.165C94.6797 78.165 94.9831 78.2567 95.2131 78.44C95.4431 78.62 95.6097 78.8667 95.7131 79.18C95.8164 79.4933 95.8681 79.8483 95.8681 80.245V83H96.6081V80.03C96.6081 79.7267 96.5697 79.4233 96.4931 79.12C96.4197 78.8167 96.2997 78.54 96.1331 78.29C95.9664 78.04 95.7447 77.84 95.4681 77.69C95.1914 77.54 94.8497 77.465 94.4431 77.465C94.0564 77.465 93.7064 77.54 93.3931 77.69C93.0831 77.8367 92.8281 78.0567 92.6281 78.35V77.6H91.9631V83Z"
                          fill="#3E4244"
                        />
                      </svg>
                    </div>
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
                <div className="col-xxl-6">
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
            </div>
            <div className="col-lg-6">
              <div className="card shadowed node-coin">
                <div className="top-info d-flex align-items-center justify-content-between flex-sm-row flex-column">
                  <div className="brand d-flex align-items-center mb-4 mb-sm-0">
                    <img
                      className="me-4"
                      src="./assets/vectors/node-coin.svg"
                      alt="node-coin"
                    />
                    <h2 className="lh-1">Node Coin</h2>
                  </div>
                  <div className="tabs">
                    <button className="tab">Day</button>
                    <button className="tab">Month</button>
                    <button className="tab active">Year</button>
                  </div>
                </div>
                <div className="chart-container">
                  <div className="additional mb-2">
                    <div className="fs-22 fw-700 lh-1">397$</div>
                    <div className="fs-14 text-light-1 sub">Live Value</div>
                  </div>
                  <Line
                    datasetIdKey="id"
                    data={{
                      labels: ["Ja", "Fe", "Mar", "Apr", "Ju", "Jul"],
                      datasets: [
                        {
                          id: 1,
                          label: "",
                          data: [500, 400, 200, 800, 600, 700],
                          lineTension: 0.7,
                          borderColor: "#4ACBD3",
                        },
                      ],
                    }}
                    options={{
                      elements: {
                        point: {
                          radius: 0,
                        },
                      },
                      scales: {
                        y: {
                          display: false,
                          beginAtZero: true,
                          grid: {
                            display: false,
                          },
                        },
                        // yAxes: [
                        //   {
                        //     gridLines: {
                        //       drawBorder: false,
                        //     },
                        //   },
                        // ],

                        x: {
                          grid: {
                            borderDash: [8, 4],
                          },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card shadowed clients">
                <div className="lg-head px-4 flex-column flex-sm-row d-flex justify-content-between align-items-sm-end align-items-center">
                  <h2 className="heading mb-2 mb-sm-0 pb-2">
                    <img
                      src="./assets/vectors/clients.svg"
                      className="me-4"
                      alt="clients"
                    />{" "}
                    Clients
                  </h2>
                  <div className="tabs">
                    <button className="tab">Noded</button>
                    <button className="tab active">All</button>
                  </div>
                </div>
                <div className="table-card-wrap">
                  <table className="table-card mt-5">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Linked</th>
                      </tr>
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
                      ].map((el, idx) => {
                        return (
                          <tr key={idx}>
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
            <div className="col-lg-6">
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
              <div className="card shadowed mt-4 recently-viewed">
                <div className="lg-head px-4">
                  <h2 className="heading mb-0">
                    <img
                      src="./assets/vectors/recently-viewed.svg"
                      alt="recently-viewed"
                      className="me-4"
                    />
                    Recently Viewed
                  </h2>
                </div>
                <div className="table-card-wrap">
                  <table className="table-card mt-5">
                    <thead>
                      <tr>
                        <th>Type / Title</th>
                        <th>Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          vector: "./assets/vectors/recently-viewed-1.svg",
                          title: "#AA-04-19-1890678",
                          sub: "Bernard Stanley",
                          type: "118.00$",
                        },
                        {
                          vector: "./assets/vectors/recently-viewed-2.svg",
                          title: "Bernard Stanley",
                          sub: "bernard.stanley@gmail.com",
                          type: "Noded",
                        },
                        {
                          vector: "./assets/vectors/recently-viewed-3.svg",
                          title: "Toyota Prius 2021",
                          sub: "VIN 21738263910318",
                          type: "29 Oct 2019",
                        },
                        {
                          vector: "./assets/vectors/recently-viewed-4.svg",
                          title: "#AA-04-19-1890243",
                          sub: "Mathilde Ducharme",
                          type: "578.00$",
                        },
                      ].map((el) => {
                        const { vector, title, sub, type } = el;

                        return (
                          <tr>
                            <td>
                              <div className="aligned">
                                <div className="img">
                                  <img src={vector} alt="user" />
                                </div>
                                <div className="text">
                                  <h4>{title}</h4>
                                  <div>{sub}</div>
                                </div>
                              </div>
                            </td>
                            <td>{type}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
