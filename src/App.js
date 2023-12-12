import './App.css';
import Home from "./components/Home";
import { useState } from 'react';
import Login from './components/login/Login';
function App() {

  const [currentPath, setCurrentPath] = useState('');
  console.log("checking path", currentPath)
  const [authenticate, setAuthenticate] = useState(false);

  const handlePathChange = (path) => {
    setCurrentPath(path);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("button clicked")
    const email = event.target.elements.email.value;
    const password = event.target.elements.cvv.value;
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Password:', password);

    if (email === "presidnttsf@gmail.com" && password === "12345@tsf") {
      setAuthenticate(true);
    } else {

      alert("Invalid username and password")
    }

  }
  return (
    <>
      {/* {authenticate ? <Home /> : <Login handleLogin={handleLogin} />} */}
      <Home />

    </>
  );
}

export default App;
