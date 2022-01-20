const SignupInput = ({
  id,
  label,
  value,
  icon,
  alt,
  type,
  placeholder,
  inputClassName,
  ...rest
}) => {
  return (
    <div className="custom-form-control">
      <label htmlFor={id} className="text-light-1">
        {label}
      </label>
      <div className="input">
        <input
          {...rest}
          className={`custom-input ${inputClassName && inputClassName}`}
          type={type || "text"}
          id={id}
          value={value}
          placeholder={placeholder || ""}
        />

        {icon && <img className="icon" src={`./assets/${icon}`} alt={alt} />}
      </div>
    </div>
  );
};

export default SignupInput;
