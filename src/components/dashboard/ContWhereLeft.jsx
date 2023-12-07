import React from 'react';

export default function ContWhereLeft() {
    return (
        <div className="row">
            <h3 className="dash-heading py-3">Continue where you left</h3>

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category5.png" alt="Category 5" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name pt-5">
                            <h6 className="card-title">Program Name 1</h6>
                        </div>
                        <span>Category Name | 3 Hours total</span>
                        <div className="explore-card-text-main pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            {/* progress-bar */}
                            <div className="progress-main d-flex align-items-center">
                                <div className="progress-text"><span>30%</span></div>
                                <div className="progress-bg">
                                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category6.png" alt="Category 6" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name pt-5">
                            <h6 className="card-title">Program Name 2</h6>
                        </div>
                        <span>Category Name | 3 Hours total</span>
                        <div className="explore-card-text-main pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            {/* progress-bar */}
                            <div className="progress-main d-flex align-items-center">
                                <div className="progress-text"><span>30%</span></div>
                                <div className="progress-bg">
                                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category1.png" alt="Category 1" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name pt-5">
                            <h6 className="card-title">Program Name 3</h6>
                        </div>
                        <span>Category Name | 3 Hours total</span>
                        <div className="explore-card-text-main pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            {/* progress-bar */}
                            <div className="progress-main d-flex align-items-center">
                                <div className="progress-text"><span>30%</span></div>
                                <div className="progress-bg">
                                    <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
