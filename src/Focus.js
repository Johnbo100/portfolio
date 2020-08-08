import React from 'react';
import image1 from './assets/images/reveal.jpg';
import image2 from './assets/images/memory2.png';
import image3 from './assets/images/memory-letters.jpg';
import video1 from './assets/images/plane.mp4';
import bird from './assets/images/tenor.gif';

const Focus =(() => {
    return (
    <div>
        <div class="focus">
            <h1>My Focus</h1>
            <img id="bird" src={bird}/>
            <p>After teaching English in non English speaking countries for the last 4 
                years I have grown an interest in creating software for teachers in the
                classroom.</p>
            <p>So far I have created a few games with the intention of making them functionally 
                flexible as possible. I am always open to developing something new. So feel free to drop me 
                a message!</p>   
            <div class="projects">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            </div> 
        </div>        
    </div>
    )}    
)

export default Focus;