import React from "react";
import { Link } from "react-router-dom";
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
                id="name"
                label="Full name"
                value="Catherine Shaw"
                icon="vectors/user.svg"
                alt="user"
              />
              <SignupInput
                id="email"
                label="Email"
                type="email"
                value="catherine.shaw@gmail.com"
                icon="vectors/mail.svg"
                alt="email"
              />
              <SignupInput
                id="password"
                label="Password"
                type="password"
                placeholder="Start typing.."
                icon="vectors/lock.svg"
                alt="lock"
              />

              <div className="tos">
                <div className="radio-container">
                  <label className="custom-radio">
                    I agree with terms &amp; conditions
                    <input type="radio" checked="checked" name="gender" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>

              <div className="text-center text-sm-start">
                <Link to="signup-2" className="btn btn-primary mt-4">
                  Signup
                </Link>
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
                <div className="text-light-2 fs-14">Sign up with</div>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="./assets/vectors/auth-right-1.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
