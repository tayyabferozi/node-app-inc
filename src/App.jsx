function App() {
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
              <div className="custom-form-control">
                <label htmlFor="name" className="text-light-1">
                  Full name
                </label>
                <div className="input">
                  <input
                    className="custom-input"
                    type="text"
                    id="name"
                    value="Catherine Shaw"
                  />
                  <img src="./assets/vectors/user.svg" alt="user" />
                </div>
              </div>
              <div className="custom-form-control">
                <label htmlFor="email" className="text-light-1">
                  Email
                </label>
                <div className="input">
                  <input
                    className="custom-input"
                    type="text"
                    id="email"
                    value="catherine.shaw@gmail.com"
                  />
                  <img src="./assets/vectors/mail.svg" alt="mail" />
                </div>
              </div>
              <div className="custom-form-control">
                <label htmlFor="password" className="text-light-1">
                  Password
                </label>
                <div className="input">
                  <input
                    className="custom-input"
                    type="text"
                    id="password"
                    placeholder="Start typing..."
                  />
                  <img src="./assets/vectors/lock.svg" alt="lock" />
                </div>
              </div>

              <div className="tos">
                <div class="radio-container">
                  <label class="custom-radio">
                    I agree with terms &amp; conditions
                    <input type="radio" checked="checked" name="gender" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>

              <button className="btn btn-primary mt-4">Signup</button>
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
          <div className="main"></div>
        </div>
      </div>
    </>
  );
}

export default App;
