import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import pfront from './images/placemats/penny_front.JPEG'
import pback from './images/placemats/penny_back.JPEG'

const CarouselStyle = styled.section`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

class PennyPlacematPictures extends Component {
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
                </Carousel>
            </CarouselStyle>
        );
    }
}

export default PennyPlacematPictures;