import React, { Component } from 'react';
import styled from 'styled-components';

const config = require('./config.json');

class MyGearPage extends Component {

  render() {
    // FIXME: doesn't work
    if( window.canRunAds === undefined ){
      // adblocker detected, show fallback
      // showFallbackImage();
      alert('adblock detected!')
    }
    return(
      <div>My Gear Page</div>
    );
  }
}

export default MyGearPage;
