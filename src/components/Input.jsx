const Input = ({
  textArea,
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
        className={`input d-flex justify-content-between${
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

        {icon && <img src={`./assets/${icon}`} alt={alt} />}
        {withToggler && (
          <label className="switch">
            <input type="checkbox" defaultChecked={!defaultTogglerClose} />
            <span className="slider round"></span>
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;
