const SignupInput = ({ id, label, value, icon, alt, type, placeholder }) => {
  return (
    <div className="custom-form-control">
      <label htmlFor={id} className="text-light-1">
        {label}
      </label>
      <div className="input">
        <input
          className="custom-input"
          type={type || "text"}
          id={id}
          value={value}
          placeholder={placeholder || ""}
        />

        {icon && <img src={`./assets/${icon}`} alt={alt} />}
      </div>
    </div>
  );
};

export default SignupInput;
