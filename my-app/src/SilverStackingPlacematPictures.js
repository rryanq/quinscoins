import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import sfront from './images/placemats/silver_front.JPEG'
import sback from './images/placemats/silver_back.JPEG'

const CarouselStyle = styled.section`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

class SilverStackingPlacematPictures extends Component {
    render() {
        return (
            <CarouselStyle>
                <Carousel>
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

export default SilverStackingPlacematPictures;