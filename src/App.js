import './App.css';
// Import Home, Weather, Transportation, Maps, Resources
import React from 'react';
import Home from './Home';
import Weather from './Weather';
import Transportation from './Transportation';
import Maps from './Maps';
import Resources from './Resources';
import Layout from './Layout';
import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
  <ChakraProvider>
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
   </ChakraProvider>
  );
  
}

export default App;
