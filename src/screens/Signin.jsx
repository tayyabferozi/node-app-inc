import React from "react";
import SignupInput from "../components/SignupInput";

const SignUp = () => {
  return (
    <>
      <div id="signup" className="step-1">
        <div className="left">
          <div className="main">
            <h1>
              Node. <br />
              Let's Sign In
            </h1>
            <p className="text-light-1 mt-3">
              Enter your details to proceed further
            </p>

            <form action="" className="form">
              <SignupInput
                id="email"
                label="Email"
                type="email"
                value="john.doe@gmail.com"
              />
              <SignupInput
                id="password"
                label="Password"
                type="password"
                placeholder="Start typing.."
              />

              <div className="remember d-flex justify-content-between align-items-start align-items-sm-center flex-column flex-sm-row mb-sm-0 mb-4">
                <div className="radio-container">
                  <label className="custom-radio">
                    Remember me
                    <input type="radio" checked="checked" name="gender" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <a href="#0" className="fw-500 mt-sm-0 mt-3">
                  Recover password
                </a>
              </div>

              <div className="text-center text-sm-left">
                <button className="btn btn-primary mt-4">Signin</button>
              </div>
            </form>

            <div className="social d-flex align-items-center">
              <button className="btn">
                <img src="./assets/vectors/twitter.svg" alt="twitter" />
              </button>
              <button className="btn">
                <img src="./assets/vectors/google.svg" alt="google" />
              </button>
              <button className="btn">
                <img src="./assets/vectors/fb.svg" alt="fb" />
              </button>
              <button className="btn">
                <div className="text-light-2 fs-14">Or sign in with</div>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="./assets/vectors/auth-right-3.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
