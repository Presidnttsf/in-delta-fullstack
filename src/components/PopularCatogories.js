import React from 'react';

export default function PopularCatogories() {
    return (
        <div className="row dash-popular-categories text-center">
            <h3 className="dash-heading pt-5 pb-3 text-start">Popular Categories</h3>
            <div className="col-lg-2 col-md-3 dash-cat pb-4">
                <a href="#">
                    <img src="images/category/category1.png" alt="Category 1" />
                    <h6 className="dash-sub-heading">Category</h6>
                </a>
            </div>
            <div className="col-lg-2 col-md-3 dash-cat pb-4">
                <a href="#">
                    <img src="images/category/category2.png" alt="Category 2" />
                    <h6 className="dash-sub-heading">Category</h6>
                </a>
            </div>
            <div className="col-lg-2 col-md-3 dash-cat pb-4">
                <a href="#">
                    <img src="images/category/category3.png" alt="Category 3" />
                    <h6 className="dash-sub-heading">Category</h6>
                </a>
            </div>
            <div className="col-lg-2 col-md-3 dash-cat pb-4">
                <a href="#">
                    <img src="images/category/category4.png" alt="Category 4" />
                    <h6 className="dash-sub-heading">Category</h6>
                </a>
            </div>
            <div className="col-lg-2 col-md-3 dash-cat pb-4">
                <a href="#">
                    <img src="images/category/category5.png" alt="Category 5" />
                    <h6 className="dash-sub-heading">Category</h6>
                </a>
            </div>
            <div className="col-lg-2 col-md-3 dash-cat pb-4">
                <a href="#">
                    <img src="images/category/category6.png" alt="Category 6" />
                    <h6 className="dash-sub-heading">Category</h6>
                </a>
            </div>
        </div>
    );
}
