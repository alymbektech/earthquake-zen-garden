import React from 'react';
import './App.css';
import { data } from './data.js'

var profile = data.profile;

function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <div className="row">
        <div className="column1">
        </div>
        <div className="column2">
        <img className="avatar" height="200px" src={profile.avatarImage} alt="avatar" />
        <table>
        <tbody>
          <tr>
            <td><strong>First Name:</strong></td>
            <td>{profile.firstName}</td>
          </tr>
          <tr>
            <td><strong>Last Name:</strong></td>
            <td>{profile.lastName}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>{profile.phone}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{profile.email}</td>
          </tr>
          <tr>
            <td><strong>Bio:</strong></td>
            <td>{profile.bio}</td>
          </tr>
        </tbody>
      </table>
        </div>
        <div className="column3">
        </div>
      </div>
    </div>
  );
}

export default Profile;
