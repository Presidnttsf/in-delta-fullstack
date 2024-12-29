import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../UserContext';
import Modal from '../dashboard/Modal';


export default function EditProfile() {


    //  access user from context
    const { person, setPerson } = useContext(UserContext);
    const userId = person?._id;

    // State for form fields
    const [formData, setFormData] = useState({
        name: person?.name || "", // Prepopulate with user data if available
        email: person?.email || "",
    });

    // State for feedback messages
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

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
                setPerson(formData)

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
        <>
            <div className="setting-heading pt-5 ps-5">
                <h3 className="dash-heading pt-3 pb-5">Edit Profile</h3>
            </div>
            <div className="col-lg-6 px-5">
                {showModal && <Modal visible={showModal} onClose={closeModal} message={message} />}
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
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="log-group-icon">
                        <img
                            src="images/editPic.svg"
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
                            name='email'
                            placeholder="john.doe@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
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
                    <a onClick={handleUpdate}>Update</a>
                </div>
            </div>
            <div className="col-lg-6 p-5">
                <h3 className="dash-heading py-3">Interested Categories</h3>
                <p>Lorem ipsum is simple dummy text that can be used that can be</p>
                <div className="row interested-categories mt-4 text-center">
                    <div className="col-lg-4">
                        <div className="interested-categories-images mx-auto">
                            <input type="checkbox" id="myCheckbox1" />
                            <label htmlFor="myCheckbox1">
                                <img src="images/category/category1.png" />
                            </label>
                        </div>
                        <p className="cat-text pt-2">category1</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="interested-categories-images mx-auto">
                            <input type="checkbox" id="myCheckbox2" />
                            <label htmlFor="myCheckbox2">
                                <img src="images/category/category1.png" />
                            </label>
                        </div>
                        <p className="cat-text pt-2">category2</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="interested-categories-images mx-auto">
                            <input type="checkbox" id="myCheckbox3" />
                            <label htmlFor="myCheckbox3">
                                <img src="images/category/category1.png" />
                            </label>
                        </div>
                        <p className="cat-text pt-2">category3</p>
                    </div>
                </div>
                <p className="mt-4 select-text">
                    Select More <a href="#">Click here</a>
                </p>
            </div>
        </>
    )
}
