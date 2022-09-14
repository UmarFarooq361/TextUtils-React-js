

import React , {useState} from 'react'

export default function Form(props) {
    
    const ChangeUpper = ()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase" ,"success")
    }
    const ChangeLower = ()=>{
        let newText= text.toLowerCase();
        props.showAlert("Converted to LowerCase" ,"success")
        setText(newText);
    }
    const clear = ()=>{
        props.showAlert("Text is cleared" ,"danger")
        // let newText= text.toLowerCase();
        setText("");
    }
    const copyText = ()=>{
        let newText= document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Text has been copied to clipboard!" ,"info")
    }
    const removeExtraSpaces = ()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra spaces has been removed" ,"success")
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const countWords =(s)=>{
        s = s.replace(/\n/g,' '); // newlines to space
        s = s.replace(/(^\s*)|(\s*$)/gi,''); // remove spaces from start + end
        s = s.replace(/[ ]{2,}/gi,' '); // 2 or more spaces to 1
        return s.split(' ').length; 
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className='container my-3'style={{color:props.mode==="dark"?"white":"black"}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control " id="myBox" value={text}placeholder="Enter your text " 
                onChange={handleOnChange} rows="6" style={{backgroundColor:props.mode==="dark"?"#151A36":"white",color:props.mode==="dark"?"white":"black"}}></textarea>
                <div>
                <button className='btn btn-primary mt-4' onClick={ChangeUpper}>Convert to Uppercase</button>
                <button className='btn btn-primary mt-4 mx-3' onClick={ChangeLower}>Convert to lowercase</button>
                <button className='btn btn-primary mt-4 mx-3' onClick={copyText}>Copy Text</button>
                <button className='btn btn-primary mt-4 mx-3' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-primary mt-4 mx-3' onClick={clear}>Clear All Text</button>
                </div>
            </div>
        </div>
        <div className="container"style={{color:props.mode==="dark"?"white":"black"}}>
            <h3>Your Text Summary </h3>
            <h5>{`${text.length=== 0 ? 0 : countWords(text)}`} Words and {text.length} Characters</h5>
            {/* <h5>{text.split(" ").length-1} Words and {text.length} Characters</h5> */}
            <h5>{(0.02*(text.length=== 0 ? 0 : countWords(text)))} Minutes required to read this .</h5>
            <h3>Text Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
