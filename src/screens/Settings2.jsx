import React, { useState } from "react";

import SettingsLayout from "../layouts/SettingsLayout";
import Input from "../components/Input";
import AddBtn from "../components/AddBtn";
import SettingsUserImg from "../components/SettingsUserImg";

const Settings1 = () => {
  const [formState, setFormState] = useState({
    about:
      "Clay is a new type of tool that brings together the best parts of spreadsheets automation. Quickly connect your apps and d workflows, build useful tools, enr.",
    invoicePrefix: "GL",
    ibeaconId: "",
    apiKey: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <SettingsLayout>
      <SettingsUserImg placeholder />

      <div className="form business-settings">
        <div className="container-fluid px-0">
          <div className="row">
            {[
              {
                radio: true,
                label: "Reservations",
                id: "reservations",
                fullWidth: true,
                options: [
                  {
                    text: "Need Request",
                    value: "need-request",
                  },
                  {
                    text: "Automatically Approve",
                    value: "automatically-approve",
                  },
                ],
              },
              {
                lightLabel: true,
                label: "About",
                id: "about",
                fullWidth: true,
                textArea: true,
                rows: 3,
              },
              {
                lightLabel: true,
                label: "Invoice Prefix",
                id: "invoicePrefix",
                placeholder: "Clay Labire",
              },
              {
                lightLabel: true,
                select: true,
                label: "Default Bank Account",
                id: "bank",
                options: [
                  {
                    text: "Please select ...",
                    value: "",
                  },
                  {
                    text: "Bank 1",
                    value: "bank-1",
                  },
                  {
                    text: "Bank 2",
                    value: "bank-2",
                  },
                ],
              },
              {
                lightLabel: true,
                label: "Main iBeacon ID",
                id: "ibeaconId",
                placeholder: "uf83hfieuwfud823dd23312",
              },
              {
                lightLabel: true,
                label: "API key",
                id: "apiKey",
                type: "password",
                placeholder: "sdfsadfsd",
              },
            ].map((el, idx) => {
              const {
                lightLabel,
                label,
                id,
                placeholder,
                fullWidth,
                textArea,
                ...rest
              } = el;

              return (
                <div
                  className={`col-${fullWidth ? "12" : "sm-6"}`}
                  key={"input" + idx}
                >
                  <Input
                    textArea={textArea}
                    label={label}
                    rootClassName={lightLabel ? "light-label" : ""}
                    id={id}
                    name={id}
                    onChange={inputChangeHandler}
                    value={formState[id]}
                    placeholder={placeholder}
                    {...rest}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between title-container align-items-start mt-5">
            <div className="title">
              <h3 className="section-title">Locations</h3>
              <div className="title-label text-light-5">Manage below</div>
            </div>
            <AddBtn title="ADD" />
          </div>

          <div className="table-container short-vertical-scrollbar">
            <table className="locations-table">
              <thead className="no-bg">
                <tr>
                  <th>Name</th>
                  <th>Schedule</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Bay 1",
                    schedule: "S-S  9:00 - 17:00",
                    address: "535 Filion, Saint-Jérôme",
                  },
                  {
                    name: "Pool - Polyvalente",
                    schedule: "M-T-F  13:00 - 17:00",
                    address: "535 Filion, Saint-Jérôme",
                  },
                  {
                    name: "Danse local 215",
                    address: "873 Labelle, Blainville",
                  },
                  {
                    name: "Gym",
                    address: "873 Labelle, Blainville",
                  },
                  {
                    name: "Badminton Court",
                    address: "73 Hoslaga-Maison, Montréal",
                  },
                ].map((el, idx) => {
                  const { name, schedule, address } = el;

                  return (
                    <tr key={"loc-tab-item" + idx}>
                      <td>{name}</td>
                      <td>
                        {schedule || (
                          <img
                            src="./assets/vectors/schedule-add.svg"
                            alt="add"
                          />
                        )}
                      </td>
                      <td>{address}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between title-container align-items-start mt-5">
            <div className="title">
              <h3 className="section-title">Categories</h3>
            </div>
            <AddBtn title="ADD" />
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Settings1;
