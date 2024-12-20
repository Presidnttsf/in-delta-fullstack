import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../dashboard/Modal';
import { UserContext } from '../../UserContext';

const OtpGenerate = () => {

  const { setPerson } = useContext(UserContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: ' ',
    email: ' ',
    mobile: "",
    password: ' ',
  });


  function handleChange(e) {
    const { name, value } = e.target;
    if (/^\d{0,10}$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  }


  const closeModal = () => {
    setShowModal(false);
  };

  function handleSendOtp(e) {

    const { name, email, mobile, password } = formData;
    if (!mobile) {
      setShowModal(true)
      setMessage(`Mobile number required`)
      return;
    }

    if (mobile.length !== 10) {
      setShowModal(true)
      setMessage(`Number should be 10 digits`)
      return;
    }

    const userData = { name, email, mobile, password };
    try {
      // localStorage.setItem('user', JSON.stringify(userData));
      console.log("userdata", userData)

      setPerson(userData);

      setMessage("Sign-up successful! Please log in.");
      setShowModal(true);

      // Redirect to login after a delay
      setTimeout(() => navigate('/otpverify'), 1000);
    } catch (error) {
      setMessage("An error occurred during sign-up. Please try again.");
      setShowModal(true);
    }

  }


  return (
    <div className="main-log login-page">
      {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
      <div className="log-container">
        <div className="row align-items-center me-lg-5">
          <div className="col-lg-8">
            <div className="log-left pe-lg-5 pt-lg-5">
              <img
                src="images/log-create-acc-bg.png"
                className="img-fluid log-bg-img"
                alt="Background"
              />

              <div className="login-logo">
                <img
                  src="images/log-logo.svg"
                  className="img-fluid log-logo"
                  alt="Logo"
                />
              </div>
              <div style={{ textAlign: "right" }}>
                <strong style={{ color: "red", fontSize: "large", opacity: "40%" }}>
                  Tauseef Akhtar
                </strong>
              </div>
              <div className="log-back-button">
                <Link to="/">
                  <img
                    src="images/back-button.svg"
                    alt="Back"
                  />
                  <span className="log-back-button-text ps-2">Back</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="log-right ps-lg-4">

              <h3 className="log-heading pb-3">Login with OTP</h3>
              <h6 className="log-para pb-4">
                Lorem ipsum is simple dummy text that can help.
              </h6>

              {/* Name */}
              <div className="log-group">
                <div className="log-group-input">
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    placeholder="90XXXXXX36"
                    value={formData.mobile}
                    onChange={handleChange}
                    pattern="\d{10}" // Regex pattern to allow only 10 digits
                    maxLength={10} // Restrict maximum characters to 10
                    required
                  />
                </div>
                <div className="log-group-icon">
                  <img
                    src="images/redphone.png"
                    className="img-fluid"
                    alt="Profile Icon"
                  />
                </div>
              </div>

              {/* send otp Button */}
              <div className="main-btn text-centern">
                <button style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  height: "40px",
                  width: "100%",
                }} onClick={handleSendOtp}>Send OTP</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default OtpGenerate




