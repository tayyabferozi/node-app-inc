import React from "react";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import Tabs from "../components/Tabs";
import MainLayout from "../layouts/MainLayout";

const dummyData = [
  {
    circleColor: 'rgba(125, 133, 154, 0.08)',
    invoiceNumber: "AA-23242-3231",
    username: "Napa Pièces D’auto",
    createdAt: '14/04/2020',
    dueOn: '14/05/2020',
    paidDate: '15/APR/2020',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: 'rgba(125, 133, 154, 0.08)',
    invoiceNumber: "AA-23242-3231",
    username: "Napa Pièces D’auto",
    createdAt: '14/04/2020',
    dueOn: '14/05/2020',
    paidDate: '',
    amount: 200,
    currency: "CAD"
  },
  {
    circleColor: 'rgba(125, 133, 154, 0.08)',
    invoiceNumber: "AA-23242-3231",
    username: "Napa Pièces D’auto",
    createdAt: '14/04/2020',
    dueOn: '14/05/2020',
    paidDate: '15/APR/2020',
    amount: 200,
    currency: "CAD"
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
          <div className="row">
            <div className="col-12">
              <Tabs
                verticalButtons
                tabClassName="mb-4 mb-sm-0"
                className="mt-4 flex-column flex-sm-row w-100"
                tabGroupName="client-overview-tabs"
                data={[
                  {
                    label: "Purchases",
                    target: "purchases",
                    active: true
                  },
                  {
                    label: "Suppliers",
                    target: "suppliers",
                  },
                ]}
              />
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-1 d-flex justify-content-center align-items-center"><img src="./assets/vectors/filter-contained.svg" alt="" /></div>
            <div className="col-11 col-md-4">
              <SearchInput
                placeholder="Search by Suppliers or Invoice #"
              />
            </div>
            <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
              <AddBtn blue title="New" />
            </div>
          </div>
          <div className="table-wrapper">
            <div className="table">
              <div className="container-fluid px-0 mt-3">
                <div className="row table-heading gx-0">
                  <div className="col-1"></div>
                  <div className="col-3">
                    <div className="label">Name</div>
                  </div>
                  <div className="col-3">
                    <div className="label">Dates</div>
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
                  <div key={'li' + idx} className="row align-items-center py-2 gx-0 dummy-data">
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <div className="circle" style={{ backgroundColor: data.circleColor }}></div>
                    </div>
                    <div className="col-3 d-flex flex-column gap-1">
                      <div className="invoice-number">{data.invoiceNumber}</div>
                      <div className="username">{data.username}</div>
                    </div>
                    <div className="col-3 d-flex flex-column gap-1">
                      <div className="created-at">
                        Created: {data.createdAt}
                      </div>
                      <div className="due-on">
                        Due On: {data.dueOn}
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
            <div className="col-12 d-flex flex-column align-items-center load-more py-3">
              Scroll To Load More
              <img width={10} src="./assets/vectors/scroll-down-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FinancesExpense;
