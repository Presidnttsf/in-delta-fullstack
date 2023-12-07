import React from 'react';

export default function LiveSessions() {
    return (
        <div className="row">
            <h3 className="dash-heading py-3">Live Sessions</h3>

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category1.png" alt="Category 1" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <a href="#" className="join-btn mt-3 me-3">
                        Join
                    </a>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name d-flex align-items-center justify-content-between pt-5 w-100">
                            <h6 className="card-title">Live Title 1</h6>
                            <a href="#" className="live-btn">
                                Live
                            </a>
                        </div>
                        <span>Category Name</span>
                        <div className="explore-card-text-main d-flex align-items-center pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category2.png" alt="Category 2" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <a href="#" className="join-btn mt-3 me-3">
                        Join
                    </a>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name d-flex align-items-center justify-content-between pt-5 w-100">
                            <h6 className="card-title">Live Title 2</h6>
                            <a href="#" className="live-btn">
                                Live
                            </a>
                        </div>
                        <span>Category Name</span>
                        <div className="explore-card-text-main d-flex align-items-center pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
