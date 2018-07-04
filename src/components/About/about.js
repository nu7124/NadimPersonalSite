import React from 'react';
import './about.css';

const about = ()=> {
    return (
        <div id="aboutComp">
            <h1 id="aboutComp_name">Who am I?</h1>
            <div id="aboutComp_info">
                <div id="aboutComp_info_math">
                    <img src="./../../assets/Math.svg" height="87px" width="87px"/>
                    <div class="aboutComp_info_text">
                        <span id="ma">Mathematician</span>
                        <p>blah blahblahblahblahblahblahblahblah blah blahblahblah blah blah blah blah blah blah blah blah blah blah </p>
                    </div>
                </div>
                <div id="aboutComp_info_dev">
                    <div class="aboutComp_info_text">
                        <span id="se">Software Engineer</span>
                        <p>blah blahblahblahblahblahblahblahblah blah blahblahblah blah blah blah blah blah blah blah blah blah blah </p>
                    </div>
                    <img />
                </div>
            </div>
        </div>
    );
}


export default about;