import React from 'react';

export default function Recommendations() {
    return (
        <div className="row">
            <h3 className="dash-heading py-3">Recommendations</h3>

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category2.png" alt="Category 2" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                            <h6 className="card-title">Program Name 1</h6>
                            <h5 className="explore-rate">$1.99</h5>
                        </div>
                        <span>Category Name | 3 hours</span>
                        <div className="explore-card-text-main d-flex align-items-center pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="explore-card-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category2.png" alt="Category 2" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                            <h6 className="card-title">Program Name 2</h6>
                            <h5 className="explore-rate">$1.99</h5>
                        </div>
                        <span>Category Name | 3 hours</span>
                        <div className="explore-card-text-main d-flex align-items-center pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="explore-card-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-3 col-md-6 pe-md-4 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category3.png" alt="Category 3" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                            <h6 className="card-title">Program Name 3</h6>
                            <h5 className="explore-rate">$1.99</h5>
                        </div>
                        <span>Category Name | 3 hours</span>
                        <div className="explore-card-text-main d-flex align-items-center pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="explore-card-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4 */}
            <div className="col-lg-3 col-md-6 py-4">
                <div className="explore-card mt-5">
                    <div className="explore-card-img-top">
                        <img src="images/category/category4.png" alt="Category 4" className="img-fluid explore-img" />
                        <img src="images/play.svg" alt="Play Icon" className="img-fluid explore-play-img" />
                    </div>
                    <div className="explore-card-body px-3 pt-5 pb-3">
                        <div className="explore-name d-flex align-items-center justify-content-between pt-5">
                            <h6 className="card-title">Program Name 4</h6>
                            <h5 className="explore-rate">$1.99</h5>
                        </div>
                        <span>Category Name | 3 hours</span>
                        <div className="explore-card-text-main d-flex align-items-center pt-1">
                            <div className="explore-card-text pe-1">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className="explore-card-icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
