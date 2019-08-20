import React from 'react';

const Profile = ({ user: { username, email, signup_date } }) => {
  // console.log('Props ', props)
  return (
    <div>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Sign Up Date:</strong> {new Date(signup_date).toLocaleString()}</p>
    </div>
  );
};

export default Profile;
