import React from 'react';
import wordpress from './assets/images/wordpress.png';
import nodejs from './assets/images/nodejs.png';
import firebase from './assets/images/firebase.jpg';
import mysql from './assets/images/mysql.png';
import react from './assets/images/react.png';
import es6 from './assets/images/es6.png';
import csshtmljs from './assets/images/csshtmljs.png';

const Aboutme = () => {

    return (
        <div className="about-me">
            <div id="work-experience">
                <h1>My Work Experience</h1>
                <p>Morgan Computing-C database programmer / analyst</p>
                <p>ACS Technology - Hardware Technician</p>
                <p>ACS Web - Web designer and Developer</p>
                <p>
                    <img class="iconimg"src={wordpress}/>
                    <img class="iconimg"src={nodejs}/>
                    <img class="iconimg"src={firebase}/>
                    <img class="iconimg"src={mysql}/>
                    <img class="iconimg"src={react}/>
                    <img class="iconimg"src={es6}/>
                    <img class="iconimg"src={csshtmljs}/>

                </p>
            </div>
            <div id="education">
                <h1>Education</h1>
                <p>BSc Computer Science & Biology</p>
                <p>City and Guilds Electrical Instalations</p>
                <p>FCC Responsive web design certification</p>
                <p>FCC Javascript algorithms and data structures certification</p>    
            </div>    
        </div>
    );
};

export default Aboutme;