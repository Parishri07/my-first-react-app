import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const[text, setText] = useState(' ');
  // const[website, setURL] = useState(' ');
  
  const handleUpClick = ()=>{
    // console.log("clicked");
    let n = text.toUpperCase();
    setText(n);
    props.showAlert("Converting to Uppercase", "success");
  }

  const handleLoClick = ()=>{
    // console.log("clicked");
    let m = text.toLowerCase();
    setText(m);
    props.showAlert("Converting to Lowercase", "success");
  }

  const handleClearClick = ()=>{
    setText(' ');
  }

  const handleTrim = ()=>{
    let o = text.slice(0,10)
    setText(o);
    props.showAlert("Trimming the text to 10 characters", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("Changed");
    setText(event.target.value);
  }

//   const handleChange = (event)=>{
//     setURL(event.target.value);
//       // 1. Fetch the webpage's HTML content
// fetch(event.target.value)
// .then(response => {
//   // Check if the request was successful
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.text(); // Get the HTML content as text
// })
// .then(html => {
//   // 2. Extract text from the HTML
//   const text = extractTextFromHTML(html);

//   // 3. Do something with the extracted text
//   console.log(text);
// })
// .catch(error => {
//   console.error('There was a problem with the fetch operation:', error);
// });
//   }

  const displayStyle = {
    display: 'flex'
  };



// Function to extract text from HTML (you can customize this as needed)
// function extractTextFromHTML(html) {
// const parser = new DOMParser();
// const doc = parser.parseFromString(html, 'text/html');
// return doc.body.textContent;
// }


  return (
    <>
    <div className={`container text-${props.mode === 'dark'?'white':'#042743'}`}>
    <h2>{props.heading}</h2>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?"#97DEFF":'white', color: props.mode === 'dark'?'#1D267D':'black'}} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary my-2" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >Convert to Lowercase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleTrim} >Trim to 10 characters</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick} >Clear Text</button>
    </div>
    {/* <div classNameName='container my-3' style={displayStyle}>
      <p>Enter website url to read from: </p>
      <input className="form-control" type="text" value={website} onChange={handleChange}></input>
    </div> */}
    <div className={`container my-5 text-${props.mode === 'dark'?'white':'#042743'}`}>
      <h3>Text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h4>Preview</h4>
      <p>{text.length>0 ? text :"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
    
  )
}
//here there is value in textarea, where whatever is written in textarea is stored in text var, there is an onChange event where on change in the text area, the text state has to be changed. 
// in button tag, we use on click method where on clicking the button the text should be changed to uppercase and text state has to be updated.

//to add condition of javascript in className, write className in {} and also use `(back-ticks) and then write condition ${}

//rfc: react function component
//impt: import PropTypes
