import React, { useState, useEffect } from 'react';
import './App.css';
import NavWrapper from './Components/NavWrapper';
import SubNav from './Components/SubNav';
// import AppleData from './AppleData';

function App() {
  // const [items, setItems] = useState();
  // useEffect(() => {
  //   setItems(AppleData);
  // }, [])
  
  return (
    <div className="App">
      <NavWrapper />
      <SubNav  />
    </div>
  );
}

export default App;
