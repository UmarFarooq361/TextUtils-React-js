import Navbar from './components/Navbar'
import Form from './components/Form'
import Alert from './components/Alert'
import React from 'react'
// import About from './components/About'
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
                  },
      1500);
  }
  const toggleMode = ()=>{
        if(mode==="light"){
          setMode("dark")
          document.body.style.backgroundColor="#14314e"
          showAlert("Dark mode has been enabled","success")
        }
        else{
          setMode("light")
          document.body.style.backgroundColor="white"
          showAlert("Light mode has been enabled","success")

        }
  }

  return (
    <>
    {/* <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Form heading="Text you want to convert "showAlert={showAlert} mode={mode} />} />
    </Routes>
    </Router>
    */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <Form heading="Text you want to convert "showAlert={showAlert} mode={mode} />
        </> 
  );
}

export default App;
