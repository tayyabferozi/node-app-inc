import React from "react";

import WorkshopLayout from "../layouts/WorkshopLayout";
import AddBtn from "../components/AddBtn";

const WorkshopAppointment = () => {
  return (
    <WorkshopLayout>
      <div className="appointment-container">
        <div className="d-flex justify-content-end align-items-center my-4">
          <h3 className="section-title">September7, 2022</h3>
          <img
            className="ms-4 me-5"
            src="./assets/vectors/calendar.svg"
            alt="calendar"
          />
          <AddBtn blue title="NEW" />
        </div>

        <div className="week-load">
          <h3 className="section-title">Week Load</h3>
          <div className="text-label fs-10 text-light-5 lh-1 mt-1">
            Click on the employee to see <br /> the details over a week
          </div>
        </div>
      </div>
    </WorkshopLayout>
  );
};

export default WorkshopAppointment;
