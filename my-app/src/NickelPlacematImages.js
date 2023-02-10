import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';


import nfront from './images/nfront.png'
import nback from './images/nback.png'

const frontSrcSet = [
    { src: nfront, setting: '500w' },
]
    .map(item => `${item.src} ${item.setting}`)
    .join(', ');

const backSrcSet = [
    { src: nback, setting: '500w' },
]
    .map(item => `${item.src} ${item.setting}`)
    .join(', ');

const dataSource = [
    {
        srcSet: frontSrcSet,
        small: nfront,
        large: nfront
    },
    {
        srcSet: backSrcSet,
        small: nback,
        large: nback
    }
];

class NickelPlacematImages extends Component {
    render() {
        const {
            rimProps,
            rsProps
        } = this.props;

        return (
            <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
                {...rsProps}
            >
                {dataSource.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: src.small,
                                    srcSet: src.srcSet,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: src.large,
                                    width: 1426,
                                    height: 2000
                                },
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
            </ReactSlick>
        );
    }
}

export default NickelPlacematImages;