
import './App.css';
  import TextForm from './Components/TextForm';
// import About from './Components/about';
import Navbar from './Components/navbar.js';
import React , {useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [Mode2, setMode2] = useState('light');
  const toggleMode2 = ()=>{
    if(Mode2 === 'light'){
      setMode2('dark')
      document.body.style.background = 'green'
    }else{
      setMode2('light')
       document.body.style.background = 'white' 
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const [Mode, setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = ()=>{
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert ("darkmode has been enabled","success");
    }else{
      setMode ('light')
      document.body.style.backgroundColor = "white"
      showAlert ("lightmode has been enabled","success");
    }
  }

  return (
<>
{/* <Router> */}
   <Navbar title="TextUtils"  mode={Mode} toggleMode={toggleMode} mode2={Mode2} toggleMode2={toggleMode2}/> 
   <Alert alert={alert}/>
   <div className = "container my-3">
   <TextForm showAlert = {showAlert} heading = "Enter the text to analyse" mode={Mode} mode2={Mode2} toggleMode2={toggleMode2}/> 
    {/* <Routes> */}
      {/* <Route exact path="/about" element= {<About />}/> */}
         
        
        {/* </Routes> */}
    </div>
    {/* </Router> */}
   
   
   
   
    </>
  );
}

export default App;
