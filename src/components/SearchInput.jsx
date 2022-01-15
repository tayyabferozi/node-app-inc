import React from "react";

const SearchInput = ({ withFilter, icon, placeholder, ...rest }) => {
  return (
    <div className="main-search">
      <div className="custom-form-control d-flex">
        {withFilter && (
          <button className="btn">
            <img src="./assets/vectors/search-filter.svg" alt="filter" />
          </button>
        )}
        <div className="input">
          <img
            src="./assets/vectors/search.svg"
            alt="search"
            className="magnifier"
          />
          <input
            className="custom-input"
            type="text"
            id="search"
            placeholder={placeholder || "Start typing.."}
            value=""
            readOnly
            {...rest}
          />
          {icon && <img src={icon} className="qr" alt="qr" />}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
