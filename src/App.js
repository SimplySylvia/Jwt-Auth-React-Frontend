import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './config/routes';
import NavBar from './components/Layout/NavBar';

import './App.css';

class App extends Component {
  state = {
    currentUser:null, //set curent user from local storage token 
  };

  setCurrentUser = (token) => {
    // set user token
  };

  logout = () => {
    // handle logout
  };

  render() {
    return (
      <>
        <NavBar currentUser={this.state.currentUser} logout={this.logout} />
        <div className="container">
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        </div>
      </>
    );
  };
};

export default withRouter(App);
