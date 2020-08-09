import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const PopoutContact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('default_service', 'github', e.target, 'user_4L0BxaCilmWVl5LiNk8YF')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
      return (
        <form className="popout-contact" onSubmit={sendEmail}>
          <input type="text" placeholder="Your first name (required)" required/>
                <input type="text" placeholder="Your last name (required)" required/>
                <input type="telephone" placeholder="Telephone"/>
                <textarea placeholder="Your Question" height="350" required></textarea>
                If you would like a skype call please leave your details below and the date a dn time you wish to be called
                <input type="text" placeholder="Your Skype ID"/>
                <input type="date"/>
                Time is in UK time or GMT 0<input type="time"/>
          <input type="submit" value="Send" />
        </form>
      );
    }
   
export default PopoutContact;