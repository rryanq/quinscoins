//import './styles/react-slick.css';
import React, { Component } from 'react';
import PaypalButton from './PaypalButton';
import styled from 'styled-components';
import PennyPlacematPictures from './PennyPlacematPictures.js'
import NickelPlacematPictures from './NickelPlacematPictures.js'
import SilverStackingPlacematPictures from './SilverStackingPlacematPictures.js'
import VarietyPackPlacematPictures from './VarietyPackPlacematPictures';

import NickelPlacematImages from './NickelPlacematImages.js'
import shoppingCart from './images/shopping-cart.png'

const config = require('./config.json');

// TODO: take these keys out of this file, replace with process.env stuff
const CLIENT = config.CLIENT
const ENV = config.ENV

//require('dotenv').config()

/*
const CLIENT = {
  sandbox: 'process.env.PAYPAL_CLIENT_ID_SANDBOX',
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};
*/

// TODO: make the below statement work
/*
const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';
*/

const ViewCartButton = styled.section`
  position: fixed;
  right: 0px;
  padding: 1em;
  z-index: 1000;
`;

const Product = styled.section`
  width: 80%;
  padding: 3em;
  position: relative;
  display: block;
  align-items: center;
  justify-content: center;
  // background-color: #ffcc5c;
  margin: auto;
`;

const ProductImage = styled.img`
  height: 300px;
  width: 400px;
`;

const NickelPlacematImagesStyle = styled.section`
  max-height: 300px;
  max-width: 400px;
`


class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pennyImages: ['./images/front.png', './images/back.png']
      // pennyImages: [pfront, pback]
    };
  }

  render() {
    const onSuccess = (payment) =>
      console.log('Successful payment!', payment);

    const onError = (error) =>
      console.log('Erroneous payment OR failed to load script!', error);

    const onCancel = (data) =>
      console.log('Cancelled payment!', data);

    return (
      <div>
        <ViewCartButton>
          <form target="self" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <input type="image" src={shoppingCart} border="0" name="submit" alt="shopping cart icon" height="40px" width="40px" />
          </form>
          <form target="self" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          </form>
        </ViewCartButton>

        <Product>
          <div>
            <p><b>Small Cent Coin Roll Hunting Placemat</b></p>
            <PennyPlacematPictures></PennyPlacematPictures>
            <form target="self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="BFRT3Y5AAJZAC" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            </form>

            <p>
              <b>Description: </b>
              This placemat is the perfect tool for anybody who coin roll hunts pennies! The front side 
              contains high quality images of virtually every type of penny you will encounter in a penny 
              roll. The back side contains lists of rare and semi-rare Lincoln cents- these
              are the coins that you want to be on the lookout for! The back side also has the official Quin's 
              Coins small cent roll hunting competition score sheet which you can use to score your penny boxes, 
              or use in a coin roll hunting competition against a friend. If you coin roll hunt pennies, this
              is the placemat for you!
            </p>
          </div>
        </Product>
        <Product>
          <div>
            <p><b>Nickel Coin Roll Hunting Placemat</b></p>
            <NickelPlacematPictures></NickelPlacematPictures>
            <form target="self" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HM9QR7ZS297KE" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            </form>
            <p>
              <b>Description: </b>
              This placemat is the perfect tool for anybody who coin roll hunts nickels! The front side 
              contains high quality images of virtually every type of nickel you will encounter in a nickel 
              roll. The back side contains lists of rare and semi-rare Jefferson and Buffalo nickels- these
              are the coins that you want to be on the lookout for! The back side also has the official Quin's 
              Coins nickel roll hunting competition score sheet which you can use to score your nickel boxes, 
              or use in a coin roll hunting competition against a friend. If you coin roll hunt nickels, this
              is the placemat for you!
            </p>
          </div>
        </Product>
        <Product>
          <div>
            <p><b>Silver Stacking Coin Roll Hunting Placemat</b></p>
            <SilverStackingPlacematPictures></SilverStackingPlacematPictures>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="KUV43PGVB9TXG" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            </form>

            <p>
              <b>Description: </b>
              This placemat has everything you need to get started coin roll hunting for silver coins! The
              front side features virtually every type of dime, quarter, and half dollar that you will come
              across in your hunts. The back side shows you how to identify a silver coin by date, color, and
              even weight in grams. It also shows you a few other dimes, quarters, and half dollars to be on the
              lookout for, including Canadian silver! If you are looking for silver coins, this is the placemat
              for you!
            </p>
          </div>
        </Product>
        <Product>
          <div>
            <p><b>Coin Roll Hunting Placemat Variety Pack</b></p>
            <VarietyPackPlacematPictures></VarietyPackPlacematPictures>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="65CCHEL5WH6X6" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
            </form>

            <p>
              <b>Description: </b>
              Get 1 small cent, 1 nickel, and 1 silver stacking placemat for only $40!
            </p>
          </div>
        </Product>
        <br/>
      </div>
    );
  }
}

export default ProductPage;
