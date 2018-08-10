import React from 'react';
import './about.css';
import dev from '../../assets/Dev.svg';
import math from '../../assets/Math.svg';
import enthu from '../../assets/Enthusiast.svg'


const about = ()=> {
    return (
        <div id="aboutComp">
            <h1 id="aboutComp_name">WHO AM I ?</h1>
            <div id="aboutComp_info">
                <div id="aboutComp_info_dev">
                    <div className="about_img" ><img src={dev}  /></div>
                    <div className="aboutComp_info_text" id="dev_text">
                        <span id="se">Software Engineer</span>
                        <div className="divider"></div>
                        <p className="about_desc">
                            After college I came back to software engineering because it provided the logical challenge I loved but also provided the real world application which theoretical math lacked. I am proficient in full stack JavaScript with React and Node but I am language agnostic and welcome the opportunity to learn new stacks.
                        </p>
                    </div>
                </div>

                <div id="aboutComp_info_math">
                    <div className="about_img" id="math_image"><img src={math} /></div>
                    <div className="aboutComp_info_text" id="math_text">
                        <span id="ma">Mathematician</span>
                        <div className="divider"></div>
                        <p className="about_desc">
                            During college I chose to study Math and Physics because I loved the logical challenges they provided. Studying different topics such as Linear Algebra, Probability, and Graph Theory gave me a very strong analytical mindset to go into my other interests like Machine Learning, Blockchain, and more.
                        </p>
                    </div>
                </div>


                <div id="aboutComp_info_enthu">
                    <div className="about_img"><img src={enthu} /></div>
                    <div className="aboutComp_info_text" id="enthu_text">
                        <span id="enthu">Enthusiast</span>
                        <div className="divider"></div>
                        <p className="about_desc">
                            I am passionate about learning cutting edge technology that can make a difference in the world. My current interests are in Machine Learning and Blockchain, I am fascinated by how these technologies can create products that can meaningfully impact the world.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


export default about;