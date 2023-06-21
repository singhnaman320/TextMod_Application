// type rfc and press enter
import React, {useState} from 'react'

// useState: for state in react
export default function TextForm(props) {

    const handleUpClick = () =>{ // from below

        // console.log("Uppercase button is clicked" + text);

        let newText = text.toUpperCase();
        setText(newText);   
        
        if(text.length > 0){

            props.showingAlert("Converted to UpperCase successfully!", "success"); // for alert

        }else{

            props.showingAlert("Please provide required text!", "warning"); // for alert 

        }
        
    }

    const handleLowerClick = () =>{  // from below

        let newText = text.toLowerCase();
        setText(newText);

        if(text.length > 0){

            props.showingAlert("Converted to LowerCase successfully!", "success"); // for alert

        }else{

            props.showingAlert("Please provide required text!", "warning"); // for alert

        }
        
    }

    const clearTextClick = () =>{

        let newText = "";
        setText(newText);

        if(text.length > 0){

            props.showingAlert("Text cleared successfully!", "success"); // for alert

        }else{

            props.showingAlert("Text box doesn't contain any text!", "warning"); // for alert

        }
       
    }

    const handleCopy = () =>{

        let copyText = document.getElementById("myBox");
        copyText.select();
        //copyText.setSelectionRange(0, 999);
        navigator.clipboard.writeText(copyText.value);

        if(text.length > 0){

            props.showingAlert("Text copied successfully!", "success"); // for alert

        }else{

            props.showingAlert("Text box doesn't contain any text to copy!", "warning"); // for alert

        }
        
    }

    const handleExtraSpaces = () =>{

        let textSpaces = text.split(/[ ]+/); 
        setText(textSpaces.join(" "));

        if(text.length > 0){

            props.showingAlert("Removed extra spaces from given text successfully!", "success"); // for alert

        }else{

            props.showingAlert("Please provide required text!", "warning"); // for alert
        }
       
    }

    const handleOnChange = (event) =>{  // As soon as we change some text in our text box, we will get a event object by itself

        // console.log("On Change");
        setText(event.target.value); // It means that the new value we type will add on previous text value (without it we can't write anything)
    }

    const[text, setText] = useState("Enter Text Here"); // default: text = "Enter Text Here" and to set it use function of setTest
    // text = "new Text" ==> wrong way
    // setText("new Text") ==> Correct Way
    return (
        <>
        <div className='container' style = {{color: props.presentMode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            {/* Must change className to classNameName using ctrl+f */}
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.presentMode==='dark'?'grey':'white', color: props.presentMode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                {/* In style={{}} First bracket: To write Javascript, Second Bracket: For object */}
            </div>
            <button className="btn btn primary bg-warning" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn primary mx-3 bg-warning" onClick={handleLowerClick}>Convert To LowerCase</button>
            <button className="btn btn primary bg-warning" onClick={clearTextClick}>Clear Text</button>
            <button className="btn btn primary mx-3 bg-warning" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn primary bg-warning" onClick={handleExtraSpaces}>Remove Extra spaces</button>

        </div>

        <div className="container my-2" style = {{color: props.presentMode==='dark'?'white':'black'}}>
            <h2>Your text summary:</h2>
            <p>{text.length > 0 ? text.split(" ").length : 0} words and { text.length > 0 ? text.length - text.split(/[ ]+/).length + 1 : 0} characters</p>
            <p>Fun Fact: Minimum {0.003*text.split(" ").length} minutes is required to read a single word</p>
            <h2>Preview:</h2>
            <p>{text.length > 0 ? text : "Enter something to preview here:"}</p>
        </div>
        </>
    )
}