import React from 'react';
import RoutesConfig from './RoutesConfig'; 
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <RoutesConfig /> {/* Render the RoutesConfig component */}
    </div>
  );
}

export default App;
