
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
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
import Faq from './dashboard/Faq';
import Login from './login/Login';
import PrivateRoute from './PrivateRoute';
import { isAuthenticated } from './login/auth';


function Home() {
    const [currentPath, setCurrentPath] = useState('');
    const navigate = useNavigate();
    console.log("checking auth...", isAuthenticated())
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
                            <Route path="/login" element={<Login navigate={navigate} />} />

                            <PrivateRoute path="/" exact element={<Dashboard handlePathChange={handlePathChange} isAuthenticated={isAuthenticated} />} />
                            <PrivateRoute path="/myprogram" element={<MyProgram handlePathChange={handlePathChange} isAuthenticated={isAuthenticated} />} />
                            <PrivateRoute path="/setting" element={<Setting handlePathChange={handlePathChange} isAuthenticated={isAuthenticated} />} />
                            <PrivateRoute path="/faq" element={<Faq handlePathChange={handlePathChange} isAuthenticated={isAuthenticated} />} />

                        </Routes>
                        <Footer />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Home;