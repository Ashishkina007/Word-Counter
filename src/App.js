import './App.css';
import Navbar from './Navbar.js';
import Upper from './Upper.js';
import Alert from './Alert.js';
import About from './About.js';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState('Null');

  const showAlert=(message,type)=>{
    setAlert({
   msg:message,
   type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==="light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been enabled" ,"success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
    
  }
  return (
    <>
    <Router>  
        <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
          <Upper showAlert={showAlert} mode={mode} /> 
          </Route>
        </Switch>
     
     </Router>

    </>
  )
  }
  

export default App;
