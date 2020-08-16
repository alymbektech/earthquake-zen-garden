import React from 'react';
import './App.css';
import Nav from './Nav'
import Details from './Details'
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { data } from './data.js'

var site = data.site;
var profile = data.profile;
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
  <div>
    <h1>Home Page</h1>
    <center>
      <div>

        <h2>{metadata.title}</h2>

        {records.map((dataDetail, index) => {
          return (<div key={index}>
            <Link to={`Details/${index}`}>{dataDetail.properties.place}</Link>,
            {dataDetail.properties.mag}, {(new Date(dataDetail.properties.time)).getUTCFullYear()}-
            {("0" + (new Date(dataDetail.properties.time).getUTCMonth() + 1)).slice(-2)}-{("0" + (new Date(dataDetail.properties.time).getUTCDate())).slice(-2)}
          </div>
          );
        })}

        <p>{data.site.title}</p>
        {/*<img alt="Background" src={data.site.heroImage}></img>*/}

      </div>
    </center>
  </div>
);

export default App;
