import React, { useState } from 'react'

export default function About() {

  const [givenStyle, setGivenStyle] = useState({ // using state to shift to dark mode

    color : "black",
    backgroundColor : "white",
    borderRadius : "10px",
    padding : "10px"

  });
  
  const[btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () =>{

   if(givenStyle.color === "white"){
    setGivenStyle({ // using state to shift to dark mode

        color : "black",
        backgroundColor : "white",
        borderRadius : "10px",
        padding : "10px"
    
      });

      let newState = "Enable Light Mode";
      setBtnText(newState)

   }else{

    setGivenStyle({ // using state to shift to dark mode

        color : "white",
        backgroundColor : "black",
        borderRadius : "10px",
        padding : "10px"
    
      });

      let newState = "Enable Dark Mode";
      setBtnText(newState)

   }
  }
  return (
    // givenStyle is one of object
    <div className='container' style={givenStyle}>
        <h2 className='head my-3'>About Us:</h2>
        <div className="accordion" id="accordionExample" style={givenStyle}>
            <div className="accordion-item" style={givenStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button" style={givenStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={givenStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={givenStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={givenStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={givenStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
        <button type="button" className="btn btn-warning" onClick={toggleStyle}>{btnText}</button>
        </div>
    </div>
  )
}