import './App.css';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/fontawesome-free-6.4.2-web/css/all.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard"
import MyProgram from './components/myPrograms/MyProgram';
import Setting from './components/settings/Setting';
import Faq from './components/dashboard/Faq';
import PrivateRoute from './components/PrivateRoute';
import { useIsAuthenticated } from './components/login/auth';
import ForgetPassword from './components/login/ForgetPassword';
import OtpGenerate from "./components/login/OtpGenerate"
import OtpVerify from "./components/login/OtpVerify"

function App() {
  const [mainCurrentPath, setMainCurrentPath] = useState('');
  const isAuthenticated = useIsAuthenticated();

  const handlePathChange = (path) => {
    setMainCurrentPath(path);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/otpverify" element={<OtpVerify />} />
        <Route path="/otpgenerate" element={<OtpGenerate />} />

        <Route
          path="/dashboard"
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
