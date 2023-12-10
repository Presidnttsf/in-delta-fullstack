import React from 'react';

export default function PopularCatogories() {

    const categoriesData = ["CatA", "CatB", "CatC", "CatD", "CatE"];

    return (
        <div className="row dash-popular-categories text-center">
            <h3 className="dash-heading pt-5 pb-3 text-start">Popular Categories</h3>
            {categoriesData.map((item, index) => (
                <div key={index} className="col-lg-2 col-md-3 dash-cat pb-4">
                    <a href="#">
                        {/* Assuming you have images for each category */}
                        <img src={`images/category/category${index + 1}.png`} alt={`Category ${index + 1}`} />
                        <h6 className="dash-sub-heading">{item}</h6>
                    </a>
                </div>
            ))}
        </div>
    );
}
