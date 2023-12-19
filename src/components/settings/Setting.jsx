import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SettingsLeftBar from './SettingsLeftBar';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import ManageCard from './ManageCard';
import NotificationSettings from './NotificationSettings';

export default function Setting({ handlePathChange }) {
    const [activeTab, setActiveTab] = useState("editprofile");

    const handleTabClick = (tab) => {
        // console.log(tab)
        setActiveTab(tab);
    }

    useEffect(() => {
        // Call handlePathChange with the current path when the component mounts
        handlePathChange(window.location.pathname);
    }, [handlePathChange]);

    return (
        <>

            <div className="row edit-profile-row mt-5 pb-5">
                <div className="edit-profile-main d-flex">
                    <div className="setting-left-pannel">
                        <SettingsLeftBar handleTabClick={(tab) => handleTabClick(tab)} activeTab={activeTab} />
                    </div>



                    <div className="row setting-right-pannel-inner align-items-center">
                        {activeTab === "editprofile" && <EditProfile />}
                        {activeTab === "changepassword" && <ChangePassword />}
                        {activeTab === "managecard" && <ManageCard />}
                        {activeTab === "notificationsettings" && <NotificationSettings />}
                    </div>
                </div>
            </div>
        </>
    )
}