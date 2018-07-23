import React from 'react';
import './about.css';
import dev from '../../assets/Dev.svg';
import math from '../../assets/Math.svg';


const about = ()=> {
    return (
        <div id="aboutComp">
            <h1 id="aboutComp_name">Who am I?</h1>
            <div id="aboutComp_info">
                <div id="aboutComp_info_math">
                    <div className="about_img"><img src={math} /></div>
                    <div className="aboutComp_info_text" id="math_text">
                        <span id="ma">Mathematician</span>
                        <p className="about_desc">
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                        </p>
                    </div>
                </div>

                <div id="aboutComp_info_dev">
                    <div className="about_img" id="dev_image"><img src={dev}  /></div>
                    <div className="aboutComp_info_text" id="dev_text">
                        <span id="se">Software Engineer</span>
                        <p className="about_desc">
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                        </p>
                    </div>
                </div>

                <div id="aboutComp_info_math">
                    <div className="about_img"><img src={math} /></div>
                    <div className="aboutComp_info_text" id="math_text">
                        <span id="ma">Mathematician</span>
                        <p className="about_desc">
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


export default about;