import React from 'react';
import './App.css';
import { data } from './data.js'

var records = data.data.features;

function Details({ match }) {
  var id = match.params.id;

  return (
    <div>
      <h2>{records[id].properties.title}</h2>
      <center>
        <table>
          <tbody>
            <tr>
              <td><strong>Place</strong></td>
              <td>{records[id].properties.place}</td>
            </tr>
            <tr>
              <td><strong>Magnitude</strong></td>
              <td>{records[id].properties.mag}</td>
            </tr>
            <tr>
              <td><strong>Time</strong></td>
              <td>{records[id].properties.time}</td>
            </tr>
            <tr>
              <td><strong>Status</strong></td>
              <td>{records[id].properties.status}</td>
            </tr>
            <tr>
              <td><strong>Tsunami</strong></td>
              <td>{records[id].properties.tsunami}</td>
            </tr>
            <tr>
              <td><strong>Type</strong></td>
              <td>{records[id].properties.type}</td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default Details;
