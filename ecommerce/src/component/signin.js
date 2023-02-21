import React, { useState } from "react";


export default function (props) {
  let [authMode, setAuthMode] = useState("signin");
  let [active, setActive] = useState(false);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const btnClick = () => {
    setActive(true);
  };

  if (authMode === "signin") {
    return (
      <div className="backGroundImage">
       <div className="text"> <text>Experience Seamless Stock Search Here</text><h1 className="insidetext">Kanini Ticker Platform</h1></div>
        <span>
          
        </span>
        
        <div className="logo"><img alt="company logo here" height="50px" width=""/></div>
        
        <div className="SignIn">
          <form >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">SIGN IN</h3>
              <h6>Welcome back! Please Enter email id and Password</h6> 

              <div className="form-group mt-3">
                <label>Email Id</label>
                <input
                  type="email"
                  required
                  className="form-control mt-1"
                  placeholder="example@kanini.com"
                />
              </div>
              
                <div className="form-group mt-3">
                  <label className="password">Password</label>
                  <input
                    type="password"
                    required
                    className="form-control mt-1"
                    placeholder="***********"
                  />
                </div>
             
         
                <div className="d-grid gap-2 mt-3">
                  <button
                    onClick={btnClick}
                    type="Get-OTP"
                    className="btn btn-primary"
                  >
                    Sign In
                  </button>
                </div>
             
             
              {active && (
                <p className="text-center mt-2">
                  Didn't Receive <a href="#">Re-send?</a>
                </p>
              )}
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}
