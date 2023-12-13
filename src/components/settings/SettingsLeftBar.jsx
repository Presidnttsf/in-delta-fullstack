import React from 'react'



export default function SettingsLeftBar({ handleTabClick, activeTab }) {
    return (
        <div className="setting-left-pannel-inner py-5 ps-5">
            <ul className="pt-lg-5">
                <li className="pb-5">
                    <button className={activeTab === "editprofile" ? "active" : null} onClick={() => handleTabClick("editprofile")}>
                        <i className="fa-solid fa-user-pen px-3" />
                        <span>Edit Profile</span>
                    </button>

                </li>
                <li className="pb-5">
                    <button className={activeTab === "changepassword" ? "active" : null} onClick={() => handleTabClick("changepassword")}>
                        <i className="fa-solid fa-lock px-3" />
                        <span>Change Password</span>
                    </button>
                </li>
                <li className="pb-5">
                    <button className={activeTab === "managecard" ? "active" : null} onClick={() => handleTabClick("managecard")}>
                        <i className="fa-solid fa-lock px-3" />
                        <span>Manage Card</span>
                    </button>

                </li>
                <li className="pb-5">
                    <button className={activeTab === "notificationsettings" ? "active" : null} onClick={() => handleTabClick("notificationsettings")}>
                        <i className="fa-solid fa-lock px-3" />
                        <span>Notification settings</span>
                    </button>
                </li>
            </ul>
        </div >
    )
}
