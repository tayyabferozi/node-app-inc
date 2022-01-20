import React, { useState } from "react";

import Input from "../components/Input";
import SettingsLayout from "../layouts/SettingsLayout";
import AddBtn from "../components/AddBtn";

const Settings1 = () => {
  const [formState, setFormState] = useState({
    employee: "",
    admin: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <SettingsLayout>
      <div className="settings-3">
        <div className="d-flex justify-content-between title-container align-items-start">
          <div className="title">
            <h3 className="section-title">Active Users</h3>
          </div>
          <AddBtn title="ADD" />
        </div>
        <div className="table-container short-vertical-scrollbar">
          <table className="users-table">
            <tbody>
              {[
                {
                  text1: "Ekaterina Tankova",
                  text2: "ekaterina.tankova@devias.io",
                  text3: "304-428-3097",
                  text4: "SuperUser",
                  text5: "40,20",
                },
                {
                  text1: "Ekaterina Tankova",
                  text2: "ekaterina.tankova@devias.io",
                  text3: "304-428-3097",
                  text4: "Admin",
                  text5: "40,20",
                },
                {
                  text1: "Ekaterina Tankova",
                  text2: "ekaterina.tankova@devias.io",
                  text3: "304-428-3097",
                  text4: "Employee",
                  text5: "32,18",
                },
                {
                  text1: "Ekaterina Tankova",
                  text2: "ekaterina.tankova@devias.io",
                  text3: "304-428-3097",
                  text4: "Employee",
                  text5: "32,18",
                },
                {
                  text1: "Ekaterina Tankova",
                  text2: "ekaterina.tankova@devias.io",
                  text3: "304-428-3097",
                  text4: "Employee",
                  text5: "32,18",
                },
              ].map((el, idx) => {
                const { text1, text2, text3, text4, text5 } = el;

                return (
                  <tr key={"active" + idx}>
                    <td>
                      <img src="./assets/img/active-user.jpg" alt="user" />
                      {text1}
                    </td>
                    <td>{text2}</td>
                    <td>{text3}</td>
                    <td>{text4}</td>
                    <td>{text5}$</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 className="section-title mt-5 pt-5">Permissions</h3>

        <div className="container-fluid px-0">
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="font-inter fw-600 fs-18 text-dark-5">
                Employee
              </div>

              {[
                {
                  checkbox: true,
                  id: "employee",
                  fullWidth: true,
                  subRootClassName: "flex-column",
                  options: [
                    {
                      text: "Hide Finances data",
                    },
                    {
                      text: "Can’t Manage Articles & Services",
                    },
                    {
                      text: "Can’t Manage Clients",
                    },
                    {
                      text: "Can’t Use Node Desk Utilities",
                    },
                  ],
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
                  <Input
                    key={"employee" + idx}
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
                );
              })}
            </div>
            <div className="col-md-6">
              <div className="font-inter fw-600 fs-18 text-dark-5">Admin</div>
              {[
                {
                  checkbox: true,
                  id: "employee",
                  fullWidth: true,
                  subRootClassName: "flex-column",
                  options: [
                    {
                      text: "Hide Finances data",
                    },
                    {
                      text: "Can’t Manage Articles & Services",
                    },
                    {
                      text: "Can’t Manage Clients",
                    },
                    {
                      text: "Can’t Use Node Desk Utilities",
                    },
                    {
                      text: "Can’t Edit Business Settings",
                    },
                  ],
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
                  <Input
                    key={"employee" + idx}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Settings1;
