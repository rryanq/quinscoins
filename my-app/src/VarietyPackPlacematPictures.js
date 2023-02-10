import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import pfront from './images/placemats/penny_front.JPEG'
import pback from './images/placemats/penny_back.JPEG'
import nfront from './images/placemats/nickel_front.JPEG'
import nback from './images/placemats/nickel_back.JPEG'
import sfront from './images/placemats/silver_front.JPEG'
import sback from './images/placemats/silver_back.JPEG'

const CarouselStyle = styled.section`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

class VarietyPackPlacematPictures extends Component {
    render() {
        return (
            <CarouselStyle>
                <Carousel>
                    <div>
                        <img src={pfront} />
                    </div>
                    <div>
                        <img src={pback} />
                    </div>
                    <div>
                        <img src={nfront} />
                    </div>
                    <div>
                        <img src={nback} />
                    </div>
                    <div>
                        <img src={sfront} />
                    </div>
                    <div>
                        <img src={sback} />
                    </div>
                </Carousel>
            </CarouselStyle>
        );
    }
}

export default VarietyPackPlacematPictures;