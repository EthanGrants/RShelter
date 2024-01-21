import React from 'react';
import Map from './GoogleMap';


function Maps() {
    return <div>
        <h2> Maps Page </h2>
    </div>
}



function App() {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Map
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
}

export default App;