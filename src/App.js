import './App.css';
import Home from "./components/Home";
import { useState } from 'react';
import Login from './components/login/Login';
function App() {

  const [currentPath, setCurrentPath] = useState('');
  console.log("checking path", currentPath)
  const handlePathChange = (path) => {
    setCurrentPath(path);
  };

  return (
    <>
      <Login />
      <Home />
    </>
  );
}

export default App;
