import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from '../dashboard/Modal';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';


export default function Login() {

    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });
    // const user = JSON.parse(localStorage.getItem("user")); //when using local storage
    const { person } = useContext(UserContext)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleLogin = (event) => {
        event.preventDefault();
        const { email, password } = formData;

        if (!email) {
            setMessage("Email cannot be empty!");
            setShowModal(true);
            return;
        }

        if (!password) {
            setMessage("Password cannot be empty!");
            setShowModal(true);
            return;
        }

        if (!person) {
            setMessage("No user found. Please create an account!");
            setShowModal(true);
            return;
        }



        if (email === person.email && password === person.password) {
            setMessage("Login successful!");
            setShowModal(true);
            navigate("/dashboard");
        } else {
            setMessage("Invalid credentials!");
            setShowModal(true);
        }
    };
    function handleOtp() {
        navigate("/otpgenerate")

    }


    const closeModal = () => {
        setShowModal(false);
    };

    const handleCreate = () => {
        navigate("/signup"); // Redirect to signup
    };


    return (
        <>
            <div className="main-log login-page">
                {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
                <div className="log-container">
                    <div className="row align-items-center me-lg-5">
                        <div className="col-lg-8">
                            <div className="log-left pe-lg-5">
                                <img
                                    src="images/login-bg.png"
                                    className="img-fluid log-bg-img" alt="login"
                                />

                                <div className="login-logo">
                                    <img
                                        src="images/log-logo.svg"
                                        className="img-fluid log-logo"
                                        alt='logo'
                                    /> <br />

                                    <a href=""> <strong style={{ color: "red", fontSize: "large", opacity: "20%" }}>
                                        Tauseef Akhtar                                     </strong>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <form onSubmit={(e) => handleLogin(e)}>
                                <div className="log-right ps-lg-5">
                                    <h3 className="log-heading pb-3">Log In to Your Account</h3>
                                    <h6 className="log-para pb-5">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia id hpihoi hoioiboijb
                                    </h6>
                                    {/* Mail */}
                                    <div className="log-group">
                                        <div className="log-group-input">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="john.doe@gmail.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="log-group-icon">
                                            <img
                                                src="images/log-msg-icon.svg"
                                                className="img-fluid"
                                                alt='logo'
                                            />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="log-group ms-2">
                                        <div className="log-group-input">
                                            <input
                                                type="password"
                                                name="password"
                                                id="password"
                                                placeholder="**********"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                            />
                                        </div>

                                        <div className="log-group-icon">
                                            <img
                                                src="images/log-pass-icon.svg"
                                                className="img-fluid"
                                                alt='logo'
                                            />

                                        </div>
                                    </div>
                                    {/* keep-me-login */}
                                    <div className="d-flex align-items-center log-keep pb-5">
                                        <label htmlFor="keep" className="check-101 logkeep-check">
                                            <input type="checkbox" id="keep" name="keep" />
                                            <span className="check-span-101" />
                                            <span className="check-text-101 ps-2">Keep me logged in</span>
                                        </label>

                                        <div className="log-forgot ms-auto">
                                            <Link to="/forgetpassword" className="log-forgot-text">
                                                Forgot Password
                                            </Link>
                                        </div>

                                    </div>
                                    {/* main-btn */}
                                    <div className="main-btn text-center">

                                        <button type="submit" style={{
                                            background: "none",
                                            border: "none",
                                            color: "white",
                                            height: "40px",
                                            width: "100%",
                                        }} >Login</button>
                                    </div>

                                    <div className="main-btn text-center otp-btn">

                                        <button onClick={handleOtp} style={{
                                            background: "none",
                                            border: "none",
                                            color: "white",
                                            height: "40px",
                                            width: "100%",

                                        }} >Login with OTP</button>
                                    </div>


                                    <p className="log-or text-center pt-4">Or</p>



                                    {/* log-social */}

                                    <div className="log-social d-flex align-items-center justify-content-center pt-5">
                                        <div className="log-social-icon px-3">
                                            <img
                                                src="images/login/log_google.png"
                                                className="img-fluid log-social-img"
                                                alt='logo'
                                            />
                                        </div>
                                        <div className="log-social-icon px-3">
                                            <img
                                                src="images/login/log_facebook.png"
                                                className="img-fluid log-social-img"
                                            />
                                        </div>
                                        <div className="log-social-icon px-3">
                                            <img
                                                src="images/login/log_apple.png"
                                                className="img-fluid log-social-img"
                                                alt='logo'
                                            />
                                        </div>
                                        <div className="log-social-icon px-3">
                                            <img
                                                src="images/login/log_apple.png"
                                                className="img-fluid log-social-img"
                                                alt='logo'
                                            />
                                        </div>
                                    </div>
                                    {/* create-an-acc */}
                                    <div className="create-account text-center pt-4">
                                        Not registered yet? <span onClick={handleCreate}>Create an Account</span>

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <img
                    src="images/login-bg/loging-right-shape.svg"
                    className="img-fluid log-bottom-bg"
                    alt='logo'
                />
                <div className="log-container">
                    <div className="row">
                        <div className="col-lg-8" />
                        <div className="col-lg-4">
                            <p className="footer-copyright py-3 text-center">
                                Indelta International © Copyright 2023 This website is made by <strong>Mr. Tauseef Akhtar</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
