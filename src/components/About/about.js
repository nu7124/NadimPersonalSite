import React from 'react';
import './about.css';
import dev from '../../assets/Dev.svg';
import math from '../../assets/Math.svg';


const about = ()=> {
    return (
        <div id="aboutComp">
            <h1 id="aboutComp_name">WHO AM I ?</h1>
            <div id="aboutComp_info">
                <div id="aboutComp_info_math">
                    <div className="about_img"><img src={math} /></div>
                    <div className="aboutComp_info_text" id="math_text">
                        <span id="ma">Mathematician</span>
                        <div className="divider"></div>
                        <p className="about_desc">
                            After studying math in college I decided to come back to software engineering because it provided the logical challenge I needed but also provided the real world application which theoretical math lacked.
                        </p>
                    </div>
                </div>

                <div id="aboutComp_info_dev">
                    <div className="about_img" id="dev_image"><img src={dev}  /></div>
                    <div className="aboutComp_info_text" id="dev_text">
                        <span id="se">Software Engineer</span>
                        <div className="divider"></div>
                        <p className="about_desc">
                            After studying math in college I decided to come back to software engineering because it provided the logical challenge I needed but also provided the real world application which theoretical math lacked.
                        </p>
                    </div>
                </div>

                <div id="aboutComp_info_enthu">
                    <div className="about_img"><img src={math} /></div>
                    <div className="aboutComp_info_text" id="enthu_text">
                        <span id="enthu">Enthusiast</span>
                        <div className="divider"></div>
                        <p className="about_desc">
                            After studying math in college I decided to come back to software engineering because it provided the logical challenge I needed but also provided the real world application which theoretical math lacked.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


export default about;