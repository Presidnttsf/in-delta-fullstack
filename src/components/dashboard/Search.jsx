import React from 'react';

export default function Search() {
    return (
        <div className="row">
            <div className="dash-search mt-5">
                <input placeholder="search for lessons, teachers, instruments" />
                <span>
                    <h6 className="dash-sub-heading">Search</h6>
                    <img
                        src="images/search-icon.svg"
                        alt="Search Icon"
                        className="img-fluid search-icon-img ps-4"
                    />
                </span>
            </div>
        </div>
    );
}
