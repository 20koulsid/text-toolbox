import React, { useState } from 'react'

export default function About(props) {
    

    let myStyle = {
        color: props.mode === 'dark'?'white':'#750E21',
        backgroundColor: props.mode === 'dark' ? '#750E21':'white',
        border:'2px solid',
        borderColor: props.mode === 'dark' ? 'white' : '#750E21',
        
    }
    
  return (
    <>
    <div className="container mx-3 my-4" style={{color:props.mode === 'dark'?'white':'#750E21',}}>
    <h1 className="mt-4">About Us</h1>
    <div className="accordion my-4" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            Our text analyzer app focuses on providing a detailed breakdown of formatting and structure without performing grammar checks. It helps you analyze UPPERCASE, lowercase, and other stylistic aspects such as text length, word count, and character usage. The app ensures that your text maintains consistency in formatting and highlights areas where you might overuse CAPITAL LETTERS or underutilize other styles. Whether you are  crafting professional content or casual messages, our app gives you insights into how your text is structured, helping you refine and optimize it without delving into grammar corrections.

        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong>Free to Use</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            Our app is completely free to use! You can take advantage of all its powerful features without any cost. Whether you need to analyze UPPERCASE, lowercase, text structure, or formatting consistency, the app provides valuable insights without any subscription or hidden fees. Enjoy unlimited access to refine and enhance your text effortlessly, all at no charge.
            
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={myStyle}data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong> Browser Compatible </strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            Our app is fully browser-compatible, allowing you to access it on any modern web browser without the need for downloads or installations. Whether you're using Chrome, Firefox, Safari, or Edge, the app works seamlessly, providing you with the same powerful text analysis features across all platforms. It’s optimized for desktop, tablet, and mobile browsers, so you can analyze and enhance your text anytime, anywhere, with ease.
        </div>
        </div>
    </div>
    </div>
    </div>
    </>
  )
}
