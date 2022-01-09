import React, { useEffect } from "react";
import $ from "jquery";

const Tabs = ({ data, tabGroupName, className, tabClassName }) => {
  const changeTab = (target) => {
    $(`.tabs.${tabGroupName} .tab`).removeClass("active");
    $(`.tabs.${tabGroupName} .tab.${target}`).addClass("active");

    $(`.tabContents.${tabGroupName} .tabContent`).removeClass("active");
    $(`.tabContents.${tabGroupName} .tabContent.${target}`).addClass("active");
  };
  useEffect(() => {
    const activeTarget = $(`.tabs.${tabGroupName} .tab.active`).attr(
      "data-target"
    );

    $(`.tabContents.${tabGroupName} .tabContent.${activeTarget}`).addClass(
      "active"
    );
  }, [tabGroupName]);

  return (
    <div
      className={`tabs d-flex align-items-center ${
        tabGroupName || ""
      } ${className}`}
    >
      {data.map((el, idx) => {
        const { active, icon, label, target } = el;

        return (
          <button
            key={tabGroupName + idx}
            data-target={target}
            className={`tab d-flex align-items-center ${
              active ? " active" : ""
            } ${target} ${tabClassName ? tabClassName : ""}`}
            onClick={() => changeTab(target)}
          >
            {icon && <img className="me-3" src={icon} alt={label} />}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
