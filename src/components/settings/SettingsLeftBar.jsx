import React from 'react'



export default function SettingsLeftBar({ handleTabClick }) {
    return (
        <div className="setting-left-pannel-inner py-5 ps-5">
            <ul className="pt-lg-5">
                <li className="pb-5">
                    <button className="active" onClick={() => handleTabClick("editprofile")}>
                        <i className="fa-solid fa-user-pen px-3" />
                        <span>Edit Profile</span>
                    </button>

                </li>
                <li className="pb-5">
                    <button className="" onClick={() => handleTabClick("changepassword")}>
                        <i className="fa-solid fa-lock px-3" />
                        <span>Change Password</span>
                    </button>
                </li>
                <li className="pb-5">
                    <button className="" onClick={() => handleTabClick("managecard")}>
                        <i className="fa-solid fa-lock px-3" />
                        <span>Manage Card</span>
                    </button>

                </li>
                <li className="pb-5">
                    <button className="" onClick={() => handleTabClick("notificationsettings")}>
                        <i className="fa-solid fa-lock px-3" />
                        <span>Notification settings</span>
                    </button>
                </li>
            </ul>
        </div >
    )
}
