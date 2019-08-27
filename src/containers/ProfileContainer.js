import React, { Component } from 'react';
import axios from 'axios';
import Profile from '../components/Profile/Profile';
import { API_URL } from '../constants';

class ProfileContainer extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    axios.get(`${API_URL}/users`, {  headers: { authorization: `Bearer ${localStorage.uid}` }  })
      .then(res => {
        console.log(res)
        this.setState({ user: res.data.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return <Profile user={this.state.user} />;
  };
};

export default ProfileContainer;
