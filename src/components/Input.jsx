const Input = ({
  textArea,
  fileUpload,
  defaultTogglerClose,
  withToggler,
  id,
  label,
  value,
  icon,
  alt,
  type,
  placeholder,
  rootClassName,
  subRootClassName,
  className,
  ...rest
}) => {
  return (
    <div
      className={`custom-form-control normalized${
        rootClassName ? " " + rootClassName : ""
      }${withToggler ? " with-toggler" : ""}`}
    >
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      <div
        className={`input d-flex align-items-start justify-content-between${
          subRootClassName ? " " + subRootClassName : ""
        }`}
      >
        {textArea ? (
          <textarea
            {...rest}
            className={`custom-input${className ? " " + className : ""}`}
            id={id}
            value={value}
            placeholder={placeholder || ""}
          />
        ) : fileUpload ? (
          <div className="file-uploader">
            <label htmlFor="file-upload"></label>
            <input type="file" name="" id="file-upload" />

            <div className="text-center text">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="./assets/vectors/clip.svg"
                  className="me-3"
                  alt="clip"
                />
                <div className="text-inter fw-600">
                  Drop your file here, or{" "}
                  <span className="text-blue">Browse</span>
                </div>
              </div>
              <div className="text-light-6 text-inter mt-1">Max size 10MB</div>
            </div>
          </div>
        ) : (
          <input
            {...rest}
            className={`custom-input${className ? " " + className : ""}`}
            type={type || "text"}
            id={id}
            value={value}
            placeholder={placeholder || ""}
          />
        )}

        {icon && <img className="icon" src={`./assets/${icon}`} alt={alt} />}

        {withToggler && (
          <div className="options">
            <label className="switch">
              <input type="checkbox" defaultChecked={!defaultTogglerClose} />
              <span className="slider round"></span>
            </label>
            <button className="btn delete">
              <img src="./assets/vectors/bin.svg" alt="bin" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
