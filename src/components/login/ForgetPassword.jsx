import React, { useContext, useState } from 'react'
import Modal from '../dashboard/Modal'
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export default function ForgetPassword() {

    const navigate = useNavigate();
    const { person, setPerson } = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    };


    function handleSubmit() {

        const { email, password } = formData;
        if (!email) {
            setMessage("Email cannot be empty!");
            setShowModal(true);
            return;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage("Please enter a valid email address!");
            setShowModal(true);
            return;
        }
        if (!password) {
            setMessage("password cannot be empty!");
            setShowModal(true);
            return;
        }

        if (password.length < 6) {
            setMessage("Password should be greater than 6 digit")
            setShowModal(true);
            return;
        }

        if (person && person.email === email) {
            // Update the password in the context
            const updatedPerson = { ...person, password };
            setPerson(updatedPerson);

            setMessage(`Password reset successfully for ${email}.`);
            setShowModal(true);
            setTimeout(() => navigate('/'), 1000);


        } else {
            setMessage("No account associated with this email.");
            setShowModal(true);
        }
    }



    const closeModal = () => {
        setShowModal(false);
    };
    console.log('formData:', formData);
    return (
        <div className="main-log login-page">
            {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
            <div className="log-container">
                <div className="row align-items-center me-lg-5">
                    <div className="col-lg-8">
                        <div className="log-left pe-lg-5 pt-lg-5">
                            <img
                                src="images/log-forget-bg.png"
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
                                        name="email"
                                        id="email"
                                        placeholder="john.doe@gmail.com"
                                        onChange={handleChange}
                                        value={formData.email || ""}

                                        required />
                                </div>
                                <div className="log-group-icon">
                                    <img src="images/log-msg-icon.svg" />
                                </div>
                            </div>
                            <div className="log-group">
                                <div className="log-group-input">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="New password"
                                        value={formData.password || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="log-group-icon">
                                    <img
                                        src="images/log-pass-icon.svg"
                                        className="img-fluid"
                                        alt="Password Icon"
                                    />
                                </div>
                            </div>

                            {/* main-btn */}
                            <div className="main-btn text-center">
                                <a onClick={handleSubmit}>Submit</a>
                            </div>
                            {/* create-an-acc */}
                            <div className="create-account text-center pt-4">
                                <Link to="/" href="login.html">
                                    Remember Password? <span>Login</span>
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
