import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './contact.style.css';

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">Contact Me</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2 image">
                            {/* buttons */}
                            <a href="mailto:andreea.rosca54@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="andreea.rosca54@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 image">
                            <a href="https://www.linkedin.com/in/andreea-maria-rosca-6bb501140/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 image">
                            <a href="https://github.com/roscaandreea" target="_blank" rel="noopener noreferrer">
                                <Button  variant="outline-dark" title="My other projects">
                                    <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
};
export default Contact;