import React from "react";
import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import TabContentItem from "../components/TabContentItem";
import TabContents from "../components/TabContents";
import Tabs from "../components/Tabs";
import MainLayout from "../layouts/MainLayout";

const servicesOfferData = [
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: false,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: false,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: false,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
    price: 2700,
  },
  {
    name: "Brake Service",
    completeBrake: 3,
    isLocation: true,
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
      headVector="./assets/vectors/inventory.svg"
      sideNavVector="./assets/vectors/sidenav-right-8.svg"
      title="inventory"
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
            <div className="col-12">
              <Tabs
                className="mt-4 flex-column flex-sm-row w-100"
                tabGroupName="inventory-tabs"
                data={[
                  {
                    icon: "./assets/vectors/mail.svg",
                    label: "Articles",
                    target: "articles",
                    // active: true,
                  },
                  {
                    icon: "./assets/vectors/invoices.svg",
                    label: "Services Offer",
                    target: "services-offer",
                    active: true
                  },
                ]}
              />
            </div>
          </div>
          <div className="row py-4">
            <div className="col-1 d-flex justify-content-center align-items-center"><img src="./assets/vectors/filter-contained.svg" alt="" /></div>
            <div className="col-11 col-md-4">
              <SearchInput
                placeholder="Search by Name or SKU"
              />
            </div>
            <div className="col-12 col-md-7 py-md-0 py-3 d-flex justify-content-end align-items-center">
              <AddBtn blue title="New" />
            </div>
          </div>
          <TabContents tabGroupName="inventory-tabs">
            <TabContentItem target="services-offer">
              <div className="table-wrapper short-vertical-scrollbar">
                <div className="table">
                  {servicesOfferData.map((data, idx) => {
                    return (
                      <div
                        key={"services-offer-data" + idx}
                        className="row my-2 align-items-center py-3 gx-0 services-offer-record"
                      >
                        <div className="col-4 d-flex gap-3 ps-4 align-items-center">
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
                          <button className="py-2 px-4">{data.isLocation ? "Location" : "Recurring"}</button>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center">
                          <div className="services-offer-menu">
                            <img
                              src="./assets/vectors/delete.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex flex-column align-items-center py-3">
                  <img width={10} src="./assets/vectors/scroll-down-arrow.svg" alt="" />
                </div>
              </div>
            </TabContentItem>
            <TabContentItem target="articles">
              <div className="table-wrapper short-vertical-scrollbar">
                <div className="table">
                  {inventoryData.map((data, idx) => {
                    return (
                      <div
                        key={"articles" + idx}
                        className={`row my-2 p-3 gx-0 align-items-center inventory-record ${data.isChecked ? "checked" : ""}`}
                      >
                        <div className="col-5 d-flex align-items-center ps-2 gap-4 info">
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
                            className={`${data.isBrake ? "is-brake" : "is-engine"
                              }  py-2 px-5`}
                          >
                            {data.isBrake ? "Brake" : "Engine"}
                          </button>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center">
                          <div className="inventory-menu">
                            <img
                              src="./assets/vectors/delete.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex flex-column align-items-center py-3">
                  <img width={10} src="./assets/vectors/scroll-down-arrow.svg" alt="" />
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
