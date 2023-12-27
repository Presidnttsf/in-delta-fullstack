// Layout.jsx
import React from 'react';
import LeftSideBar from '../dashboard/LeftSideBar';
import Footer from '../dashboard/Footer';
import Header from '../dashboard/Header';

const Layout = ({ children, currentPath }) => {
    return (
        <div className="wrapper dashboard">
            <LeftSideBar />
            <div className="main-wrapper py-md-5 px-lg-5 px-2 px-md-0">
                <div className="container mx-md-4 pb-4">
                    <header className="main-wrapper-header pb-5">
                        <div className="row">
                            <Header heading={currentPath} />
                        </div>
                    </header>
                    {children}
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Layout;
