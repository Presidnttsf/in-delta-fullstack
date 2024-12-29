import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../UserContext';
import Modal from '../dashboard/Modal';


export default function ChangePassword() {

    // State for feedback messages
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);  // State to toggle password visibility
    const { person, setPerson } = useContext(UserContext);
    const userId = person?._id;




    // State for form fields
    const [formData, setFormData] = useState({
        password: "", // Prepopulate with user data if available
        confirmPassword: "",
    });


    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    }

    const closeModal = () => {
        setShowModal(false);
    };

    // Apply the no-pointer-events class to the body when the modal is open
    useEffect(() => {
        if (showModal) {
            document.body.classList.add('no-pointer-events');
        } else {
            document.body.classList.remove('no-pointer-events');
        }

        return () => {
            document.body.classList.remove('no-pointer-events');
        };
    }, [showModal]);




    async function handleUpdate() {
        if (!userId) {
            setMessage("User ID not found.");
            return;
        }

        try {
            // Send the PUT request using axios
            const response = await axios.put("http://localhost:5000/backend/userdb/UpdateUser", {
                userId, // Use the dynamic user ID
                ...formData, // Include the updated data
            });

            if (response.data.success) {
                setShowModal(true); // Show success modal
                setMessage("Profile updated successfully!");
                setPerson((prevPerson) => ({
                    ...prevPerson, ...formData,
                }));

            } else {
                setMessage(response.data.message || "Failed to update profile.");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            setShowModal(true); // Show error modal
            setMessage("An error occurred. Please try again.");
        }
    }






    return (
        <div className="row edit-profile-row">
            <div className="edit-profile-main d-flex">

                <div className="row setting-right-pannel-inner">
                    {/* Setting_heading */}
                    <div className="setting-heading pt-5 ps-5">
                        {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
                        <h3 className="dash-heading pt-3 pb-5">Change Password</h3>
                    </div>
                    <div className="col-lg-6 px-5">
                        {/* New Password */}

                        <div className="log-group">
                            <div className="log-group-input">
                                <input
                                    type={showPassword ? "text" : "password"} // Toggle between text and password
                                    name="password"
                                    id="password"
                                    placeholder="New password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="log-group-icon">
                                <img
                                    src={showPassword ? "images/lock-open-icon.png" : "images/log-pass-icon.svg"}
                                    alt='lock'
                                    className="img-fluid"
                                    onClick={() => setShowPassword(prev => !prev)}
                                />
                            </div>
                        </div>
                        {/* confirm Password */}
                        <div className="log-group">
                            <div className="log-group-input">
                                <input
                                    type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="log-group-icon">
                                <img
                                    src={showConfirmPassword ? "images/lock-open-icon.png" : "images/log-pass-icon.svg"}
                                    alt='lock'
                                    className="img-fluid"
                                    onClick={() => setShowConfirmPassword(prev => !prev)}
                                />
                            </div>
                        </div>
                        {/* update-btn */}
                        <div className="main-btn text-center">
                            <a onClick={handleUpdate}>Update</a>
                        </div>
                    </div>
                    <div className="col-lg-6 p-5"></div>
                </div>
            </div>
        </div>
    )
}
