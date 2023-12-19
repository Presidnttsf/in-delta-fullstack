import React from 'react'
import { isAuthenticated } from './auth';

export default function Login({ navigate }) {

    const handleLogin = (event) => {
        event.preventDefault();

        const user = {
            email: event.target.querySelector('[name="email"]').value,
            password: event.target.querySelector('[name="cvv"]').value,
        };

        if (isAuthenticated()) {
            // User is already authenticated, handle accordingly (e.g., redirect to home)
            navigate("/");
        } else {
            // User is not authenticated, perform authentication logic
            // For simplicity, let's assume a basic authentication check
            const isValidUser = user.email === "presidnttsf@gmail.com" && user.password === "123";

            if (isValidUser) {
                // Authentication successful, store user info and redirect
                localStorage.setItem("user", JSON.stringify(user));
                navigate("/");
            } else {
                // Authentication failed, show error or take appropriate action
                alert("Invalid username and password");
            }
        }
    };




    return (

        <div className="main-log login-page">
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
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <form onSubmit={(event) => handleLogin(event)}>
                            <div className="log-right ps-lg-5">
                                <h3 className="log-heading pb-3">Log In to Your Account</h3>
                                <h6 className="log-para pb-5">
                                    Lorem Ipsom is simple dummy text that be used that can be
                                </h6>
                                {/* Mail */}
                                <div className="log-group">
                                    <div className="log-group-input">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="john.doe@gmail.com"
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
                                            name="cvv"
                                            id="cvv"
                                            placeholder="**********"
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
                                        <a to="/forgetpassword" className="log-forgot-text">
                                            Forgot Password
                                        </a>
                                    </div>
                                </div>
                                {/* main-btn */}
                                <div className="main-btn text-center">

                                    <button type="submit" style={{
                                        background: "none",
                                        border: "none",
                                        color: "white",
                                        height: "40px",
                                        width: "100%"
                                    }} >Login</button>
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
                                </div>
                                {/* create-an-acc */}
                                <div className="create-account text-center pt-4">
                                    <a href="create-account.html">
                                        Not registered yet? <span>Creare an Account</span>
                                    </a>
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
                            Indelta International © Copyright 2022
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
