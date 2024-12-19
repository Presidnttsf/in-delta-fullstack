import React from 'react'
import { Link } from 'react-router-dom'
const OtpGenerate = () => {
  return (
    <div className="main-log login-page">
      <div className="log-container">
        <div className="row align-items-center me-lg-5">
          <div className="col-lg-8">
            <div className="log-left pe-lg-5 pt-lg-5">
              <img
                src="images/log-opt-genrate-bg.png"
                className="img-fluid log-bg-img"
              />
              <div className="login-logo">
                <img
                  src="images/log-logo.svg"
                  className="img-fluid log-logo"
                />
              </div>
              {/* log-back-button */}
              <div className="log-back-button">
                <Link to="/">
                  <img src="images/back-button.svg" />
                  <span className="log-back-button-text ps-2">Back</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="log-right ps-lg-4">
              <h3 className="log-heading pb-3">OTP Varification</h3>
              <h6 className="log-para pb-4">
                Lorem ipsom is simple dummy text that can help that can ber
              </h6>
              {/* otp-varification */}
              <div className="log-verify mb-4">
                <div className="row">
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        placeholder={4}
                      />
                    </div>
                  </div>
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        placeholder={5}
                      />
                    </div>
                  </div>
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        placeholder={6}
                      />
                    </div>
                  </div>
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* create-an-acc */}
              <div className="create-account pb-4">
                <a href="login.html">
                  Didn't Receive OTP? <span>Resend OTP</span>
                </a>
              </div>
              {/* main-btn */}
              <div className="main-btn text-center">
                <a href="interested-categories.html">Verify</a>
              </div>
              {/* create-an-acc */}
              <div className="create-account text-center pt-4">
                <Link>
                  Want to Change Email? <span>Click here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="images/login-bg/loging-right-shape.svg"
        className="img-fluid log-bottom-bg"
      />
    </div>

  )
}

export default OtpGenerate