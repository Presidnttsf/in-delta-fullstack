import './App.css';
import LeftSideBar from './components/LeftSideBar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';


function App() {
  return (

    <div class="wrapper dashboard">
      <LeftSideBar />
      <div class="main-wrapper py-md-5 px-lg-5 px-2 px-md-0">
        <div class="container mx-md-4 pb-4">
          <Dashboard />
          <Footer />

        </div>
      </div>
    </div>

  );
}

export default App;
