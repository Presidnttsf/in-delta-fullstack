
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftSideBar from './dashboard/LeftSideBar';
import Dashboard from './dashboard/Dashboard';
import Footer from './dashboard/Footer';
import MyProgram from './myPrograms/MyProgram';
import Setting from './settings/Setting';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "../utils/fontawesome-free-6.4.2-web/css/all.css";
import Header from './dashboard/Header';
import { useState } from 'react';
import ManageCard from './settings/ManageCard';
import ChangePassword from './settings/ChangePassword';
import NotificationSettings from './settings/NotificationSettings';
import Faq from './dashboard/Faq';


function Home() {

    const [currentPath, setCurrentPath] = useState('');
    console.log("checking path", currentPath)
    const handlePathChange = (path) => {
        setCurrentPath(path);
    };

    return (
        <Router>
            <div className="wrapper dashboard">
                <LeftSideBar />
                <div className="main-wrapper py-md-5 px-lg-5 px-2 px-md-0">
                    <div className="container mx-md-4 pb-4">
                        <header className="main-wrapper-header pb-5">
                            <div className="row">
                                <Header heading={currentPath} />
                            </div>
                        </header>


                        <Routes>
                            <Route path="/" exact element={<Dashboard handlePathChange={handlePathChange} />} />
                            <Route path="/myprogram" element={<MyProgram handlePathChange={handlePathChange} />} />
                            <Route path="/setting" element={<Setting handlePathChange={handlePathChange} />} />
                            <Route path="/faq" element={<Faq handlePathChange={handlePathChange} />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Home;