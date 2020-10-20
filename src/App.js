import React from 'react';
import './App.css';
//import components
import NavBar from './components/NavBar/navBar.component';
import Carousal from './components/carousal/carousal.component';
import TitleMessage from './components/titleMessage/titleMessage.component';
const  App = () => {
  return (
     <div>
       <NavBar />
       <Carousal />
       <TitleMessage />
     </div>
  );
};

export default App;
