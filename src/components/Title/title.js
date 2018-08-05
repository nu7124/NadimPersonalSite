import React from 'react';
import './title.css';
import twitter from '../../assets/social/twitter.svg'
import linkedin from '../../assets/social/linkedin.svg'
import github from '../../assets/social/github.svg'
import medium from '../../assets/social/medium.svg'

const title = ()=> {
  return (
    <div id="title">
      <span id="title-name">Nadim Uddin</span>
      <div className="title-border"></div>
      <div className="social_grid">

        <div className="container_social_image">
          <div className="social_image" id="twitter">
            <img src={twitter} />
          </div>
        </div>

        <div className="container_social_image">
          <div className="social_image" id="medium">
            <img src={medium} />
          </div>
        </div>

        <div className="container_social_image">
          <div className="social_image" id="linkedin">
            <img src={linkedin} />
          </div>
        </div>

        <div className="container_social_image">
          <div className="social_image" id="github">
            <img src={github} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default title;