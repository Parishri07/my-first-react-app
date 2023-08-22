// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React,{useState} from 'react'


function App() {

  const[mode, setMode] = useState('light');

  const toggleMode = ()=>{
     if(mode === 'light')
     setMode('dark');
    else
    setMode('light');
  }

  return (
    <>
    {/* <Navbar /> */}
    <Navbar title="TextUtils" mode={mode} changeMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter text to analyse"/>
    </div>
    </>
  );
}
//you can return only one tag
//when you have to use JS element or string then use parenthesis({})
//replace  with use className instead of class 
//here title and aboutText are props/properties

export default App;
