import React, { Component } from 'react';
import styled from 'styled-components';
import ryanProfile from './images/ryan_profile.jpg';
import kevinProfile from './images/kevin_profile.jpeg';

const config = require('./config.json');

const AboutImage = styled.img`
  height: 300px;
  width: 300px;
`;

class AboutPage extends Component {

  render() {
    return(
			<div>
        <p>
          <AboutImage src={ryanProfile}/>
        </p>
				<p><b>Ryan Quinlan</b></p>
				<div>
				  <p>Ryan Quinlan is the creator of the "Quin's Coins" YouTube channel. His channel is dedicated to coin collecting and
					   modern day treasure hunting and he posts new videos every Saturday.</p>
				</div>
				<p>
          <AboutImage src={kevinProfile}/>
        </p>
				<p><b>Kevin Quinlan</b></p>
				<div>
				  <p>Kevin Quinlan is the brother of Ryan Quinlan. On a day to day basis, Kevin studies in the field of numismatics
						 by purchasing and selling rare coins. Most of this activity occurs on his Instagram account which can be found&nbsp;
						 <b><a href="https://bit.ly/2Hnrs8x">here</a></b>. He strongly believes in the value of reading coin related literature
						 in order to build a foundation for numismatic success and maximum enjoyment in the hobby.</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
