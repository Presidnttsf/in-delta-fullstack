import React from 'react';


export default function LeftSideBar() {
    return (
        <div className="sidebar px-5 d-none d-md-block">

            <div className="sidebar-brand text-center pt-5">
                <img src="images/logo.png" alt="Logo" className="pt-3" />
            </div>

            <div className="sidebar-content">
                <div className="sidebar-admin pt-5 pb-md-4">
                    <div className="admin-profile text-center pt-3">
                        <img src="images/sidebar-admin-profile.png" alt="Admin" />
                        <h4 className="admin-name text-light pt-2">John Doe</h4>
                        <p className="admin-mail">john.doe@gmail.com</p>
                    </div>
                </div>

                <div className="sidebar-tab pt-5">
                    <ul>
                        <li className="nav-link mb-4 active">
                            <a href="dashboard.html" className="d-flex">
                                <div className="dash-icon"><img src="images/side-bar/dashboard-icon.svg" alt="Dashboard" className="pe-2" /></div>
                                <div className="dash-title"><h6>Dashboard</h6></div>
                            </a>
                        </li>
                        <li className="nav-link mb-4">
                            <a href="my-program.html" className="d-flex">
                                <div className="dash-icon"><img src="images/side-bar/my-programs-icon.svg" alt="My Programs" className="pe-2" /></div>
                                <div className="dash-title"><h6>My Programs</h6></div>
                            </a>
                        </li>
                        <li className="nav-link mb-4">
                            <a href="setting.html" className="d-flex">
                                <div className="dash-icon"><img src="images/side-bar/setting-icon.svg" alt="Settings" className="pe-2" /></div>
                                <div className="dash-title"><h6>Settings</h6></div>
                            </a>
                        </li>
                    </ul>
                </div>

                <nav className="sidebar-menu pt-4 pb-5 ps-3">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">How it Works</a></li>
                        <li><a href="#">Resources and Articles</a></li>
                        <li><a href="login.html">Logout</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    );
}
