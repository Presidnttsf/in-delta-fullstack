import React from 'react'

export default function MyProgram() {
    return (
        <div className="subscribe-program pt-4">
            <ul className="nav nav-tabs pb-4" id="myTab" role="tablist">
                <li className="nav-item me-5" role="presentation">
                    <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        My Subscribed Program
                    </button>
                </li>
                <li className="nav-item me-5" role="presentation">
                    <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >
                        Live Sessions
                    </button>
                </li>
                <li className="nav-item me-5" role="presentation">
                    <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                    >
                        Recordings
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                {/* tab1 */}
                <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category5.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 Hours total</span>
                                    <div className="explore-card-text-main pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                        {/* progress-bar */}
                                        <div className="progress-main d-flex align-items-center">
                                            <div className="progress-text">
                                                <span>30%</span>
                                            </div>
                                            <div className="progress-bg">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "30%" }}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category6.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 Hours total</span>
                                    <div className="explore-card-text-main pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                        {/* progress-bar */}
                                        <div className="progress-main d-flex align-items-center">
                                            <div className="progress-text">
                                                <span>30%</span>
                                            </div>
                                            <div className="progress-bg">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "30%" }}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category1.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 Hours total</span>
                                    <div className="explore-card-text-main pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                        {/* progress-bar */}
                                        <div className="progress-main d-flex align-items-center">
                                            <div className="progress-text">
                                                <span>30%</span>
                                            </div>
                                            <div className="progress-bg">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "30%" }}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* My Completed Programs */}
                    <div className="row my-completed-programs">
                        <h3 className="dash-heading py-3">My Completed Programs</h3>
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <img
                                    src="images/category/category5.png"
                                    className="explore-card-img-top"
                                />
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 Hours total</span>
                                    <div className="explore-card-text-main pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                        {/* progress-bar */}
                                        <div className="progress-main d-flex align-items-center">
                                            <div className="progress-text">
                                                <span>100%</span>
                                            </div>
                                            <div className="progress-bg">
                                                <div
                                                    className="progress-bar"
                                                    role="progressbar"
                                                    style={{ width: "100%" }}
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copy-right text-center pb-4">
                        Indelta International @ Copyright 2022
                    </p>
                </div>
                {/*---------- tab2 Live Sessions ----------*/}
                <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                >
                    {/* Live Sessions */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category1.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <a href="#" className="join-btn mt-3 me-3">
                                    Join
                                </a>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name d-flex align-items-center justify-content-between pt-5 w-100">
                                        <h6 className="card-title">Live Title</h6>
                                        <a href="#" className="live-btn">
                                            Live
                                        </a>
                                    </div>
                                    <span>Category Name</span>
                                    <div className="explore-card-text-main d-flex align-items-center pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 py-4 pe-md-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category2.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <a href="#" className="join-btn mt-3 me-3">
                                    Join
                                </a>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name d-flex align-items-center justify-content-between pt-5 w-100">
                                        <h6 className="card-title">Live Title</h6>
                                        <a href="#" className="live-btn">
                                            Live
                                        </a>
                                    </div>
                                    <span>Category Name</span>
                                    <div className="explore-card-text-main d-flex align-items-center pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category3.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <a href="#" className="join-btn mt-3 me-3">
                                    Join
                                </a>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name d-flex align-items-center justify-content-between pt-5 w-100">
                                        <h6 className="card-title">Live Title</h6>
                                        <a href="#" className="live-btn">
                                            Live
                                        </a>
                                    </div>
                                    <span>Category Name</span>
                                    <div className="explore-card-text-main d-flex align-items-center pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*---------- tab3 Recording ----------*/}
                <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                >
                    {/* Explore Programs */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category1.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 hours</span>
                                    <p className="recordings-time">
                                        <i className="fa-solid fa-clock" /> 15 Jun,2022
                                    </p>
                                    <div className="explore-card-text-main d-flex align-items-center pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category2.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 hours</span>
                                    <p className="recordings-time">
                                        <i className="fa-solid fa-clock" /> 15 Jun,2022
                                    </p>
                                    <div className="explore-card-text-main d-flex align-items-center pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                            <div className="explore-card mt-5">
                                <div className="explore-card-img-top">
                                    <img
                                        src="images/category/category3.png"
                                        className="img-fluid explore-img"
                                    />
                                    <img
                                        src="images/play.svg"
                                        className="img-fluid explore-play-img"
                                    />
                                </div>
                                <div className="explore-card-body px-3 pt-5 pb-3">
                                    <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                                        <h6 className="card-title">Program Name here</h6>
                                    </div>
                                    <span>Category Name | 3 hours</span>
                                    <p className="recordings-time">
                                        <i className="fa-solid fa-clock" /> 15 Jun,2022
                                    </p>
                                    <div className="explore-card-text-main d-flex align-items-center pt-1">
                                        <div className="explore-card-text pe-1">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and
                                                type setting industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};