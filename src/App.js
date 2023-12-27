import './App.css';
import Login from './components/login/Login';
import React, { useState } from 'react';
import LeftSideBar from './components/dashboard/LeftSideBar';
import Footer from './components/dashboard/Footer';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/fontawesome-free-6.4.2-web/css/all.css';
import Header from './components/dashboard/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard"
import MyProgram from './components/myPrograms/MyProgram';
import Setting from './components/settings/Setting';
import Faq from './components/dashboard/Faq';
import PrivateRoute from './components/PrivateRoute';
import { isAuthenticated } from './components/login/auth';

function App() {
  const [mainCurrentPath, setMainCurrentPath] = useState('');

  const handlePathChange = (path) => {
    setMainCurrentPath(path);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard handlePathChange={handlePathChange} mainCurrentPath={mainCurrentPath} />
            </PrivateRoute >
          }
        />
        <Route
          path="/myprogram"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} >
              <MyProgram handlePathChange={handlePathChange} mainCurrentPath={mainCurrentPath} />
            </PrivateRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} >
              <Setting handlePathChange={handlePathChange} mainCurrentPath={mainCurrentPath} />
            </PrivateRoute>
          }
        />
        <Route
          path="/faq"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} >
              <Faq handlePathChange={handlePathChange} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
