//props is pased then rendered through component

//While State belongs to component
//Here we will be making state
//we will import below useState from React
//useState is an hook
import React,{useState} from 'react'

export default function TextForm(props) {

    //making an arrow-funcn handleUpCaseClick
    const handleUpClick = ()=>{

        //console.log("Uppercase was clicked : " + text)
        let newText = text.toUpperCase();
        setText(newText)

        props.showAlert("Converted to upperCase!",'success');
    }

    const handleLoClick = ()=>{

        let newText = text.toLowerCase();
        setText(newText)

        props.showAlert("converted to lowercase!",'success');
    }

    const handleClearClick = ()=>{

        let newText= '';
        setText(newText)

        props.showAlert("text cleared!",'success');
    }


    const handleOnChange = (event)=>{

        //console.log("on change")
        setText(event.target.value)

    }

    const handleCopy = ()=>{

        //console.log("I m copy");

        var text = document.getElementById("myBox");
        text.select();
        //text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

        props.showAlert("Copied to clipboard", 'success');
    }

    const handleExtraSpaces = () =>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))


        props.showAlert("Extra spaces removed ", 'success');
    }



   // Declare a new state variable, which we'll call "text"
   const [text, setText] = useState(''); //we used arr DeStructuring Syntx
    
   //text = "new text"//->wrong way to change the state
   //setText("new text")//correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#18203c'}}>
        <h1>{props.heading} </h1>
        <div className = "mb-3">
        <textarea className="form-control" value = {text} onChange={handleOnChange} 
        style={{ backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#18203c'}} id="myBox"
        rows="8"></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text </button>

        <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove  Extra Spaces</button>
    </div>

    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#18203c'}}>
        <h1>Your Text Summary</h1>

        <p>{text.split(" ").length} words and {text.length} characters</p>

        {/*time to read number of words in minute by user*/}
        <p>{0.008 *text.split(" ").length} minutes  read</p>

        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox avove to preview it here"}</p>

    </div>
    </>
  )
}
