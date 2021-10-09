
import React, {useState} from 'react'

export default function Upper(props) {
    const uperCase=()=>{
     let newText=text.toUpperCase();
     setText(newText);
     props.showAlert("Converted to Upper Case","success");
    }
    const lowCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
       }
       const clear=()=>{
        let newText=text.toLowerCase();
        setText(' ');
        props.showAlert("Text Clear","success");
       }
    const handleonChange=(event)=>{
      setText(event.target.value);  
       }
       const copy=()=>{
           let text=document.getElementById('myBox');
           text.select();
           navigator.clipboard.writeText(text.value);
           props.showAlert("Copt to Clipboard","success");
       }
       const extraSpace= () =>{
           let newText=text.split(/[ ]+/);
           setText(newText.join(" "))
           props.showAlert("Extra Space Removed","success");
       }
    const [text,setText]=useState(" ");  
    
    return (
        <>
        <div className="conatainer" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <div className="container mb-5">
                <h1>Analyze your text here</h1>
<textarea className="form-control"  onChange={handleonChange} value={text} rows='8' id="myBox" style={ { backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}>Convert to UpperCase</textarea>
</div>
<div className="container mb-3">
  <button className="btn btn-primary mx-2" onClick={uperCase}>Change to Uppercase</button>
  <button className="btn btn-success mx-2" onClick={lowCase}>Change to Lowercase</button>
  <button className="btn btn-danger mx-2" onClick={clear}>Clear Text</button>
  <button className="btn btn-warning mx-2" onClick={copy}>Copy Text</button>
  <button className="btn btn-secondary mx-2" onClick={extraSpace}>Remove Space</button>
  </div>
   </div>
   <div className="container my-3" style={ {color:props.mode==='dark'?'white':'#042743'}}>
       <h3>Your Text Summary</h3>
       <p> {text.split(" ").length} words and {text.length} characters.</p>
       <p>{0.08 * text.split(" ").length} minutes read.</p>
       <h3>Preview</h3>
       <p>{text.length>0?text:"Enter Your Text To Preview Here!"}</p>
   </div>
        </>
    )
}
