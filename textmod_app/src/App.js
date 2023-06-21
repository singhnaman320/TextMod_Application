import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; // imrs then enter
import Alert from './components/Alert';

function App() {
  
  const [mode, setMode] = useState("light"); 
  const [alert, setAlert] = useState(null) // Alert is taken as object here

  const showAlert = (message, type) =>{

    setAlert({

      msg : message,
      alertType : type
    })

    setTimeout(()=>{  // Alert removed by itself after 2 sec

      setAlert(null);

    }, 2000)
  }

  const toggleMode = () =>{
    
    if(mode === "light"){

      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      
      document.getElementById("modeChangeText").innerText="Enable Light Mode";

      showAlert("Dark mode has been enabled", "success")

      document.title = "TextMod - Dark Mode" // Change title on browser tab 
     
    }else{

      setMode("light");
      document.body.style.backgroundColor = "white"

      document.getElementById("modeChangeText").innerText= "Enable Dark Mode";
     
      showAlert("Light mode has been enabled", "success")

      document.title = "TextMod - Light Mode" // Change title on browser tab 
    }
  }

  return (

    // Importing Navbar and TextForm from components
    // my-3 used in bootstrap to give margin on y-axis by 3
    <>
    {/* For about section put: aboutText="About" in <Navbar/> and make changes in about*/}
      <Navbar title="TextMod" presentMode = {mode} toggleMode = {toggleMode}></Navbar> 
      <Alert presentAlert = {alert}/>
      <div className="container my-3">
        <TextForm showingAlert={showAlert} heading="Enter the text to analyze below:" presentMode = {mode}></TextForm>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
