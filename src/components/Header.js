import React from 'react'

export default function Header() {
    return (

        <header className="main-wrapper-header">
            <div className="row">
                <div className="col-md-6 wrapper-header-left pt-4">
                    <h2>Dashboard</h2>
                    <p>Lorem ipsum is simple dummy text of the printing and type setting industry.</p>
                </div>
                <div className="col-md-6 wrapper-header-left d-none pt-4">
                    <div className="back-button">
                        <a href="#"><img src="images/back-button.svg" /><span
                            className="back-button-text ms-2">Back</span></a>
                    </div>
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
                                            <h4 className="admin-name text-light">John Doe</h4>
                                            <p className="admin-mail">john.doe@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="sidebar-tab pt-5">
                                        <div className="nav flex-column nav-pills me-4" id="v-pills-tab"
                                            role="tablist" aria-orientation="vertical">
                                            <button className="nav-link mb-3 active" id="v-pills-home-tab"
                                                data-bs-toggle="pill" data-bs-target="#v-pills-home"
                                                type="button" role="tab" aria-controls="v-pills-home"
                                                aria-selected="true">
                                                <img src="images/side-bar/dashboard-icon.svg"
                                                    alt="Dashbord" className="pe-2" />
                                                <h6>Dashbord</h6>
                                            </button>

                                            <button className="nav-link mb-3" id="v-pills-profile-tab"
                                                data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                                                type="button" role="tab" aria-controls="v-pills-profile"
                                                aria-selected="false">
                                                <img src="images/side-bar/my-programs-icon.svg"
                                                    alt="Dashbord" className="pe-2" />
                                                <h6>My Programs</h6>
                                            </button>

                                            <button className="nav-link mb-3" id="v-pills-messages-tab"
                                                data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                                                type="button" role="tab" aria-controls="v-pills-messages"
                                                aria-selected="false">
                                                <img src="images/side-bar/setting-icon.svg"
                                                    alt="Dashbord" className="pe-2" />
                                                <h6>Settings</h6>
                                            </button>
                                        </div>
                                    </div>

                                    <nav className="sidebar-menu pt-4 pb-5 ps-3">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">How it Works</a></li>
                                            <li><a href="#">Resources and articles</a></li>
                                            <li><a href="login.html">Logout</a></li>
                                        </ul>
                                    </nav>

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
                            <div className="modal fade" id="exampleModal7" tabindex="-1"
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
                        </div>
                    </div>
                    {/* <!-- question --> */}
                    <div className="question">
                        <a href="faq.html"><img src="images/question-mark.svg" className="question-img" /></a>
                    </div>
                    {/* <!-- admin-profile --> */}
                    <div className="admin-profile ps-5">
                        <a href="#" className="d-flex align-items-center dropdown-toggle" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="images/admin-profile.png" className="admin-border-img" />
                            <h4 className="admin-name ps-2">John Doe</h4>
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
                                            <a className="nav-link" href="#"><img src="images/logout.svg"
                                                className="img-fluid logout-icon pe-3" />Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </header>




    )
}
