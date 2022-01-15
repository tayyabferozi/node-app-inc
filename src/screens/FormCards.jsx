import React, { useState } from "react";
import AddBtn from "../components/AddBtn";
import Input from "../components/Input";

import MainLayout from "../layouts/MainLayout";
import Tabs from "../components/Tabs";

const FormCards = () => {
  const [cardSelected, setCardSelected] = useState(true);
  const [formState] = useState({
    label: "",
  });

  const inputChangeHandler = () => {};

  return (
    <MainLayout
      headVector="./assets/vectors/nav-9__active.svg"
      sideNavVector="./assets/vectors/sidenav-right-9.svg"
      title={cardSelected ? "Form Builder" : "Form Cards"}
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
      {cardSelected ? (
        <div id="form-builder-main-content" className="mt-4 mt-sm-0">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="form-builder mt-5">
                  <div className="head">
                    <div className="title">
                      <h2>Form name</h2>
                      <div className="text-manrope fw-400 mt-2">
                        Brake Inspection
                      </div>
                    </div>
                    <div className="node">
                      <div className="fw-600">Node with</div>
                    </div>
                  </div>
                  <div className="body">
                    <Input
                      withToggler
                      label="Picture of Problem"
                      type="file"
                      id="file"
                      name="file"
                      onChange={inputChangeHandler}
                      value={formState.file}
                    />
                    <Input
                      withToggler
                      label="Label"
                      id="label"
                      name="label"
                      onChange={inputChangeHandler}
                      value={formState.label}
                    />
                    <Input
                      withToggler
                      icon="vectors/calender-2.svg"
                      label="Next Due date"
                      // type="date"
                      id="date"
                      name="date"
                      onChange={inputChangeHandler}
                      placeholder="22/02/2021"
                      value={formState.date}
                    />
                    <Input
                      withToggler
                      defaultTogglerClose
                      textArea
                      label="Notes"
                      id="notes"
                      name="notes"
                      onChange={inputChangeHandler}
                      value={formState.notes}
                      rows="8"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card shadowed">
                  <h2>Conposents</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="form-cards-main-content" className="mt-4 mt-sm-0">
          <div className="container-fluid px-0">
            <div className="row g-4">
              <div className="col">
                <div className="px-md-5 px-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <Tabs
                      tabClassName="mb-4 mb-sm-0"
                      className="mt-4 "
                      tabGroupName="form-cards-tabs"
                      data={[
                        {
                          icon: "./assets/vectors/messaging.svg",
                          label: "Active",
                          target: "active",
                          active: true,
                        },
                        {
                          icon: "./assets/vectors/sms.svg",
                          label: "Inactive",
                          target: "inactive",
                        },
                      ]}
                    />
                    <AddBtn />
                  </div>

                  <div className="cards-container mt-5">
                    <div className="row gy-5">
                      {[
                        {
                          title: "Brake Check",
                          questions: 4,
                        },
                        {
                          title: "Inspection",
                          questions: 28,
                        },
                        {
                          title: "AC Check",
                          questions: 4,
                        },
                        {
                          title: "Battery Volt.",
                          questions: 4,
                        },
                        {
                          title: "Label",
                          questions: 2,
                        },
                        {
                          title: "Add note",
                          questions: 3,
                        },
                        {
                          title: "Road Test",
                          questions: 14,
                        },
                        {
                          title: "Report",
                          questions: 7,
                        },
                        {
                          title: "Inspection",
                          questions: 28,
                        },
                      ].map((el, idx) => {
                        const { title, questions } = el;

                        return (
                          <div key={"form-card" + idx} className="col">
                            <div
                              className="card shadowed form-card"
                              onClick={() => setCardSelected(true)}
                            >
                              <div className="main">
                                <div className="d-flex checkboxes">
                                  <label className="checkbox-container-2">
                                    One
                                    <input type="checkbox" checked="checked" />
                                    <span className="checkmark"></span>
                                  </label>
                                  <label className="checkbox-container-2">
                                    Two
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <h2>{title}</h2>
                                <div className="text-manrope mt-1">
                                  {questions} questions
                                </div>
                                <button className="btn btn-blue">Edit</button>
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
        </div>
      )}
    </MainLayout>
  );
};

export default FormCards;
