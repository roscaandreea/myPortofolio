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
                        <div className="m-2 image btn-socials">
                            {/* buttons */}
                            <a href="mailto:&#097;&#110;&#100;&#114;&#101;&#101;&#097;&#046;&#114;&#111;&#115;&#099;&#097;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 image btn-socials">
                            <a href="https://www.linkedin.com/in/andreea-maria-rosca-6bb501140/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>
                        <div className="m-2 image btn-socials">
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
