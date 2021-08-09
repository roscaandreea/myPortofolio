import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logo.webp';
import './navBar.style.css';

const NavBar = () => {
    return (
        <>
            <Navbar   
                fixed="top"
                collapseOnSelect 
                expand="md" 
                variant="dark"  
                className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt="My Portofolio logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" className="cardItem">Home</Nav.Link>
                        <Nav.Link href="#about" className="cardItem">About</Nav.Link>
                        <Nav.Link href="#skills" className="cardItem">Skills</Nav.Link>
                        <Nav.Link href="#education" className="cardItem">Education</Nav.Link>
                        <Nav.Link href="#projectsCertifications" className="cardItem">Projects</Nav.Link>
                        <Nav.Link href="#contact" className="cardItem">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavBar;
