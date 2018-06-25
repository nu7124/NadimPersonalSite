import React from 'react';
import './about.css';

class about extends React.Component {
    render() {
      return (
        <div id="aboutComp">
            <div className="aboutComp_card">
                <img src=""/>
                <h2 className="aboutComp_card_title">Mathematician</h2>
                <div className="aboutComp_card_line"></div>
                <p className="aboutComp_card_desc">Stuff about me being a software engineer, blah blach blah blach blah blach blah blach blah blach blah blach</p>
            </div>

            <div className="aboutComp_card">
                <img src=""/>
                <h2 className="aboutComp_card_title">Software Engineer</h2>
                <div className="aboutComp_card_line"></div>
                <p className="aboutComp_card_desc">Stuff about me being a software engineer, blah blach blah blach blah blach blah blach blah blach blah blach</p>
            </div>

            <div className="aboutComp_card">
                <img src=""/>
                <h2 className="aboutComp_card_title">Mathematician</h2>
                <div className="aboutComp_card_line"></div>
                <p className="aboutComp_card_desc">Stuff about me being a software engineer, blah blach blah blach blah blach blah blach blah blach blah blach</p>
            </div>
        </div>
      );
    }
}

export default about;