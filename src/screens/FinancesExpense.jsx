import React from "react";
import MainLayout from "../layouts/MainLayout";

const dummyData = [
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890,
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: false,
    price: 1890,
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: false,
    price: 1890,
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890,
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890,
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890,
  },
  {
    invoiceNumber: "AA-04-19-1890",
    date: "18 May 2019",
    imgUrl: "./assets/img/invoices-1.png",
    name: "Sophia Wagner",
    isPaid: true,
    price: 1890,
  },
];

const FinancesExpense = () => {
  return (
    <MainLayout
      headVector="./assets/vectors/nav-7__active.svg"
      sideNavVector="./assets/vectors/sidenav-right-2.svg"
      title={"Purchases List"}
      minimalNavRight
      exploreSub="Services &amp; Request Assign to you"
      exploreContent={[
        {
          title: "Overview",
          sub: "Charts & Reports",
        },
        {
          title: "Incomes",
          sub: "Invoices",
        },
        {
          title: "Expenses",
          sub: "Suppliers & Purchases",
        },
      ]}
    >
      <div className="finances-invoice-main-content">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-end py-2">
            <div className="tabs">
              <div className="tab active d-flex align-items-center justify-content-between gap-4">
                <img src="./assets/vectors/invoices.svg" alt="" />{" "}
                <span> Invoices </span>
              </div>
            </div>
            <div className="tabs">
              <div className="tab d-flex align-items-center justify-content-between gap-4">
                <img src="./assets/vectors/supplies.svg" alt="" />{" "}
                <span> Supplies </span>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="filters">
              <div className="filter active">All</div>
              <div className="filter">UnPaid</div>
              <div className="filter">Paid</div>
            </div>
            <div className="d-flex gap-3 align-items-center py-3">
              <div className="d-flex justify-content-end pe-4">
                <button className="btn btn-add">
                  <img
                    src="./assets/vectors/add.svg"
                    alt="add"
                    className="add"
                  />
                  ADD
                </button>
              </div>
              <div className="d-flex justify-content-end pe-4">
                <button className="btn btn-add">
                  <img
                    src="./assets/vectors/filter.svg"
                    alt="add"
                    className="add"
                  />
                  SORT: A-Z
                  <img
                    className="ps-2"
                    src="/assets/vectors/arrow-down.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="container-fluid px-0 mt-3">
            <div className="row table-heading gx-0">
              <div className="col-3 d-flex justify-content-between align-items-center">
                <div className="label ps-4">Number</div>
                <img src="./assets/vectors/a-z-sort.svg" alt="sort" />
              </div>
              <div className="col-2 d-flex justify-content-between align-items-center">
                <div className="label ps-4">Date</div>
                <img src="./assets/vectors/a-z-sort.svg" alt="sort" />
              </div>
              <div className="col-3 d-flex justify-content-between align-items-center">
                <div className="label ps-4">Client</div>
                <img src="./assets/vectors/a-z-sort.svg" alt="sort" />
              </div>
              <div className="col-2 d-flex justify-content-between align-items-center">
                <div className="label ps-4">Status</div>
                <img src="./assets/vectors/a-z-sort.svg" alt="sort" />
              </div>
              <div className="col-1 d-flex justify-content-between align-items-center">
                <div className="label ps-4">Amount</div>
                <img src="./assets/vectors/a-z-sort.svg" alt="sort" />
              </div>
            </div>
          </div>
          {dummyData.map((data, idx) => {
            return (
              <div
                key={"financeslist" + idx}
                className="row align-items-center py-3 my-3 dummy-data"
              >
                <div className="col-3 invoice-details d-flex align-items-center gap-3">
                  <div className="box">
                    <img src="./assets/vectors/calculator.svg" alt="" />
                  </div>
                  <p className="invoice-number">{data.invoiceNumber}</p>
                </div>
                <div className="col-2 font-weight-bold date">{data.date}</div>
                <div className="col-3 d-flex align-items-center gap-3 pic-name">
                  <p>{data.name}</p>
                </div>
                <div className="col-2 is-paid">
                  <div className={data.isPaid ? "paid" : "unpaid"}>
                    {data.isPaid ? "Paid" : "To Pay"}
                  </div>
                </div>
                <div className="col-1 price">{data.price}.00$</div>
                <div className="col-1 d-flex align-items-center justify-content-center">
                  <div className="del p-2">
                    <img src="./assets/vectors/horizontal-menu.svg" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="row">
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
      </div>
    </MainLayout>
  );
};

export default FinancesExpense;
