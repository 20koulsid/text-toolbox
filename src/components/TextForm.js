import React, { useState } from "react"



export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Text has been converted to UpperCase", "success");
  }
  const handleLowClick = () =>{
    let newText = text.toLowerCase(); 
    setText(newText);
    props.showAlert(" Text has been converted to LowerCase", "success");
  }
  const handleTrimClick = () =>{
    let newText = '';
    setText(newText);
    props.showAlert(" Text has been cleared", "success");
  }
  const handleCpClick = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert(" Text has been copied", "success");
  }


  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  // text= "new text"// wrong way to change the state 
  // setText("new text");
  return (
  <>
  <div className="conatiner" style={{color:props.mode ==='dark'?'white':'black'}}>
    <h3 className=" my-4">{props.heading}</h3>
    <div className="mb-3">
    <textarea className="form-control "  value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}}id="Box" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-info mx-1 my-1 " onClick={handleUpClick}>Convert To UpperCase</button>
    <button type="button" className="btn btn-info mx-1 my-1 " onClick={handleLowClick}>Convert To LowerCase</button>
    <button type="button" className="btn btn-info mx-1 my-1 " onClick={handleTrimClick}>Clear Text</button>
    <button type="button" className="btn btn-info mx-1 my-1 " onClick={handleCpClick}>Copy Text</button>
  </div> 

  <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
     <h4>Your text summary</h4>     
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{(text.split(" ").length) * 0.008} Minutes read time</p>
     <h3>Preview</h3>
     <p>{text.length>0?text:"Enter text above to preview it here"}</p>
  </div>
  </>
  )
}

