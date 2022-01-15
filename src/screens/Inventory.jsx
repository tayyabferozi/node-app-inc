import React from "react";
import TabContentItem from "../components/TabContentItem";
import TabContents from "../components/TabContents";
import Tabs from "../components/Tabs";
import MainLayout from "../layouts/MainLayout";

const packagesData = [
  {
    name: "Brake Service",
    completeBrake: 3,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
  {
    name: "Oil Change",
    completeBrake: 2,
    price: 2700,
  },
];

const inventoryData = [
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: true,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: false,
    isChecked: true,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: false,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
  {
    name: "Macbook Pro 15’ 2019",
    number: "SKU 345-091",
    quantity: 4890,
    price: 2642,
    isBrake: true,
    isChecked: false,
  },
];

const Inventory = () => {
  return (
    <MainLayout
      headVector="./assets/vectors/nav-8__active.svg"
      sideNavVector="./assets/vectors/sidenav-right-8.svg"
      title="Packages &amp; Services"
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
      <div id="inventory-main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="d-flex align-items-center py-5">
                <input
                  className="search px-4 py-3"
                  type="text"
                  placeholder="Search into the list..."
                />
              </div>
            </div>
            <div className="col-4 d-flex justify-content-end">
              <div>
                <Tabs
                  className="mt-4 d-lg-flex d-none pt-4"
                  tabGroupName="inventory-tabs"
                  data={[
                    {
                      icon: "./assets/vectors/invoices.svg",
                      label: "Packages",
                      target: "packages",
                      // active: true
                    },
                    {
                      icon: "./assets/vectors/mail.svg",
                      label: "Articles",
                      target: "articles",
                      active: true,
                    },
                  ]}
                />
              </div>
            </div>
            <div className="col-2 d-flex justify-content-end align-items-center">
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
            </div>
          </div>
          <TabContents tabGroupName="inventory-tabs">
            <TabContentItem target="packages">
              {packagesData.map((data, idx) => {
                return (
                  <div
                    key={"packages-data" + idx}
                    className="row my-2 align-items-center py-3 packages-record"
                  >
                    <div className="col-4 d-flex gap-3 align-items-center">
                      <div className="box"></div>
                      <div className="name">{data.name}</div>
                    </div>
                    <div className="col-4">
                      <div className="complete-brake">
                        Complete brake...{" "}
                        <span className="px-4">{data.completeBrake}</span>
                      </div>
                    </div>
                    <div className="col-1 price">{data.price}$</div>
                    <div className="col-2">
                      <button className="py-2 px-4">Define</button>
                    </div>
                    <div className="col-1">
                      <div className="packages-menu">
                        <img
                          src="./assets/vectors/horizontal-menu.svg"
                          alt=""
                        />
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
            </TabContentItem>
            <TabContentItem target="articles">
              {inventoryData.map((data, idx) => {
                return (
                  <div
                    key={"articles" + idx}
                    className={`row my-2 p-3 align-items-center inventory-record ${
                      data.isChecked ? "checked" : ""
                    }`}
                  >
                    <div className="col-5 d-flex align-items-center gap-4 info">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          checked={data.isChecked}
                          name=""
                          id=""
                        />
                      </div>
                      <img src="./assets/img/inventory-1.png" alt="" />
                      <div className="name">
                        <div className="title">{data.name}</div>
                        <div className="caption">{data.number}</div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="quantity">
                        {data.quantity.toLocaleString()}
                        <div>Qty.</div>
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="price">
                        {data.price}$<div>Price</div>
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <button
                        className={`${
                          data.isBrake ? "is-brake" : "is-engine"
                        }  py-2 px-5`}
                      >
                        {data.isBrake ? "Brake" : "Engine"}
                      </button>
                    </div>
                    <div className="col-1">
                      <div className="inventory-menu">
                        <img
                          src="./assets/vectors/horizontal-menu.svg"
                          alt=""
                        />
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
            </TabContentItem>
          </TabContents>
        </div>
      </div>
    </MainLayout>
  );
};

export default Inventory;
