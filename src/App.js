import './App.css';
import LeftSideBar from './components/dashboard/LeftSideBar';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/dashboard/Footer';
import MyProgram from './components/myPrograms/MyProgram';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Setting from './components/Setting';


function App() {
  return (
    // Zeeshan update seen by Tauseef Akhtar
    <div class="wrapper dashboard">
      <LeftSideBar />
      <div class="main-wrapper py-md-5 px-lg-5 px-2 px-md-0">
        <div class="container mx-md-4 pb-4">
          <Dashboard />
          <Footer />
          <MyProgram />
          <Setting />
        </div>
      </div>
    </div>

  );
}

export default App;
