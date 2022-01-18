import React from "react";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import Tabs from "../components/Tabs";
import MainLayout from "../layouts/MainLayout";

const dummyData = [
  {
    circleColor: '#ECA0A0',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '14/APR/2020',
    paidDate: '15/APR/2020',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: '#4ACBD3',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '14/APR/2020',
    paidDate: '15/APR/2020',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: '#4ACBD3',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '',
    paidDate: '',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: '#4ACBD3',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '',
    paidDate: '15/APR/2020',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: '#1E55A9',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '14/APR/2020',
    paidDate: '',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: '#ECA0A0',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '14/APR/2020',
    paidDate: '',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: '#1E55A9',
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: '14/APR/2020',
    paidDate: '15/APR/2020',
    amount: 200,
    currency: "CAD"
  },
];

const FinancesIncome = () => {
  return (
    <MainLayout
      headVector="./assets/vectors/wallet.svg"
      sideNavVector="./assets/vectors/sidenav-right-2.svg"
      title={"wallet"}
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
          <div className="row">
            <div className="col-12">
              <Tabs
                verticalButtons
                tabClassName="mb-4 mb-sm-0"
                className="mt-4 flex-column flex-sm-row w-100"
                tabGroupName="client-overview-tabs"
                data={[
                  {
                    label: "All",
                    target: "all",
                    active: true
                  },
                  {
                    label: "Paid",
                    target: "paid",
                  },
                  {
                    label: "Unpaid",
                    target: "unpaid",
                  },
                  {
                    label: "Overdue",
                    target: "overdue",
                  },
                ]}
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-1 d-flex justify-content-center align-items-center"><img src="./assets/vectors/filter-contained.svg" alt="" /></div>
            <div className="col-11 col-md-4">
              <SearchInput
                placeholder="Search Users by Name or Email"
              />
            </div>
            <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
              <AddBtn blue title="New" />
            </div>
          </div>
          <div className="table-wrapper short-vertical-scrollbar">
            <div className="table">
              <div className="container-fluid px-0 mt-3">
                <div className="row table-heading">
                  <div className="col-1"></div>
                  <div className="col-3">
                    <div className="label">Name</div>
                  </div>
                  <div className="col-3">
                    <div className="label">Status</div>
                  </div>
                  <div className="col-2">
                    <div className="label">Payment Status</div>
                  </div>
                  <div className="col-1 text-end">
                    <div className="label">Amount</div>
                  </div>
                </div>
              </div>
              {dummyData.map((data, idx) => {
                return (
                  <div key={'li' + idx} className="row align-items-center py-2 dummy-data">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <div className="circle" style={{ backgroundColor: data.circleColor }}></div>
                    </div>
                    <div className="col-3 d-flex flex-column gap-1">
                      <div className="name">{data.name}</div>
                      <div className="email">{data.email}</div>
                    </div>
                    <div className="col-3 d-flex flex-column gap-1">
                      <div className={`chip ${data.lastLogin ? "is-noded" : ""}`}>
                        <div className="chip-circle"></div>
                        <div className="chip-text">
                          {data.lastLogin ? "Noded" : "NoLink"}
                        </div>
                      </div>
                      <div className="last-login">
                        Last Login: {data.lastLogin ? data.lastLogin : "N/A"}
                      </div>
                    </div>
                    <div className="col-2 d-flex flex-column gap-1">
                      <div className={`chip ${data.paidDate ? "" : 'unpaid'}`}>
                        <div className="chip-circle"></div>
                        <div className="chip-text">
                          {data.paidDate ? "Paid" : "Unpaid"}
                        </div>
                      </div>
                      <div className="paid-date">
                        {data.paidDate ? `Paid on ${data.paidDate}` : " "}
                      </div>
                    </div>
                    <div className="col-1 d-flex flex-column gap-1 text-end">
                      <div className="amount">{data.amount}$</div>
                      <div className="currency">{data.currency}</div>
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center gap-5 more-menu">
                      Open
                      <img src="./assets/vectors/vertical-menu.svg" alt="" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center py-3">
              <img src="./assets/vectors/scroll-down-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinancesIncome;
