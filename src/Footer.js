import React from 'react';
import PopoutContact from './PopoutContact';


const Footer = () => {
    return (
        <div className="footer">
            <div id="l-footer"><h1>Contact me</h1>
                <p>johnkeartonjones@gmail.com</p>
                <p>Tel:0151 336 2581</p>
                <button >Send me a message</button>
            </div>
            <div id="r-footer"><h1>More on me</h1><p>facebook</p></div>
        </div>
    );
};

export default Footer;