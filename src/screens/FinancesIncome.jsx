import React, { useState } from "react";
import AddBtn from "../components/AddBtn";
import ExploreNavItemWithIcon from "../components/ExploreNavItemWithIcon";
import SearchInput from "../components/SearchInput";
import FancyInput from "../components/FancyInput";
import Tabs from "../components/Tabs";
import MainLayout from "../layouts/MainLayout";

const dummyData = [
  {
    circleColor: "#ECA0A0",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "14/APR/2020",
    paidDate: "15/APR/2020",
    amount: 200,
    currency: "CAD",
  },
  {
    circleColor: "#4ACBD3",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "14/APR/2020",
    paidDate: "15/APR/2020",
    amount: 200,
    currency: "CAD",
  },
  {
    circleColor: "#4ACBD3",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "",
    paidDate: "",
    amount: 200,
    currency: "CAD",
  },
  {
    circleColor: "#4ACBD3",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "",
    paidDate: "15/APR/2020",
    amount: 200,
    currency: "CAD",
  },
  {
    circleColor: "#1E55A9",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "14/APR/2020",
    paidDate: "",
    amount: 200,
    currency: "CAD",
  },
  {
    circleColor: "#ECA0A0",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "14/APR/2020",
    paidDate: "",
    amount: 200,
    currency: "CAD",
  },
  {
    circleColor: "#1E55A9",
    name: "Justin Septimus",
    email: "example@email.com",
    lastLogin: "14/APR/2020",
    paidDate: "15/APR/2020",
    amount: 200,
    currency: "CAD",
  },
];

