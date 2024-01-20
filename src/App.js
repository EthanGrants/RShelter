import './App.css';
// Import Home, Weather, Transportation, Maps, Resources
import React from 'react';
import Home from './Home';
import Weather from './Weather';
import Transportation from './Transportation';
import Maps from './Maps';
import Resources from './Resources';


import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
   <Router>
    <div className = "App">
      <Route path = "/Home" component = {Home} />
      <Route path = "/Weather" component = {Weather} />
      <Route path = "/Transportation" component = {Transportation} />
      <Route path = "/Maps" component = {Maps} />
      <Route path = "/Resources" component = {Resources} />
      
    </div>
   </Router>
  );
}

export default App;
