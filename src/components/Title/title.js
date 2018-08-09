import React from 'react';
import './title.css';
import twitter from '../../assets/social/twitter.svg'
import linkedin from '../../assets/social/linkedin.svg'
import github from '../../assets/social/github.svg'
import medium from '../../assets/social/medium.svg'
import city from '../../assets/city.jpg'
import email from '../../assets/social/email.svg'

const title = ()=> {
  return (
      <div id="title">
        <div>
        <span id="title-name">N A D I M</span>
        <div className="title-border"></div>
        <div className="social_grid">

          {/* <div className="container_social_image">
            <div className="social_image" id="twitter">
              <img src={twitter} />
            </div>
          </div> */}

          <div className="container_social_image">
            <div className="social_image" id="email">
              <img src={email} />
            </div>
          </div>

          <div className="container_social_image">
            <div className="social_image" id="linkedin">
              <img src={linkedin} />
            </div>
          </div>

          <div className="container_social_image">
            <div className="social_image" id="medium">
              <img src={medium} />
            </div>
          </div>


          <div className="container_social_image">
            <div className="social_image" id="github">
              <img src={github} />
            </div>
          </div>

        </div>

        </div>
      </div>
  );
}

export default title;