import React, { useEffect } from 'react'
import SettingsLeftBar from './SettingsLeftBar';

export default function ManageCard() {


    return (
        <div className="row edit-profile-row">
            <div className="edit-profile-main d-flex">
                <div className="setting-right-pannel-inner row">
                    {/* Setting_heading */}
                    <div className="setting-heading pt-5 ps-5">
                        <h3 className="dash-heading pt-3 pb-5">Manage Card</h3>
                    </div>
                    <div className="row px-lg-5">
                        <div className="col-lg-4">
                            <img src="images/visa-card.png" />
                        </div>
                        <div className="col-lg-4">
                            <div className="add-more-card">
                                <a
                                    href="#"
                                    className="add-card-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="fa-solid fa-circle-plus me-2" />
                                    <span>Add More Card</span>
                                </a>
                                {/* Modal */}
                                <div
                                    className="modal fade"
                                    id="exampleModal"
                                    tabIndex={-1}
                                    aria-labelledby="exampleModalLabel"
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-dialog modal-dialog-centered">
                                        <div className="modal-content p-4">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">
                                                    Add New Card
                                                </h5>
                                                <a
                                                    className=""
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                >
                                                    <img
                                                        src="images/close-button.svg"
                                                        className="img-fluid close-button-img"
                                                    />
                                                </a>
                                            </div>
                                            <div className="modal-body">
                                                {/* Password */}
                                                <div className="log-group">
                                                    <div className="log-group-input">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="**** **** **** 7854"
                                                        />
                                                    </div>
                                                    <div className="log-group-icon">
                                                        <img
                                                            src="images/log-pass-icon.svg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Password */}
                                                <div className="log-group">
                                                    <div className="log-group-input">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            placeholder="**** **** **** 7854"
                                                        />
                                                    </div>
                                                    <div className="log-group-icon">
                                                        <img
                                                            src="images/log-pass-icon.svg"
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        {/* Password */}
                                                        <div className="log-group me-2">
                                                            <div className="log-group-input">
                                                                <input
                                                                    type="date"
                                                                    name="date"
                                                                    id="date"
                                                                    placeholder="**** **** **** 7854"
                                                                />
                                                            </div>
                                                            <div className="log-group-icon"></div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        {/* Password */}
                                                        <div className="log-group ms-2">
                                                            <div className="log-group-input">
                                                                <input
                                                                    type="text"
                                                                    name="cvv"
                                                                    id="cvv"
                                                                    placeholder="Enter CVV"
                                                                />
                                                            </div>
                                                            <div className="log-group-icon"></div>
                                                        </div>
                                                    </div>
                                                    <div className="main-btn text-center">
                                                        <a href="#">Save</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row px-lg-5 mt-5">
                        <div className="col-lg-10 mytransuction p-lg-4">
                            <h5 className="py-3">My Transuction</h5>
                            <div className="transuction-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Amount</th>
                                            <th>Receipt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21 June 2022</td>
                                            <td>Lorem ipsom is simple dummy text that can be</td>
                                            <td>$12.00</td>
                                            <td>
                                                <i className="fa-solid fa-download" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>22 Mar 2022</td>
                                            <td>Lorem ipsom is simple dummy text that can be</td>
                                            <td>$9.00</td>
                                            <td>
                                                <i className="fa-solid fa-download" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>16 April 2023</td>
                                            <td>
                                                Lorem ipsom is simple dummy text that can be that can
                                            </td>
                                            <td>$10.00</td>
                                            <td>
                                                <i className="fa-solid fa-download" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>21 June 2022</td>
                                            <td>Lorem ipsom is simple dummy text that can be</td>
                                            <td>$12.00</td>
                                            <td>
                                                <i className="fa-solid fa-download" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>21 June 2022</td>
                                            <td>Lorem ipsom is simple dummy text that can be</td>
                                            <td>$12.00</td>
                                            <td>
                                                <i className="fa-solid fa-download" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
