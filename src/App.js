// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtlis"/>
    {/* <Navbar title="TextUtils2"/> */}
    {/* <Navbar /> */}
    </>
  );
}
//you can return only one tag
//when you have to use JS element or string then use parenthesis({})
//replace  with use className instead of class 
//here title and aboutText are props/properties

export default App;
