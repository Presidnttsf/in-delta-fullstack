import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../dashboard/Modal';



const OtpVerify = () => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [userOtp, setUserOtp] = useState(["", "", "", ""]);



  useEffect(() => {
    // Generate a random number between 1000 and 9999 (inclusive)
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp)
    setShowModal(true)
    setMessage(`Your OTP is: ${otp}`); // Example usage


  }, [])

  const handleInputChange = (index, value) => {
    if (value.length > 1) return; // Prevent entering more than 1 digit
    const newOtp = [...userOtp];
    newOtp[index] = value;
    setUserOtp(newOtp);
  };

  const verifyOtp = () => {
    const enteredOtp = userOtp.join(""); // Combine the digits
    if (enteredOtp === generatedOtp) {
      setMessage("OTP Verified Successfully!");
      setTimeout(() => navigate("/dashboard"), 1000); // Example navigation
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const resendOtp = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    // setGeneratedOtp(newOtp);
    // console.log("Resent OTP:", newOtp);
    setShowModal(true)
    setMessage(`A new OTP has been sent!`);
  };


  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main-log login-page">
      {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
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
                <Link to="/otpgenerate">
                  <img src="images/back-button.svg" />
                  <span className="log-back-button-text ps-2">Back</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="log-right ps-lg-4">
              <h3 className="log-heading pb-3">OTP Verification</h3>
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
                        value={userOtp[0]}
                        onChange={(e) => handleInputChange(0, e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        value={userOtp[1]}
                        onChange={(e) => handleInputChange(1, e.target.value)}

                      />
                    </div>
                  </div>
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        value={userOtp[2]}
                        onChange={(e) => handleInputChange(2, e.target.value)}

                      />
                    </div>
                  </div>
                  <div className="col-3 pe-4">
                    <div className="resend-input">
                      <input
                        type="text"
                        className="form-control"
                        maxLength={1}
                        value={userOtp[3]}
                        onChange={(e) => handleInputChange(3, e.target.value)}

                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* create-an-acc */}
              <div className="create-account pb-4">
                <a>
                  Didn't Receive OTP? <span onClick={resendOtp}>Resend OTP</span>
                </a>
              </div>
              {/* main-btn */}
              <div className="main-btn text-center">
                <a onClick={verifyOtp}>Verify and Login</a>
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

export default OtpVerify