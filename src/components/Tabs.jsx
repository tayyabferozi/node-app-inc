import React, { useEffect } from "react";
import $ from "jquery";

const Tabs = ({
  data,
  tabGroupName,
  className,
  tabClassName,
  verticalButtons,
}) => {
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
        const { active, icon, iconActive, label, target } = el;

        return (
          <button
            key={tabGroupName + idx}
            data-target={target}
            className={`tab d-flex align-items-center${
              verticalButtons ? " vertical" : ""
            }${active ? " active" : ""} ${target} ${
              tabClassName ? tabClassName : ""
            }`}
            onClick={() => changeTab(target)}
          >
            {icon && iconActive && (
              <div className="icon-container me-3">
                <img className="inactive" src={icon} alt={label} />
                <img className="active" src={iconActive} alt={label} />
              </div>
            )}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
