import './App.css';
// Import Home, Weather, Transportation, Maps, Resources
// import React, { useEffect, useState } from "react";
import React from 'react';
import Home from './Home';
import Weather from './Weather';
import Transportation from './Transportation';
import Maps from './Maps';
import Resources from './Resources';
import Layout from './Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Layout />}>
          {/* slash gets there */}
          <Route index element={<Home />} />
          <Route path="weather" element={<Weather />} />
          <Route path="transportation" element={<Transportation />} />
          <Route path="maps" element={<Maps />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
