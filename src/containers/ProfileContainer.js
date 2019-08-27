import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../components/Profile/Profile';
import { API_URL } from '../constants';

class ProfileContainer extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    // Axios call to get user information
  };

  render() {
    return <Profile user={this.state.user} />;
  };
};

export default ProfileContainer;
