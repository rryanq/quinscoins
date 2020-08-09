import React, { Component } from 'react';
import styled from 'styled-components';
import ProductPage from './ProductPage.js'
import HomePage from './HomePage.js'
import MyGearPage from './MyGearPage.js'
import AboutPage from './AboutPage.js'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import './App.css';
// import theme from './theme';
//import { Image } from 'react-native'

const Wrapper = styled.section`
  text-align: center;
  margin: auto;
`;

const PageWrapper = styled.section`
  margin: 50px auto;
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
`;

const HeaderButton =styled.button`
  position: relative;
  top: 5px;
  color: white;
  text-decoration: none;
  float: left;
  display: block;
  padding: 5px;
  font-size: 25px;
  background-color: transparent;
  border: none;
  font-weight: bold;
`;

class App extends Component {

  componentDidMount() {

  }

  constructor(props) {
    super(props);
    this.state = {
      openPage: 'home'
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
        </PageWrapper>
        <p>&copy;{new Date().getFullYear()} Quinlan Productions LLC All Rights Reserved</p>
      </Wrapper>
    );
  }
}

export default App;
