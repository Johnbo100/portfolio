import React, { useState } from 'react';

const PopoutContact = () => {
    const[visable,setVisable]=useState(true);

    
    if(visable){
    return (
        <div className="popout-contact">
            <div onClick={()=>setVisable(false)}>X</div>
            <form>
                <input type="text" placeholder="Your first name"/>
                <input type="text" placeholder="Your last name"/>
                <input type="telephone" placeholder="Telephone"/>
                <textarea placeholder="Your Question" height="350"></textarea>
                If you would like a skype call please leave your details below and the date a dn time you wish to be called
                <input type="text" placeholder="Your Skype ID"/>
                <input type="date"/>
                Time is in UK time or GMT 0<input type="time"/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
    }else{ return null}
}; 
   
export default PopoutContact;