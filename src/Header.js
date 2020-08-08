import React, { useState } from 'react';
import bgimage from './assets/images/headergithub.jpg';
import PopoutContact from './PopoutContact';

const Header = () => {
    
    const[images,setImage]=useState('./assets/images/headergithub.jpg')    
    console.log('image is: '+images)
    const[contact,setContact]=useState(false)
    return (
        <div>
            <img id="bg-image" src={bgimage}/>  
            <div id="blob">
                <svg viewBox="0 0 200 200">
                <path fill="#51A2DB" d="M62.9,-20.1C69.5,-0.2,54.5,27.1,31.9,43.4C9.4,59.7,-20.8,65,-42.1,51.2C-63.3,37.3,-75.6,4.4,-67.1,-18.2C-58.6,-40.7,-29.3,-52.9,-0.6,-52.7C28.2,-52.5,56.3,-40,62.9,-20.1Z" transform="translate(42 47)" />
                </svg>
            </div>
            <div id="header-text">Web Design & Development</div>
            <div id="my-name">John Kearton-Jones</div> 
            <a className="menu"  onClick={()=>setContact(!contact)}>Contact me</a>
            {contact && <PopoutContact />}
        </div>
    );
};

export default Header;