import React, { Component } from 'react';
import PaypalButton from './PaypalButton';
import styled from 'styled-components';

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

class ProductPage extends Component {

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
        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----" />
          <input type="image" src="https://image.flaticon.com/icons/png/512/34/34627.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" height="40px" width="40px" />
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </ViewCartButton>

        <Product>
          <div>
            <ProductImage
              src={require('./images/nfront.png')}
            />
            <ProductImage
              src={require('./images/nback.png')}
            />
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="HM9QR7ZS297KE" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </Product>
        <Product>
          <div>
            <ProductImage
              src={require('./images/front.png')}
            />
            <ProductImage
              src={require('./images/back.png')}
            />
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="BFRT3Y5AAJZAC" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
          </div>
        </Product>

        <br/>

        <PaypalButton
          client={CLIENT}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={15}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />
      </div>
    );
  }
}

export default ProductPage;
