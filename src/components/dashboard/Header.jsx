import React, { useState, useEffect } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../login/auth';
import Modal from './Modal';

export default function Header(props) {
    // console.log("header props", props)
    const [header, setHeader] = useState('');
    const [faq, setFaq] = useState(false);
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"))
    console.log("header", user.name)
    const handleLogOut = () => {
        localStorage.removeItem("user");
        navigate("/");

    }

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        switch (props.heading) {
            case "/dashboard":
                setHeader("Dashboard");
                setFaq(false)
                break;
            case "/myprogram":
                setHeader("My Program");
                setFaq(false)
                break;
            case "/setting":
                setHeader("My Settings");
                setFaq(false)
                break;
            case "/managecard":
                setHeader("My Settings");
                setFaq(false)
                break;
            case "/changepassword":
                setHeader("My Settings");
                setFaq(false)
                break;
            case "/notificationsettings":
                setHeader("My Settings");
                setFaq(false)
                break;
            case "/faq":
                setFaq(true);
                break;
            default:
                setHeader("");
                break;
        }
    }, [props.heading]);

    return (
        <>

            <div className="col-md-6 wrapper-header-left pt-4">
                {faq === true ? <div className="col-md-6 wrapper-header-left pt-4">
                    <div className="back-button">
                        <a onClick={handleGoBack}><img src="images/back-button.svg" /><span
                            className="back-button-text ms-2">Back</span></a>
                    </div>
                </div> : (
                    <>
                        <h2>{header}</h2>
                        <p>Lorem ipsum is simple dummy text of the printing and typesetting industry.</p>
                    </>
                )}

            </div>


            <div className="col-md-6 wrapper-header-right pt-4 d-flex justify-content-lg-end">
                <nav className="navbar navbar-expand-md navbar-light pe-4">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <div className="sidebar d-block d-md-none px-4">
                            <button className="navbar-toggler close-navbar" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <img src="images/close-button.svg"
                                    className="img-fluid close-button-img" />
                            </button>

                            <div className="sidebar-brand text-center pt-5">
                                <img src="images/logo.png" alt="logo" />
                            </div>

                            <div className="sidebar-content">
                                <div className="sidebar-admin pt-5">
                                    <div className="admin-profile text-center">
                                        <img src="images/admin-profile.png"
                                            className="admin-sidebar-img" />
                                        <h4 className="admin-name text-light">{user.name}</h4>
                                        <p className="admin-mail">{user.email}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>

                {/* <!-- bell --> */}
                <div className="bell-main">
                    <div className="bell pe-5">
                        <a href="#" className="bell-icon" data-bs-toggle="modal"
                            data-bs-target="#exampleModal7"><img src="images/bell-icon.svg" /></a>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal7" tabIndex="-1"
                            aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog modal-dialog-centered">
                                <div className="modal-content p-4">
                                    <a className="" data-bs-dismiss="modal" aria-label="Close"><img
                                        src="images/close-button.svg"
                                        className="img-fluid close-button-img" /></a>
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Notifications</h5>
                                        <p className="modal-title view-all">View All</p>
                                    </div>
                                    <div className="modal-body">
                                        <div className="notofication-msg-main">
                                            <div className="notofication-msg d-flex align-items-center mb-3">
                                                <div className="not-msg-text">
                                                    <h6 className="pb-2">Lorem Ipsom is simple dummy text of the
                                                        printing and typesetting industry.</h6>
                                                    <p className="minutes">12 Minutes ago</p>
                                                </div>
                                                <div className="not-msg-icon">
                                                    <img src="images/celender-icon.svg"
                                                        className="img-fluid celender-icon-img" />
                                                </div>
                                                <div className="not-msg-more ps-3">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </div>
                                            </div>
                                            <div className="notofication-msg d-flex align-items-center mb-3">
                                                <div className="not-msg-text">
                                                    <h6 className="pb-2">Lorem Ipsom is simple dummy text of the
                                                        printing and typesetting industry.</h6>
                                                    <p className="minutes">12 Minutes ago</p>
                                                </div>
                                                <div className="not-msg-icon">
                                                    <img src="images/massage-icon.svg"
                                                        className="img-fluid celender-icon-img" />
                                                </div>
                                                <div className="not-msg-more ps-3">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </div>
                                            </div>
                                            <div className="notofication-msg d-flex align-items-center mb-3">
                                                <div className="not-msg-text">
                                                    <h6 className="pb-2">Lorem Ipsom is simple dummy text of the
                                                        printing and typesetting industry.</h6>
                                                    <p className="minutes">12 Minutes ago</p>
                                                </div>
                                                <div className="not-msg-icon">
                                                    <img src="images/massage-icon.svg"
                                                        className="img-fluid celender-icon-img" />
                                                </div>
                                                <div className="not-msg-more ps-3">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </div>
                                            </div>
                                            <div className="notofication-msg d-flex align-items-center mb-3">
                                                <div className="not-msg-text">
                                                    <h6 className="pb-2">Lorem Ipsom is simple dummy text of the
                                                        printing and typesetting industry.</h6>
                                                    <p className="minutes">12 Minutes ago</p>
                                                </div>
                                                <div className="not-msg-icon">
                                                    <img src="images/celender-icon.svg"
                                                        className="img-fluid celender-icon-img" />
                                                </div>
                                                <div className="not-msg-more ps-3">
                                                    <i className="fa-solid fa-ellipsis"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Modal /> */}
                    </div>
                </div>
                {/* <!-- question --> */}
                <div className="question">
                    <Link to="/faq"><img src="images/question-mark.svg" className="question-img" /></Link>
                </div>
                {/* <!-- admin-profile --> */}
                <div className="admin-profile ps-5">
                    <a href="#" className="d-flex align-items-center dropdown-toggle" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="images/admin-profile.png" className="admin-border-img" />
                        <h4 className="admin-name ps-2">{user.name}</h4>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div className="dropdown p-4">
                            <div className="dropdown-header">
                                <h5 className="dropdown-title mb-3">My Profile</h5>
                                <a className="" data-bs-dismiss="modal" aria-label="Close"><img
                                    src="images/close-button.svg"
                                    className="img-fluid close-button-img" /></a>
                                <ul>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"><img
                                            src="images/edit-profile.svg"
                                            className="img-fluid edit-profile-img pe-3" />Edit Profile</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img
                                            src="images/change-password.svg"
                                            className="img-fluid change-password-icon pe-3" />Change
                                            Password</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><img
                                            src="images/notification-setting.svg"
                                            className="img-fluid notification-setting-icon pe-3" />Notification
                                            Setting</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={() => handleLogOut()}><img src="images/logout.svg"
                                            className="img-fluid logout-icon pe-3" />Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




        </>


    )
}
