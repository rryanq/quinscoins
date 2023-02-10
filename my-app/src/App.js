import React, { Component } from 'react';
import styled from 'styled-components';
import ProductPage from './ProductPage.js'
import HomePage from './HomePage.js'
import MyGearPage from './MyGearPage.js'
import AboutPage from './AboutPage.js'
import logo from './images/logo.png'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import './App.css';
// import theme from './theme';
//import { Image } from 'react-native'

const Wrapper = styled.section`
  margin: auto;
`;

const PageWrapper = styled.section`
  margin: 50px auto;
  text-align: center;
`;

// FIXME: dimensions
const LogoImage = styled.img`
  height: 38px;
  width: 225px;
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const TopBar = styled.section`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 50px;
  font-size: 25px;
  background-color: green;
  overflow: hidden;
  z-index: 10
  display: flex;
  align-items: center;
`;

const HeaderButton = styled.button`
  top: 5px;
  color: white;
  text-decoration: none;
  padding: 10px;
  font-size: 25px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: darkgreen;
  }
`;

class App extends Component {

  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {
      openPage: 'shop'
    };
    this.handleHeaderButtonClick = this.handleHeaderButtonClick.bind(this);
  }

  handleHeaderButtonClick(page) {
    this.setState({ openPage: page });
  }

  render() {
    let content = <div>Nothing here!</div>
    if (this.state.openPage === 'home') {
      content = <HomePage/>
    } else if (this.state.openPage === 'shop') {
      content = <ProductPage/>
    } else if (this.state.openPage === 'gear') {
      content = <MyGearPage/>
    } else if (this.state.openPage === 'about') {
      content = <AboutPage/>
    } else {
      content = <div>Nothing here!</div>
    }

    return (
      <Wrapper>
        <TopBar>
          <LogoImage
            src={logo}
          />
          <HeaderButton
            onClick={() => this.handleHeaderButtonClick('home')}
          >
            Home
          </HeaderButton>
          <HeaderButton
            onClick={() => this.handleHeaderButtonClick('shop')}
          >
            Shop
          </HeaderButton>
          <HeaderButton
            onClick={() => this.handleHeaderButtonClick('gear')}
          >
            My Gear
          </HeaderButton>
          <HeaderButton
            onClick={() => this.handleHeaderButtonClick('about')}
          >
            About
          </HeaderButton>
        </TopBar>
        <PageWrapper>
          {content}
          <p>&copy;{new Date().getFullYear()} Quinlan Productions LLC All Rights Reserved</p>
        </PageWrapper>
      </Wrapper>
    );
  }
}

export default App;
