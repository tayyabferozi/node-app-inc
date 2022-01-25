import React, { useState } from "react";

import AddBtn from "../components/AddBtn";
import Input from "../components/Input";
import MainLayout from "../layouts/MainLayout";
import Tabs from "../components/Tabs";

const FormCards = () => {
  const [cardSelected, setCardSelected] = useState(false);
  const [formState] = useState({
    label: "",
  });

  const inputChangeHandler = () => {};

  return (
    <MainLayout
      headVector="./assets/vectors/builder.svg"
      sideNavVector="./assets/vectors/builder.svg"
      title="builder"
      exploreTitle="Last entries"
      exploreComponent={[
        {
          title: "Brake Check",
          sub: "Ford Focus 2021",
          small: "Manon Légaré",
        },
        {
          title: "Inspection",
          sub: "Cruze Cherolet 2020",
          small: "Guylaine Tremblay",
        },
        {
          title: "Inspection",
          sub: "Honda Civid 2021",
          small: "Isaac Abbee",
        },
      ].map((el, idx) => {
        const { time, title, sub, small } = el;

        return (
          <div className={`item centered`} key={"explore" + idx}>
            <div className={"title max-width"}>
              <div className="arrow">
                <img src="./assets/vectors/arrow-right.svg" alt="arrow-right" />
              </div>
              {time && (
                <div className="time-container">
                  <div className="circle"></div>
                  <div className="fs-12 fw-700 font-manrope">{time}</div>
                </div>
              )}
              <div className="fs-12 fw-700 sub-title-text">{title}</div>
              <div className="fs-14 fw-600 mt-1">{sub}</div>
              {small && <div className="title-label text-light-5">{small}</div>}
            </div>
          </div>
        );
      })}
    >
      {cardSelected ? (
        <div id="form-builder-main-content" className="mt-4 mt-sm-0">
          <div className="container-fluid">
            <div className="row g-4">
              <div className="col-lg-8 col-md-6">
                <div className="form-builder mt-5">
                  <div className="head">
                    <div className="title">
                      <h3 className="section-title">Form name</h3>
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
                      fileUpload
                      label="Picture of Problem"
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

                    <div className="btn btn-blue">Save &amp; Return</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 composents-container">
                <div className="card bordered">
                  <h3 className="section-title">Composents</h3>

                  <div className="sections">
                    <div className="section">
                      <div className="imgs">
                        <img
                          src="./assets/vectors/composents-1.svg"
                          alt="composents"
                        />
                        <img
                          src="./assets/vectors/composents-2.svg"
                          alt="composents"
                        />
                      </div>
                    </div>
                    <div className="section">
                      <div className="fw-600">CHOICES</div>
                      <div className="imgs">
                        <div className="img">
                          <div className="text">Single Choice</div>
                          <img
                            src="./assets/vectors/composents-3.svg"
                            alt="composents"
                          />
                        </div>
                        <div className="img">
                          <div className="text">Dropdown</div>
                          <img
                            src="./assets/vectors/composents-4.svg"
                            alt="composents"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section">
                      <div className="fw-600">MULTIMEDIA</div>
                      <div className="imgs">
                        <div className="img">
                          <div className="text">Photo</div>
                          <img
                            src="./assets/vectors/composents-5.svg"
                            alt="composents"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="section">
                      <div className="fw-600">DATE</div>
                      <div className="imgs">
                        <img
                          src="./assets/vectors/composents-6.svg"
                          alt="composents"
                        />
                      </div>
                    </div>
                  </div>
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
                      tabClassName="mb-4 mb-sm-0 fw-600 text-poppins fs-14"
                      className="mt-4 "
                      tabGroupName="form-cards-tabs"
                      data={[
                        {
                          icon: "./assets/vectors/internal.svg",
                          iconActive: "./assets/vectors/internal.svg",
                          label: "Internal",
                          target: "internal",
                          active: true,
                        },
                        {
                          icon: "./assets/vectors/sms.svg",
                          iconActive: "./assets/vectors/sms-active.svg",
                          label: "Public",
                          target: "public",
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
                          <div
                            key={"form-card" + idx}
                            className="col-lg-3 col-md-4 col-sm-6"
                          >
                            <div className="card bordered form-card">
                              <div className="main">
                                <div className="d-flex checkboxes">
                                  <label className="checkbox-container-2">
                                    Product
                                    <input name="rd" type="radio" />
                                    <span className="checkmark"></span>
                                  </label>
                                  <label className="checkbox-container-2">
                                    Service
                                    <input name="rd" type="radio" />
                                    <span className="checkmark"></span>
                                  </label>
                                </div>
                                <h3 className="section-title">{title}</h3>
                                <div className="text-manrope mt-1">
                                  {questions} questions
                                </div>
                                <button
                                  className="btn btn-grey"
                                  onClick={() => setCardSelected(true)}
                                >
                                  Update
                                </button>
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
