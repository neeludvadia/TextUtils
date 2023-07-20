import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("upper case clicked " + text);
        let newText = text.toUpperCase();
        setText (newText)
        props.showAlert("converted to upper case", "success")
    }

        const handleClearclick = ()=>{
        let newText = '';
        setText (newText)
        props.showAlert("textbox has been cleared", "success")
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText (newText)
        props.showAlert("converted to lower case", "success")
    }

        
    

    const handleOnChange = (event)=> {
        // console.log("On change");
        setText (event.target.value)
    }

    
    

    const [text, setText] = useState('');
    return(
        <>
            <div className = "container" style= {{color:props.mode==='dark'?'white':'#042743'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{ backgroundcolor:props.mode==='dark'?'#02122a':'white', color: props.mode==="dark"?'white':'#042743'}}value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2"  style={{ background:props.mode2==='dark'?'green':'blue'}} onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear</button>
              
        </div>

        <div className= "container" my-3 style= {{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length}</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something int eh text box to preview it"}</p>
            </div>
        </>
    )
}