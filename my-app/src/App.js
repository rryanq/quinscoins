import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          <title>Quin's Coins Home Page</title>
          <link rel="icon"
            type="image/png"
            href="http://www.quinscoins.com/favicon.ico" />
          <link rel="stylesheet" href="static/css/styles.css" />
        </head>
        <body>
          <div class="wrap">
            <h1><b>Welcome to the Official</b></h1>
            <img src="/static/images/logo.png" alt="Quin's Coins Logo" class="center" />
            <h1><b>Website!</b></h1>
            <div class="menu-items">
              <div class="menu-item">
                <b><a href="/">Home</a></b>
              </div>
              <div class="menu-item">
                <b><a href="/#shop">Shop</a></b>
              </div>
              {/*<p><a href="/playlists/">Video Series</a></p>*/}
              {/*<p><a href="/gear/">My Gear and Supplies</a></p>*/}
              <div class="menu-item">
                <b><a href="/gear.html">My Gear and Supplies</a></b>
              </div>
              {/*<p><a href="/about/">About</a></p>*/}
              <div class="menu-item">
                <b><a href="/about.html">About</a></b>
              </div>
              {/*<p><a href="/terms/">Coin Roll Hunting Terminology <i>(beta)</i></a></p>*/}
            </div><br/>
            <a name="shop" />
            <div class="boxed">
              <h1><b>Quin's Coins Laminated<br/>
              American Cent Placemat</b></h1>
              <a href="/static/images/front.JPG"><img src="/static/images/front.JPG" alt="front of placemat" class="center" /></a><br/>
              <a href="/static/images/back.JPG"><img src="/static/images/back.JPG" alt="back of placemat" class="center" /></a><br/>
              <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="WNRQ82NTMDXWY" />
                  <table align="center">
                      <tr><td><input type="hidden" name="on0" value="Select Quantity" />Select Quantity</td></tr><tr><td><select name="os0">
                        <option value="Buy 1 Placemat">Buy 1 Placemat $15.00 USD</option>
                        <option value="Buy 2 Placemats">Buy 2 Placemats $25.00 USD</option>
                      </select> </td></tr>
                  </table>
                  <input type="hidden" name="currency_code" value="USD" />
                  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" /><br/><br/>
                </form>
              </div>
              <br/>
              <div class="boxed">
                <span><p><b>Order Information</b></p></span>
                <p>
                  Shipping to USA only <br/>
                  $15 for 1 placemat, $25 for 2 placemats <br/>
                  Free Shipping! <br/>
                  Limit of (2) placemats per order<br/>
                  Orders are shipped out once a week on Monday mornings<br/><br/>
                  Have a question about your order? Send me an email at QuinsCoins@gmail.com<br/>
                </p>
              </div>
              <br/><br/><p>&copy;2018 Quinlan Productions LLC All Rights Reserved</p>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
