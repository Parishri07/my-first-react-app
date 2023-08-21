// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


function App() {
  return (
    <>
    {/* <Navbar title="TextUtils2"/> */}
    {/* <Navbar /> */}
    <Navbar title="TextUtils" aboutText="About TextUtlis"/>
    <div className="container">
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
