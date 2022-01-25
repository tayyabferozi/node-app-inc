import React from "react";

import AddBtn from "../components/AddBtn";
import Input from "../components/Input";
import TabContents from "../components/TabContents";
import TabContentItem from "../components/TabContentItem";
import Tabs from "../components/Tabs";
import WorkshopFormLayout from "../layouts/WorkshopFormLayout";

const WorkshopArticles = () => {
  return (
    <WorkshopFormLayout>
      <div className="articles-container">
        <Tabs
          verticalButtons
          tabGroupName="workshop-articles-tabs"
          data={[
            {
              label: "Forms & Notes",
              target: "forms",
            },
            {
              label: "Articles & Services",
              target: "articles",
              active: true,
            },
          ]}
        />
      </div>

      <TabContents tabGroupName="workshop-articles-tabs">
        <TabContentItem target="forms">
          <div className="d-flex justify-content-between title-container mt-5">
            <div className="title">
              <h3 className="section-title text-dark-1 d-flex align-items-center">
                <img
                  className="me-3"
                  src="./assets/vectors/forms.svg"
                  alt="forms"
                />
                Forms
              </h3>
            </div>
            <AddBtn title="NEW" blue />
          </div>

          <div className="files forms">
            <div className="file-item">
              <div className="bg">
                <img src="./assets/vectors/!.svg" alt="exclamation" />
              </div>
              <div className="text">Inspection</div>
            </div>
            <div className="file-item">
              <div className="bg">
                <img src="./assets/vectors/tick.svg" alt="exclamation" />
              </div>
              <div className="text">Brake Check</div>
            </div>
          </div>

          <div className="d-flex justify-content-between title-container mt-5">
            <div className="title">
              <h3 className="section-title text-dark-1 d-flex align-items-center">
                <img
                  className="me-3"
                  src="./assets/vectors/files.svg"
                  alt="files"
                />
                Files
              </h3>
            </div>
            <AddBtn blue />
          </div>

          <div className="files img">
            <div className="file-item">
              <div className="bg">
                <img
                  src="./assets/vectors/file-img-placeholder.svg"
                  alt="exclamation"
                />
              </div>
              <div className="text">Inspection</div>
            </div>
            <div className="file-item">
              <div className="bg">
                <img
                  src="./assets/vectors/file-img-placeholder.svg"
                  alt="exclamation"
                />
              </div>
              <div className="text">Brake Check</div>
            </div>
            <div className="file-item">
              <div className="bg">
                <img
                  src="./assets/vectors/file-img-placeholder.svg"
                  alt="exclamation"
                />
              </div>
              <div className="text">Door</div>
            </div>
          </div>

          <div className="d-flex justify-content-between title-container mt-5">
            <div className="title">
              <h3 className="section-title text-dark-1 d-flex align-items-center">
                <img
                  className="me-3"
                  src="./assets/vectors/notes.svg"
                  alt="notes"
                />
                Notes
              </h3>
            </div>
          </div>

          <div className="mt-3 fs-10 text-manrope text-light-7">
            Internal Note
          </div>
          <Input
            value="The best study I could find found nothing particularly Another small study looked at sedentary individuals without diabetes who were overweight or obese."
            textArea
          />
          <div className="mt-4 fs-10 text-manrope text-light-7">
            Public Note
          </div>
          <Input
            value="Is there any evidence of benefit if people without diabetes monitor their blood sugar levels with CGMs? There’s little published research to help answer this question."
            textArea
          />

          <div className="d-flex justify-content-end mt-5">
            <button className="btn btn-blue btn-rounded">
              Convert to Invoice
              <img
                className="ms-3"
                src="./assets/vectors/r-arrow-btn.svg"
                alt="right-arrow"
              />
            </button>
          </div>
        </TabContentItem>
        <TabContentItem target="articles">
          <div className="d-flex justify-content-end mt-4 mb-3">
            <AddBtn blue />
          </div>
          <div className="articles-container">
            <div className="article">
              <div className="head">
                <div className="text">Service : Front Brake Change</div>
                <div className="options">
                  <div className="btn p-0">
                    <img
                      src="./assets/vectors/arrow-down-1.svg"
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
              <div className="body">
                <div className="article-section">
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col-6">
                        <div className="article-item title">
                          <div className="head-text">
                            <img src="./assets/vectors/cart.svg" alt="cart" />
                            Front Pad
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="article-item">
                          <div className="title">SKU</div>
                          <div className="text">873244424343-32</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="article-item">
                          <div className="title">Quantity</div>
                          <div className="text">2</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="article-item">
                          <div className="title">Availability</div>
                          <div className="text text-light-5">76</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="article-item">
                          <div className="title">Unit Price</div>
                          <div className="text">20.00%</div>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="article-item">
                          <div className="title">Categorie</div>
                          <div className="text">BRAKE</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="article-section">
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col-6">
                        <div className="article-item title">
                          <div className="head-text">
                            <img src="./assets/vectors/cart.svg" alt="cart" />
                            Front Brake Change with OP
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="article-item">
                          <div className="title">SKU</div>
                          <div className="text">L-FBC-OP</div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-6">
                        <div className="article-item">
                          <div className="title">Quantity</div>
                          <div className="text">1</div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-6">
                        <div className="article-item">
                          <div className="title">Availability</div>
                          <div className="text text-light-5">NA</div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-6">
                        <div className="article-item">
                          <div className="title">Unit Price</div>
                          <div className="text">47.00$</div>
                        </div>
                      </div>
                      <div className="col-sm-3 col-6">
                        <div className="article-item">
                          <div className="title">Categorie</div>
                          <div className="text">LABOUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="foot">
                <div className="d-flex justify-content-end">
                  <div className="btn btn-dark btn-update">
                    <img
                      className="update"
                      src="./assets/vectors/update-2.svg"
                      alt="update"
                    />
                    Update
                  </div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="head">
                <div className="text">Service : Front Brake Change</div>
                <div className="options">
                  <div className="btn p-0">
                    <img
                      src="./assets/vectors/arrow-down-1.svg"
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="head">
                <div className="text">Service : Front Brake Change</div>
                <div className="options">
                  <div className="btn p-0">
                    <img
                      src="./assets/vectors/arrow-down-1.svg"
                      alt="arrow-down"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4 mb-3">
            <button className="btn btn-blue btn-rounded">
              Convert to Invoice
              <img
                className="ms-3"
                src="./assets/vectors/r-arrow-btn.svg"
                alt="right-arrow"
              />
            </button>
          </div>
        </TabContentItem>
      </TabContents>
    </WorkshopFormLayout>
  );
};

export default WorkshopArticles;
