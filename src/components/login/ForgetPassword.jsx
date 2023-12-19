import React from 'react'

export default function ForgetPassword() {



    return (
        <div className="main-log login-page">
            <div className="log-container">
                <div className="row align-items-center me-lg-5">
                    <div className="col-lg-8">
                        <div className="log-left pe-lg-5 pt-lg-5">
                            <img
                                src="./dist/images/log-forget-bg.png"
                                className="img-fluid log-bg-img"
                            />
                            <div className="login-logo">
                                <img
                                    src="./dist/images/log-logo.svg"
                                    className="img-fluid log-logo"
                                />
                            </div>
                            {/* log-back-button */}
                            <div className="log-back-button">
                                <a href="login.html">
                                    <img src="./dist/images/back-button.svg" />
                                    <span className="log-back-button-text ps-2">Back</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="log-right ps-lg-4">
                            <h3 className="log-heading pb-3">Forget Password?</h3>
                            <h6 className="log-para pb-5">
                                We will send you instructions on how to reset your password by
                                email.
                            </h6>
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
                                    <img src="./dist/images/log-msg-icon.svg" />
                                </div>
                            </div>
                            {/* main-btn */}
                            <div className="main-btn text-center">
                                <a href="otp-varification.html">Submit</a>
                            </div>
                            {/* create-an-acc */}
                            <div className="create-account text-center pt-4">
                                <a href="login.html">
                                    Remember Password? <span>Login</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="./dist/images/login-bg/loging-right-shape.svg"
                className="img-fluid log-bottom-bg"
            />
        </div>
    )
}
