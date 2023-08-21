import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const[text, setText] = useState(' ');
  
  const handleUpClick = ()=>{
    // console.log("clicked");
    let n = text.toUpperCase();
    setText(n);
  }

  const handleLoClick = ()=>{
    // console.log("clicked");
    let m = text.toLowerCase();
    setText(m);
  }

  const handleTrim = ()=>{
    let o = text.slice(0,10)
    setText(o);
  }

  const handleOnChange = (event)=>{
    // console.log("Changed");
    setText(event.target.value);
  }

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <button class="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
    <button class="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert to Lowercase</button>
    <button class="btn btn-primary my-3 mx-1" onClick={handleTrim} >Trim to 10 characters</button>
    </div>
    <div className="container my-5">
      <h3>Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </>
    
  )
}
//here there is value in textarea, where whatever is written in textarea is stored in text var, there is an onChange event where on change in the text area, the text state has to be changed. 
// in button tag, we use on click method where on clicking the button the text should be changed to uppercase and text state has to be updated.

//rfc: react function component
//impt: import PropTypes
