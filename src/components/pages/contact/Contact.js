import React from 'react'
import "./Contact.css"

const Contact = () => {

  const submitContact = ()=>{
    alert("form submmited");
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("num").value = "";
    document.getElementById("message").value = "";
  }

  return (
    <>
    <div className="main-container d-flex">
      <div className="contactFormm">
          <h1 id="heading">Contact <span style={{color : "rgb(255, 104, 15)"}}>Us</span></h1>
          <div className="name d-flex">
            <label htmlFor="fname">First Name : </label>
            <input id="fname" type="text" />
            <label htmlFor="lname">Last Name : </label>
            <input id="lname" type="text" />
          </div>
          <div className="emial d-flex">
            <label htmlFor='mail'>Email : </label>
            <input id='mail' type="text" />
          </div>
          <div className='number d-flex'>
            <label htmlFor='num'>Number : </label>
            <input id="num" type="number" />
          </div>
          <div className='message d-flex'>
            <label htmlFor='message'>Message : </label>
            <textarea style={{verticalAlign : "top", resize : "none"}} name="message" id="message" cols="55" rows="7"></textarea>
          </div>
          <div>
            <button onClick={submitContact}>Submit</button>
          </div>
      </div>
    </div>
      
    </>
  )
}

export default Contact