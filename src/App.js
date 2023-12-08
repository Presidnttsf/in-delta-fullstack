import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftSideBar from './components/dashboard/LeftSideBar';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/dashboard/Footer';
import MyProgram from './components/myPrograms/MyProgram';
import Setting from './components/Setting';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/dashboard/Header';

function App() {
  return (
    <Router>
      <div className="wrapper dashboard">
        <LeftSideBar />
        <div className="main-wrapper py-md-5 px-lg-5 px-2 px-md-0">
          <div className="container mx-md-4 pb-4">
            <Header />
            {/* <Dashboard /> */}
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/myprogram" element={<MyProgram />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
