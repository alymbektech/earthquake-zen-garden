import React from 'react';
import './App.css';
import Nav from './Nav'
import Details from './Details'
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { data } from './data.js'

var metadata = data.data.metadata;
var records = data.data.features;

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Details/:id" component={Details} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <center>
    <h2>{metadata.title}</h2>
    <table>
      <tbody>
        <tr>
          <th>Place</th>
          <th>Magnitude</th>
          <th>Time</th>
        </tr>
        {records.map((dataDetail, index) => {
          return (
            <tr key={index}>
              <td><Link to={`Details/${index}`}>{dataDetail.properties.place}</Link></td>
              <td style={{width: "50px", textAlign: "center"}}>{dataDetail.properties.mag}</td>
              <td>{(new Date(dataDetail.properties.time)).getUTCFullYear()}-{("0" + (new Date(dataDetail.properties.time).getUTCMonth() + 1)).slice(-2)}-{("0" + (new Date(dataDetail.properties.time).getUTCDate())).slice(-2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </center>
);

export default App;
