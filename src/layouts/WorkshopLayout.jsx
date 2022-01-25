import React from "react";

import WorkshopTabs from "../components/WorkshopTabs";
import MainLayout from "../layouts/MainLayout";

const WorkshopLayout = ({ children }) => {
  return (
    <MainLayout
      headVector="./assets/vectors/workshop.svg"
      title="workshop"
      titleClassName="ms-2"
      progressNum="12"
      exploreTitle="What's Next?"
      exploreComponent={[
        {
          title: "Oil Change",
          sub: "2020 Ford Focus",
          small: "Damien Latour",
          time: "11:45",
          timeClr: "",
        },
        {
          title: "Tires + Oil Change",
          sub: "2019 Toyota Corolla",
          small: "Georges Cratow",
          time: "11:45",
          timeClr: "",
        },
        {
          title: "Noise rear Right",
          sub: "2007 Volkswagen Jetta",
          small: "Evegunia Manito",
          time: "11:45",
          timeClr: "",
        },
        {
          title: "Brake Rear Check Up",
          sub: "2010 Hyandai Elandra",
          small: "Vanessa Duba",
          time: "11:45",
          timeClr: "#D9CC9E",
        },
      ].map((el, idx) => {
        const { time, title, sub, small, timeClr } = el;

        return (
          <div className={`item centered light-border`} key={"explore" + idx}>
            <div className={"title max-width"}>
              <div className="arrow">
                <img src="./assets/vectors/arrow-right.svg" alt="arrow-right" />
              </div>

              <div className="fs-14 fw-600 d-flex">
                {title}
                {time && (
                  <span className="ms-3 time-container">
                    <div
                      className="circle"
                      style={{ backgroundColor: timeClr || "#C26666" }}
                    ></div>
                    <div className="fs-12 fw-700 font-manrope">{time}</div>
                  </span>
                )}
              </div>
              <div className="fs-12 fw-400 sub-title-text">{sub}</div>
              {small && <div className="mt-1 title-label">{small}</div>}
            </div>
          </div>
        );
      })}
    >
      <div id="workshop-main-content" className="mt-4 mt-sm-0">
        <div className="container-fluid px-0">
          <WorkshopTabs />

          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default WorkshopLayout;
