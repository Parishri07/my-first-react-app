import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const[text, setText] = useState('Enter text here');
  
  const handleUpClick = ()=>{
    // console.log("clicked");
    let n = text.toUpperCase();
    setText(n);
  }

  const handleOnChange = (event)=>{
    // console.log("Changed");
    setText(event.target.value);
  }

  return (
    <div>
    <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <button class="btn btn-primary my-3" onClick={handleUpClick} >Convert to Uppercase</button>
    </div>
  )
}
//here there is value in textarea, where whatever is written in textarea is stored in text var, there is an onChange event where on change in the text area, the text state has to be changed. 
// in button tag, we use on click method where on clicking the button the text should be changed to uppercase and text state has to be updated.

//rfc: react function component
//impt: import PropTypes
