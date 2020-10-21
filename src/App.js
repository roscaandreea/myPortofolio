import React from 'react';
import './App.css';
import Roll from 'react-reveal/Roll';
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
//import components
import NavBar from './components/NavBar/navBar.component';
import Carousal from './components/carousal/carousal.component';
import TitleMessage from './components/titleMessage/titleMessage.component';
import About from './pages/about/about.component';

const  App = () => {
  return (
     <div className="App" style={{ position: "relative" }}>
       { /* Home Section */ }
       <NavBar />
       <Carousal />
       <TitleMessage />
       { /* About Section */ }
       <div>
       <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
                <Roll duration={500}>
                  <About />
               </Roll>
            </Container>
          </div>
        </Parallax>
       </div>
     </div>
  );
};

export default App;
