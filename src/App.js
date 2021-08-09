import React from 'react';
import './App.css';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions.js";
//import components
import NavBar from './components/NavBar/navBar.component';
import Carousal from './components/carousal/carousal.component';
import TitleMessage from './components/titleMessage/titleMessage.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Projects from './components/projects/projects.component';
import EducationCertificates from './pages/education/education.component';
import Contact from './pages/contact/contact.component';
import Footer from './components/footer/footer.component';

const  App = () => {
  return (
     <div className="App" style={{ position: "relative" }}>
       <Carousal />
       <TitleMessage />
       { /* Home Section */ }
       <NavBar />
       <Particles
        className="particles particles-box"
        params={particlesOptions}
      />       
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
                <Roll duration={700}>
                  <About />
               </Roll>
            </Container>
          </div>
        </Parallax>
       </div>
       { /* Skills Section */}
          <div>
            <Container className="container-box rounded">
                <Fade  duration={600}>
                  <Skills />
               </Fade>
            </Container>
          </div>
          { /* Education Section */}
          <div>
            <Container className="container-box rounded">
                <Slide bottom  duration={600}>
                  <hr />
                  <EducationCertificates/>
               </Slide>
            </Container>
          </div>
          {/* Projects and Certificates Section */}
          <div>
            <Container className="container-box rounded">
                <Fade  duration={600}>
                  <hr />
                  <Projects />
               </Fade>
            </Container>
          </div>
          { /* Contact Section */}
          <div>
            <Container className="container-box rounded">
                <Slide bottom  duration={600}>
                  <hr />
                  <Contact/>
               </Slide>
           </Container>
          </div>
          <hr />
          <Footer />

       </div>
  );
};

export default App;
