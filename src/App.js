import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/img/logo.png';
import githubLogo from './assets/img/github-brands.svg';
import HomeScreen from './screens/Home/HomeScreen';
import ChannelsScreen from './screens/Channels/ChannelsScreen';
import './App.css';

const baseUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <Router>
      <header>
        <div className="row">
          <div className='col-7 col-sm-8 col-lg-10'>
            <Link to={baseUrl + '/' }>
              <img src={logo} alt='logo' className="App-logo" />
            </Link>
          </div>
          <div className='col-5 col-sm-4 col-lg-2'>
            <a href='https://github.com/KhaledHamoul/DzTV-Live' className='btn btn-danger star-btn'>
              Star
              <img className='github-logo' src={githubLogo} alt='github brand'></img>
            </a>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <Route exact path={baseUrl + "/" } component={HomeScreen} />
        <Route path={baseUrl + "/channels" } component={ChannelsScreen} />
        <Route path={baseUrl + "/topics" } component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
