import React from 'react'

export default function NotificationSettings() {


    return (
        <div className="row edit-profile-row">
            <div className="edit-profile-main d-flex">

                <div className="setting-right-pannel-inner">
                    {/* Setting_heading */}
                    <div className="setting-heading pt-5 ps-5">
                        <h3 className="dash-heading pt-3 pb-4">Notification Setting</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="notification-setting ps-5">
                                <p className="pb-3 notification-heading">Type</p>
                                <div className="notification-main">
                                    <label className="notification-box pb-3">
                                        <p>Inbox Massages</p>
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="notification-box pb-3">
                                        <p>Live Reminder</p>
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                    <label className="notification-box pb-3">
                                        <p>Notification</p>
                                        <input type="checkbox" />
                                        <span className="checkmark" />
                                    </label>
                                </div>
                                <div className="main-btn text-center">
                                    <a href="#">Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