const FinancesIncome = () => {
  const [incomeConvertedSelected, setIncomeConvertedSelected] = useState(false);
  return (
    <MainLayout
      headVector="./assets/vectors/wallet.svg"
      sideNavVector="./assets/vectors/sidenav-right-2.svg"
      title={"wallet"}
      exploreTitle="Let’s go to"
      exploreComponent={[
        {
          title: "Overview",
          sub: "Charts & Reports",
          iconName: "finances-overview",
          sideNavLink: "finances-overview",
        },
        {
          title: "Incomes",
          sub: "Invoices",
          iconName: "finances-income",
          sideNavLink: "finances-income",
        },
        {
          title: "Expenses",
          sub: "Suppliers & Purchases",
          iconName: "finances-expense",
          sideNavLink: "finances-expense",
        },
      ].map((el, idx) => {
        const { title, sub, small, iconName, sideNavLink } = el;

        return (
          <ExploreNavItemWithIcon
            title={title}
            sub={sub}
            iconName={iconName}
            sideNavLink={sideNavLink}
            small={small}
            key={"explore" + idx}
          />
        );
      })}
    >
      <div className="finances-invoice-main-content">
        {!incomeConvertedSelected ? (
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
                      active: true,
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
              <div className="col-1 d-flex justify-content-center align-items-center">
                <img src="./assets/vectors/filter-contained.svg" alt="filter" />
              </div>
              <div className="col-11 col-md-4">
                <SearchInput placeholder="Search Users by Name or Email" />
              </div>
              <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
                <AddBtn blue title="New" />
              </div>
            </div>
            <div className="table-wrapper short-vertical-scrollbar">
              <div className="table">
                <div className="container-fluid px-0 mt-3">
                  <div className="row gx-0 table-heading">
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
                    <div
                      key={"li" + idx}
                      className="row align-items-center gx-0 py-2 dummy-data"
                    >
                      <div className="col-1 d-flex justify-content-center align-items-center">
                        <div
                          className="circle"
                          style={{ backgroundColor: data.circleColor }}
                        >
                          <img
                            w="true"
                            src="./assets/img/client-vector-8.png"
                            alt={data.name}
                          />
                        </div>
                      </div>
                      <div className="col-3 d-flex flex-column gap-1">
                        <div className="name">{data.name}</div>
                        <div className="email">{data.email}</div>
                      </div>
                      <div className="col-3 d-flex flex-column gap-1">
                        <div
                          className={`chip ${data.lastLogin ? "is-noded" : ""}`}
                        >
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
                        <div
                          className={`chip ${data.paidDate ? "" : "unpaid"}`}
                        >
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
                      <div
                        onClick={() => setIncomeConvertedSelected(true)}
                        className="col-2 d-flex justify-content-end align-items-center gap-5 pe-2 more-menu"
                      >
                        Open
                        <img
                          src="./assets/vectors/vertical-menu.svg"
                          alt="menu"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center py-3">
                <img
                  src="./assets/vectors/scroll-down-arrow.svg"
                  alt="scroll-down"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row gx-0 py-5">
              <div className="col-12 col-lg-7">
                <div className="collapse">
                  <div className="collapse-header">
                    <div className="text-dark-3 text-lato fw-800 fs-12">
                      Service: Front Back Change
                    </div>
                    <img src="./assets/vectors/arrow-down.svg" alt="arrow" />
                  </div>
                  <div className="collapse-body">
                    <div className="row">
                      <div className="col-6 d-flex align-items-end">
                        <FancyInput
                          label=" "
                          value="Front Pad"
                          disabled
                          inputClassName="text-blue"
                          onChange={() => {}}
                        />
                      </div>
                      <div className="col-6">
                        <FancyInput
                          label="SKU"
                          value="873244424343-32"
                          onChange={() => {}}
                        />
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <FancyInput
                              label="Quantity"
                              value="2"
                              onChange={() => {}}
                            />
                          </div>
                          <div className="col-6">
                            <FancyInput
                              label="Amount"
                              value="76"
                              inputClassName="text-light-5"
                              disabled
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <FancyInput
                              label="Unit Price"
                              value="20.00$"
                              onChange={() => {}}
                            />
                          </div>
                          <div className="col-6">
                            <FancyInput
                              label="Categorie"
                              value="BRAKE"
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6 d-flex-align-items-end">
                        <FancyInput
                          label=""
                          value="Front Brake Change with OP"
                          disabled
                          inputClassName="text-blue"
                          onChange={() => {}}
                        />
                      </div>
                      <div className="col-6">
                        <FancyInput
                          label="SKU"
                          value="L-FBC-OP"
                          onChange={() => {}}
                        />
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <FancyInput
                              label="Quantity"
                              value="1"
                              onChange={() => {}}
                            />
                          </div>
                          <div className="col-6">
                            <FancyInput
                              label="Amount"
                              value="N/A"
                              inputClassName="text-light-5"
                              disabled
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <FancyInput
                              label="Unit Price"
                              value="47.00$"
                              onChange={() => {}}
                            />
                          </div>
                          <div className="col-6">
                            <FancyInput
                              label="Categorie"
                              value="LABOR"
                              onChange={() => {}}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-end align-items-center">
                        <button className="btn btn-dark update-btn">
                          <img src="./assets/vectors/update.svg" alt="update" />
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="collapse">
                  <div className="collapse-header">
                    <div className="text-dark-3 text-lato fw-800 fs-12">
                      Unit : Oil - (1L) 5W30 Syn.
                    </div>
                    <img src="./assets/vectors/arrow-right.svg" alt="arrow" />
                  </div>
                </div>
                <div className="collapse">
                  <div className="collapse-header">
                    <div className="text-dark-3 text-lato fw-800 fs-12">
                      Unit : 7C Battery
                    </div>
                    <img src="./assets/vectors/arrow-right.svg" alt="arrow" />
                  </div>
                </div>
                <div className="row pt-5 gx-0">
                  <div className="col-12 d-flex gap-3">
                    <button className={`btn padding btn-add`}>
                      Add &amp; Pay Later
                    </button>
                    <button onClick={() => {}} className={`btn padding blue`}>
                      Add Payment
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-0 col-lg-1"></div>
              <div className="col-12 col-lg-4 py-5 py-lg-0 px-xxl-5">
                <div className="row px-xxl-4">
                  <div className="col-12">
                    <div
                      className="circle circle-large"
                      style={{ backgroundColor: "#ECA0A0" }}
                    >
                      <img
                        src="./assets/img/client-vector-8.png"
                        alt="client"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-blue text-poppins fs-22 fw-600">
                      Bryandy Boyd
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-dark-3 text-manrope fs-14 user-address">
                      3452 av. de la Tour, Québec (QC) G1V 9J3 Canada
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="text-dark-3 text-poppins fw-700 fs-14 lh-1">
                      ernest.mason@gmail.com
                    </div>
                    <div className="text-light-5 text-manrope fs-12 pb-4">
                      Email
                    </div>
                  </div>
                  <div className="col-12 pb-5">
                    <div className="text-dark-3 text-poppins fw-700 fs-14 lh-1">
                      561-303-6106
                    </div>
                    <div className="text-light-5 text-manrope fs-12 pb-5">
                      Phone
                    </div>
                  </div>
                  <div className="col-12 pb-3">
                    <div className="text-dark-3 text-manrope fw-800 fs-18">
                      Work Order
                    </div>
                    <div className="text-light-5 text-manrope fw-200 fs-20">
                      #329878316-23
                    </div>
                  </div>
                  <div className="col-12 pb-4 d-flex gap-3">
                    <img src="./assets/vectors/paste.svg" alt="client" />
                    <div>
                      <div className="text-dark-3 text-manrope fs-14">
                        Noded with <b>2 profiles</b>
                      </div>
                      <div className="text-light-5 text-manrope fs-12">
                        Acura MDX 2020
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pb-5 d-flex gap-3">
                    <img src="./assets/vectors/calender-3.svg" alt="calender" />
                    <div className="text-dark-3 user-location">
                      <span className="text-manrope fs-14">Appointment </span>
                      <b>September 8, 2022 14:00 </b>
                      <span className="text-manrope fw-300 fs-14">
                        Location 2
                      </span>
                    </div>
                  </div>
                  <div className="col-12 pt-5">
                    <div className="row pt-5">
                      <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-12">
                        Subtotal
                      </div>
                      <div className="col-6 pb-3 text-dark-4 text-manrope fs-12 d-flex justify-content-end">
                        100.00$
                      </div>
                      <div className="col-6 text-dark-4 text-manrope fw-800 fs-12">
                        TPS
                      </div>
                      <div className="col-6 text-dark-4 text-manrope fs-12 d-flex justify-content-end">
                        5.00$
                      </div>
                      <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-12">
                        TVQ
                      </div>
                      <div className="col-6 pb-3 text-dark-4 text-manrope fs-12 d-flex justify-content-end">
                        9.98$
                      </div>
                      <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-14">
                        Total
                      </div>
                      <div className="col-6 pb-3 text-dark-4 text-manrope fw-800 fs-14 d-flex justify-content-end">
                        114.98$
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default FinancesIncome;
