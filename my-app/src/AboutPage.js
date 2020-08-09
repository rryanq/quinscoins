import React, { Component } from 'react';
import styled from 'styled-components';

const config = require('./config.json');

const AboutImage = styled.img`
  height: 300px;
  width: 400px;
`;

class AboutPage extends Component {

  render() {
    return(
			<div>
        <p>
          <AboutImage
            src={require('./images/ryan_profile.jpg')}
          />
        </p>
				<p><b>Ryan Quinlan</b></p>
				<div>
				  <p>Ryan Quinlan is a student at the University of Michigan studying computer science and business. He is better known
					   online as Quin, the creator of the "Quin's Coins" YouTube channel. His channel is dedicated to coin collecting and
					   modern day treasure hunting and he posts new videos every Saturday at 12PM EST.</p>
				</div>
				<p>
          <AboutImage
            src={require('./images/kevin_profile.jpeg')}
          />
        </p>
				<p><b>Kevin Quinlan</b></p>
				<div>
				  <p>Kevin Quinlan is the brother of Ryan Quinlan. On a day to day basis, Kevin studies in the field of numismatics
						 by purchasing and selling rare coins. Most of this activity occurs on his Instagram account which can be found 
						 <b><a href="https://bit.ly/2Hnrs8x">here</a></b>. He strongly believes in the value of reading coin related literature
						 in order to build a foundation for numismatic success and maximum enjoyment in the hobby.</p>
        </div>
      </div>
    );
  }
}

export default AboutPage;
