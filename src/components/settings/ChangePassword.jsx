import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import SettingsLeftBar from './SettingsLeftBar';

export default function ChangePassword() {



    return (
        <div className="row edit-profile-row">
            <div className="edit-profile-main d-flex">

                <div className="row setting-right-pannel-inner">
                    {/* Setting_heading */}
                    <div className="setting-heading pt-5 ps-5">
                        <h3 className="dash-heading pt-3 pb-5">Change Password</h3>
                    </div>
                    <div className="col-lg-6 px-5">
                        {/* Password */}
                        <div className="log-group">
                            <div className="log-group-input">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                />
                            </div>
                            <div className="log-group-icon">
                                <img src="images/change-password.svg" className="img-fluid" />
                            </div>
                        </div>
                        {/* Password */}
                        <div className="log-group">
                            <div className="log-group-input">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                />
                            </div>
                            <div className="log-group-icon">
                                <img src="images/change-password.svg" className="img-fluid" />
                            </div>
                        </div>
                        {/* Password */}
                        <div className="log-group">
                            <div className="log-group-input">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="log-group-icon">
                                <img src="images/change-password.svg" className="img-fluid" />
                            </div>
                        </div>
                        {/* update-btn */}
                        <div className="main-btn text-center">
                            <a href="#">Update</a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5"></div>
                </div>
            </div>
        </div>
    )
}
