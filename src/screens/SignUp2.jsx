import React from "react";
import SignupInput from "../components/SignupInput";

const SignUp = () => {
  return (
    <>
      <div id="signup" className="step-1">
        <div className="left">
          <div className="main">
            <h1>
              Welcome to Node. <br />
              Sign Up to getting started.
            </h1>
            <p className="text-light-1 mt-3">
              Enter your details to proceed further
            </p>

            <form action="" className="form">
              <SignupInput
                id="company"
                label="Company name"
                value="Garage Lelaval"
              />
              <SignupInput
                id="employees"
                label="Employees"
                type="text"
                value="1-10 Employees"
              />
              <SignupInput
                id="enterprise"
                label="Enterprise type"
                type="text"
                value="Automobile workshop"
              />
              <SignupInput
                id="phone"
                label="Phone"
                type="tel"
                placeholder="Start typing..."
              />

              <div className="d-flex flex-sm-row flex-column justifify-content-start mt-5">
                <button className="btn btn-light-blue me-sm-3 me-0 mb-3 mb-sm-0">
                  Back
                </button>
                <button className="btn btn-primary ">Signup</button>
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <img src="./assets/vectors/auth-right-2.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
