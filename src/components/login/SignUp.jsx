import React, { useEffect, useState } from 'react'
import { isAuthenticated } from './auth';
import { useNavigate } from 'react-router-dom';
import Modal from '../dashboard/Modal';


export default function SignUp() {

  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  let user;
  const handleSignup = (event) => {
    event.preventDefault();

    user = {
      email: event.target.querySelector('[name="email"]').value,
      password: event.target.querySelector('[name="cvv"]').value,
    };


    // User is not authenticated, perform authentication logic
    // For simplicity, let's assume a basic authentication check
    const isValidUser = user.email === "presidnttsf@gmail.com" && user.password === "123";

    if (isValidUser) {
      // Authentication successful, store user info and redirect
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard")
      setShowModal(false);
    } else if (user.email === '') {
      // Authentication failed, show error or take appropriate action

      setShowModal(true);
      setMessage("Email cannot be empty!!!!");


    } else if (user.password === '') {
      setShowModal(true);
      setMessage("Password cannot be empty!!!!");

    } else {
      // alert("Invalid credentials")
      setShowModal(true);
      setMessage("Invalid Credentials !!!!");
    }
    // console.log("showModal:", showModal);
  };

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  function handleLogin() {
    console.log("login clciked")
    navigate("/")
  }

  return (
    <div className="main-log login-page">
      <div className="log-container">
        <div className="row align-items-center me-lg-5">
          <div className="col-lg-8">
            <div className="log-left pe-lg-5 pt-lg-5 pt-lg-5">
              <img
                src="images/log-create-acc-bg.png"
                className="img-fluid log-bg-img"
                alt="acc bg"
              />

              <div className="login-logo">
                <img
                  src="images/log-logo.svg"
                  className="img-fluid log-logo"
                />
              </div>
              <div style={{ textAlign: "right" }}>
                <a href=""> <strong style={{ color: "red", fontSize: "large", opacity: "40%" }}>
                  Tauseef Akhtar                                     </strong>
                </a>
              </div>
              {/* log-back-button */}
              <div className="log-back-button">

                <img onClick={handleLogin} src="images/back-button.svg" />
                <span className="log-back-button-text ps-2" >Back</span>

              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="log-right ps-lg-4">
              {/* two-step */}
              <div className="two-step mb-5">
                <div className="row">
                  <div className="col-6 text-lg-center">
                    <p className="varify-para-one">
                      <span className="varfify-one me-3">1</span>Personal Info
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="varify-para-two">
                      <span className="varfify-two me-3">2</span>Interested
                      Categories
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="log-heading pb-3">Create Your Free Account</h3>
              <h6 className="log-para pb-4">
                Lorem ipsom is simple dummy text that can help that can ber
              </h6>
              {/* Name */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-profile.png"
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* Mail */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="email"
                    id="email"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-msg-icon.svg"
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* Password */}
              <div className="log-group ms-2">
                <div className="log-group-input">
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    placeholder="new password"
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-pass-icon.svg"
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* Password */}
              <div className="log-group ms-2">
                <div className="log-group-input">
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    placeholder="confirm password"
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/log-pass-icon.svg"
                    className="img-fluid"
                  />
                </div>
              </div>
              {/* main-btn */}
              <div className="main-btn text-center">
                <a href="otp-genrate.html">Create an account</a>
              </div>
              {/* create-an-acc */}
              <div className="create-account text-center pt-4">

                Already Registered? <span onClick={handleLogin}>Login</span>

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
