import React, { useState } from "react";
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
  const [serviceBrakeSelected, setServiceBrakeSelected] = useState(false)
  return (
    <MainLayout
      headVector="./assets/vectors/inventory.svg"
      sideNavVector="./assets/vectors/sidenav-right-8.svg"
      title="inventory"
      exploreTitle="To review"
      exploreSub="Node's artificial intelligence is constantly evolving based on your data"
      exploreComponent={[
        {
          title: "New Node for&nbsp; <b>Brake</b>",
          sub: "Based on your latest service, <b>Kia Rio</b> from <b>2015</b> to <b>2020</b> often have Item <b>Brake Pad # 9273862332-2.</b>",
        },
        {
          title: "New Node for&nbsp; <b>Brake</b>",
          sub: "Based on your latest service, <b>Kia Rio</b> from <b>2015</b> to <b>2020</b> often have Item <b>Brake Pad # 9273862332-2.</b>",
        },
        {
          title: "New Node for&nbsp; <b>Brake</b>",
          sub: "Based on your latest service, <b>Kia Rio</b> from <b>2015</b> to <b>2020</b> often have Item <b>Brake Pad # 9273862332-2.</b>",
        },
      ].map((el, idx) => {
        const { time, title, sub, small } = el;

        return (
          <div className="item light-border inventory-sidenav" key={"explore" + idx}>
            <div className={"title"}>
              <div>
                {time && (
                  <div className="time-container">
                    <div className="circle"></div>
                    <div className="fs-12 fw-700 font-manrope">{time}</div>
                  </div>
                )}
                <div className="fs-14 fw-600 title" dangerouslySetInnerHTML={{ __html: title }} />
                <div
                  className="fs-12 fw-400 sub-title-text"
                  style={{ color: "#9C9C9C" }}
                  dangerouslySetInnerHTML={{ __html: sub }}
                />
              </div>
              <div className="arrow">
                <img src="./assets/vectors/thumbs-up.svg" alt="thumbs-up" />
                <img src="./assets/vectors/refuse.svg" alt="refuse" />
              </div>
              {small && <div className="mt-1 title-label">{small}</div>}
            </div>
          </div>
        );
      })}
    >
      <div id="inventory-main-content">
        {
          !serviceBrakeSelected ? (
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
                              {/* <div className="box"></div> */}
                              <input type="checkbox" name="" id="" />
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
                                  onChange={() => { }}
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
                                onClick={() => setServiceBrakeSelected(true)}
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
          ) : (
            <div className="container-fluid service-brake">
              <div className="row pt-5 gx-5">
                <div className="col-12 col-lg-7 pt-2 pe-3">
                  <div className="row gx-0">
                    <div className="col-12 d-flex justify-content-between align-items-center py-3 title">
                      <div className="service-brake-text">Service Brake</div>
                      <div className="d-flex justify-content-center align-items-center gap-2 text-manrope">
                        <input type="checkbox" name="" id="" />
                        Available To Book
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">Default Location</label>
                        <div className="input">
                          <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="Select Location" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-form-control my-3">
                            <label className="text-light-5 fs-14" htmlFor="">Price</label>
                            <div className="input">
                              <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="1900" onChange={() => { }} />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="custom-form-control my-3">
                            <label className="text-light-5 fs-14" htmlFor="">Duration</label>
                            <div className="input">
                              <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="19 min." onChange={() => { }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">Category</label>
                        <div className="input">
                          <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="Select Category" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-4 d-flex flex-column align-items-start justify-content-end">
                          <div className="fs-14 text-dark-3 text-bold text-poppins pb-2">Add Variant</div>
                          <div
                            className="rounded d-flex justify-content-center align-items-center fs-16 text-manrope text-bold box">
                            +
                          </div>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-start justify-content-end">
                          <div className="fs-14 text-dark-3 text-bold text-poppins pb-2">Node Form</div>
                          <div
                            className="rounded d-flex justify-content-center align-items-center fs-16 text-manrope text-bold box">
                            +
                          </div>
                        </div>
                        <div className="col-4 d-flex flex-column align-items-start justify-content-end">
                          <div className="fs-14 text-dark-3 text-bold text-poppins pb-2">Schedule</div>
                          <div
                            className="rounded d-flex justify-content-center align-items-center fs-16 text-manrope text-bold box">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">Type Of Service</label>
                        <div className="input">
                          <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="Select Category" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-8">
                          <div className="custom-form-control my-3">
                            <label className="text-light-5 fs-14" htmlFor="">Start & End Date</label>
                            <div className="input">
                              <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="20-12-2022 to 22-12-2022" onChange={() => { }} />
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="custom-form-control my-3">
                            <label className="text-light-5 fs-14" htmlFor="">Capacity</label>
                            <div className="input">
                              <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="10" onChange={() => { }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-6">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">Add Article</label>
                        <div className="input">
                          <img src="./assets/vectors/add-basket.svg" alt="" />
                          <input className="text-dark-3 fs-14 pt-2 pb-2 ps-5 text-blue" type="text" value="Right Rear Light" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">SKU</label>
                        <div className="input">
                          <input className="text-dark-3 fs-14 pt-2 pb-2" type="text" value="98736446237234-23" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="row">
                        <div className="col-6">
                          <div className="custom-form-control my-3">
                            <label className="text-light-5 fs-14" htmlFor="">Quantity</label>
                            <div className="input">
                              <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="2" onChange={() => { }} />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="custom-form-control my-3">
                            <label className="text-light-5 fs-14" htmlFor="">Amount</label>
                            <div className="input">
                              <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" placeholder="37" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">Unit Price</label>
                        <div className="input">
                          <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="37.00$" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="custom-form-control my-3">
                        <label className="text-light-5 fs-14" htmlFor="">Categorie</label>
                        <div className="input">
                          <input className="text-dark-3 fs-14 pt-2 pb-3" type="text" value="LIGHT" onChange={() => { }} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-0 py-3">
                    <div className="col-12 d-flex gap-3">
                      <button className={`btn btn-add`}>
                        Add Article
                      </button>
                      <button onClick={() => setServiceBrakeSelected(false)} className={`btn blue`}>
                        Save & Return
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-0 col-lg-1"></div>
                <div className="col-12 col-lg-4 custom-border custom-rounded service-details">
                  <div className="row g-3 py-4 gap-3">
                    <div className="col-12">
                      <div className="service-details-text pt-4 pb-2 text-dark-3 text-manrope text-bold fs-18">Service Details</div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-11 d-flex align-items-start gap-3">
                          <div className="box"><img src="./assets/vectors/vehicle.svg" alt="" /></div>
                          <div>
                            <div className="title text-dark-3 text-bold fs-14 pt-1">
                              Right Rear Light
                            </div>
                            <div className="sub text-light-5 fs-12 ">
                              89632472346727834-23
                            </div>
                          </div>
                        </div>
                        <div className="col-1 d-flex align-items-center text-blue text-bold">
                          x2
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-11 d-flex align-items-start gap-3">
                          <div className="box"><img src="./assets/vectors/vehicle.svg" alt="" /></div>
                          <div>
                            <div className="title text-dark-3 text-bold fs-14 pt-1">
                              Filter
                            </div>
                            <div className="sub text-light-5 fs-12 ">
                              B-7C-9762
                            </div>
                          </div>
                        </div>
                        <div className="col-1 d-flex align-items-center text-blue text-bold">
                          x1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </MainLayout>
  );
};

export default Inventory;
