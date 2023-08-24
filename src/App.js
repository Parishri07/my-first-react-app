// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import React,{useState} from 'react'
import { type } from '@testing-library/user-event/dist/type';


function App() {

  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const toggleMode = ()=>{
     if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor = '#042743';
     showAlert("Converting to Dark Mode", "success");
  }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Converting to Light Mode", "success");
  }
  }

  const showAlert = (message, type) =>{
    let textColor="black";
    
    if(mode === 'light')
    textColor = 'black';
  else
  textColor = 'white';


    setAlert({
      msg: message,
      type: type,
      color: textColor
    })

    setTimeout(()=>{
      setAlert(null)
    },1500);

  }

  return (
    <>
    {/* <Navbar /> */}
    <Navbar title="TextUtils" mode={mode} changeMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <TextForm heading="Enter text to analyse" mode={mode} showAlert={showAlert} />
    </div>
    </>
  );
}
//you can return only one tag
//when you have to use JS element or string then use parenthesis({})
//replace  with use className instead of class 
//here title and aboutText are props/properties

export default App;
