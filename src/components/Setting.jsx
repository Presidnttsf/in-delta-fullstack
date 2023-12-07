import React from 'react'

export default function Setting() {
    return (
        <div className="row edit-profile-row">
            <div className="edit-profile-main d-flex">
                <div className="setting-left-pannel">
                    <div className="setting-left-pannel-inner py-5 ps-5">
                        <ul className="pt-lg-5">
                            <li className="pb-5">
                                <a href="setting.html" className="active">
                                    <i className="fa-solid fa-user-pen px-3" />
                                    <span>Edit Profile</span>
                                </a>
                            </li>
                            <li className="pb-5">
                                <a href="change-password.html">
                                    <i className="fa-solid fa-lock px-3" />
                                    <span>Change Password</span>
                                </a>
                            </li>
                            <li className="pb-5">
                                <a href="manage-card.html">
                                    <i className="fa-solid fa-lock px-3" />
                                    <span>Manage Card</span>
                                </a>
                            </li>
                            <li className="pb-5">
                                <a href="notification.html">
                                    <i className="fa-solid fa-lock px-3" />
                                    <span>Notification</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row setting-right-pannel-inner align-items-center">
                    {/* Setting_heading */}
                    <div className="setting-heading pt-5 ps-5">
                        <h3 className="dash-heading pt-3 pb-5">Edit Profile</h3>
                    </div>
                    <div className="col-lg-6 px-5">
                        {/* Profile */}
                        <div className="change-profile-pic mb-4">
                            <img
                                src="images/admin-profile.png"
                                className="admin-profile-img"
                            />
                            <img src="images/choose-img.jpg" className="choose-img" />
                        </div>
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
                                    src="images/log-profile.svg"
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
                        {/* update-btn */}
                        <div className="main-btn text-center">
                            <a href="#">Update</a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5">
                        <h3 className="dash-heading py-3">Interested Categories</h3>
                        <p>Lorem ipsum is simple dummy text that can be used that can be</p>
                        <div className="row interested-categories mt-4 text-center">
                            <div className="col-lg-3">
                                <div className="interesteimages mx-auto">
                                    <input type="checkbox" id="myCheckbox1" />
                                    <label htmlFor="myCheckbox1">
                                        <img src="images/category/category1.png" />
                                    </label>
                                </div>
                                <p className="cat-text pt-2">category</p>
                            </div>
                            <div className="col-lg-3">
                                <div className="interesteimages mx-auto">
                                    <input type="checkbox" id="myCheckbox2" />
                                    <label htmlFor="myCheckbox2">
                                        <img src="images/category/category1.png" />
                                    </label>
                                </div>
                                <p className="cat-text pt-2">category</p>
                            </div>
                            <div className="col-lg-3">
                                <div className="interesteimages mx-auto">
                                    <input type="checkbox" id="myCheckbox3" />
                                    <label htmlFor="myCheckbox3">
                                        <img src="images/category/category1.png" />
                                    </label>
                                </div>
                                <p className="cat-text pt-2">category</p>
                            </div>
                        </div>
                        <p className="mt-4 select-text">
                            Select More <a href="#">Click here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}