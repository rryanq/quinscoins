import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import nfront from './images/placemats/nickel_front.JPEG'
import nback from './images/placemats/nickel_back.JPEG'

const CarouselStyle = styled.section`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

class NickelPlacematPictures extends Component {
    render() {
        return (
            <CarouselStyle>
                <Carousel>
                    <div>
                        <img src={nfront} />
                    </div>
                    <div>
                        <img src={nback} />
                    </div>
                </Carousel>
            </CarouselStyle>
        );
    }
}

export default NickelPlacematPictures;