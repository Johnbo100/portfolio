import React, {Component} from 'react';
import Carousel from 'react-hook-carousel'
import image1 from './assets/images/laptopmawddach.png';
import image2 from './assets/images/laptopMWCAR.png';
import image3 from './assets/images/laptopVLCBT.png';

const Websites = () => {
    
  

    return (
    <div class="slide-wrap">
     
    <div class="slider">
        <img class="slide" id="slide-1" src={image1}/>
        <div class="slidetext">Joomla Website<br /><a class="link" href="#">Link</a></div>
        <img class="slide" id="slide-2" src={image2}/>
        <div class="slidetext">Pure HTML, JS and CSS<br /><a class="link" href="#">Link</a></div>
        <img class="slide" id="slide-3" src={image3}/>
        <div class="slidetext">Wordpress Website with PHP booking System<br /><a class="link"href="#">Link</a></div>
    </div>
    </div>
    )
};

export default Websites;