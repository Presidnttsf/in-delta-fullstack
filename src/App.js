import './App.css';
import Home from "./components/Home";
import Login from './components/login/Login';
import { isAuthenticated } from './components/login/auth';

function App() {

  // console.log("checking path", currentPath)
  console.log("checking authjs", isAuthenticated())
  // const [authenticate, setAuthenticate] = useState(false);



  return (
    <>

      {isAuthenticated() ? <Home /> : <Login />}
      {/* <Login /> */}
      {/* <Home /> */}

    </>
  );
}

export default App;