import React from "react";
import { Link } from "react-router-dom";

import AddBtn from "../components/AddBtn";
import SearchInput from "../components/SearchInput";
import WorkshopLayout from "../layouts/WorkshopLayout";

const WorkshopStorage = () => {
  return (
    <WorkshopLayout>
      <div className="location-container">
        <div className="container-fluid mt-4">
          <div className="row gy-4">
            <div className="col-lg-5">
              <SearchInput
                placeholder="Search Users by Name, Email or Date"
                withFilter
              />
              <h3 className="section-title mt-5">Floor Plan</h3>
            </div>
            <div className="col-lg-7">
              <div className="d-flex justify-content-between title-container">
                <div className="title">
                  <h4 className="evidence-word text-dark-1">Location D</h4>
                </div>
                <AddBtn title="NEW" blue />
              </div>

              <div className="container-fluid mt-4 px-0">
                <div className="row">
                  {[
                    {
                      text1: "215/65/16",
                      text2: "D",
                      text3: "110",
                      text4: "Carl Dumond",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "215/65/16",
                      text2: "D",
                      text3: "110",
                      text4: "Carl Dumond",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "215/65/16",
                      text2: "D",
                      text3: "110",
                      text4: "Carl Dumond",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                    {
                      text1: "Blue Right Door",
                      text2: "D",
                      text3: "150",
                      text4: "Louis Lamontagne",
                    },
                  ].map((el, idx) => {
                    return (
                      <div className="col-sm-4">
                        <Link to="/workshop-articles" className="location-card">
                          <div className="qr-container">
                            <img
                              src="./assets/vectors/location-qr.svg"
                              alt="qr"
                            />
                          </div>
                          <h3 className="section-title mt-4">{el.text1}</h3>
                          <div>
                            <span className="text-lato fs-16 fw-700">
                              D &nbsp;
                            </span>
                            <span className="text-lato fs-16 fw-400">
                              / {el.text3}
                            </span>
                          </div>
                          <div className="fw-600 text-blue">{el.text4}</div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WorkshopStorage;
