import React from "react";
import { NavLink } from "react-router-dom";

import Performances from "../components/Performances";
import MainLayout from "../layouts/MainLayout";

const SettingsLayout = ({ children }) => {
  return (
    <MainLayout
      title="Settings"
      titleClassName="ms-2"
      exploreHeadComponent={
        <div className="mt-5 pt-5">
          <h3 className="section-title">Garage Levalaval</h3>
          <div className="text-manrope fs-12 fw-400 mt-2">
            1770 Boul. de Lacoste, Montreal (QC) H3K 8D3
          </div>
          <div className="text-manrope fs-12 fw-400">
            <span className="fw-700 text-manrope fs-12"> Module</span> :
            Workshop - Automotive
          </div>
          <div className="text-manrope fs-12 fw-700 text-light-5">
            <span className="fw-600 text-manrope fs-12 text-light-5">
              Noded partner
            </span>
            : 9878-3232 Québec inc.
          </div>
        </div>
      }
      exploreComponent={<Performances withHead />}
    >
      <div id="settings-main-content" className="mt-4 mt-sm-0">
        <div className="container-fluid right">
          <div className="row">
            <div className="col-lg-8">{children}</div>
            <div className="col-lg-4">
              <div className="card">
                {[
                  {
                    title: "General Information",
                    subTitle: "Specs foto, name & language",
                    link: "/settings",
                  },
                  {
                    title: "Business Settings",
                    subTitle: "Connected tools & services",
                    link: "/business-settings",
                  },
                  {
                    title: "Users",
                    subTitle: "Manage Employees & Admin",
                    link: "/users",
                  },
                  {
                    title: "Billing",
                    subTitle: "Invoices & Plans",
                    link: "/billing",
                  },
                  {
                    title: "Reports",
                    subTitle: "View & Export your Data",
                    link: "/reports",
                  },
                ].map((el, idx) => {
                  const { title, subTitle, link } = el;

                  return (
                    <NavLink key={"sidelink" + idx} to={link}>
                      <div className="text-lato fw-700">{title}</div>
                      <div className="text-lato fw-400 fs-12 text-light-5 mt-1">
                        {subTitle}
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsLayout;
