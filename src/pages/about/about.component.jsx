import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from '../../assets/img/profile/profile.jpg';
import Button from 'react-bootstrap/Button';
import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* Profile picture */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                            </Row>
                        </Col>
                        {/* About description + social link */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-2 my-details rounded">
                                { /* description */}
                                 Hi there! I am <strong>&nbsp;Andreea-Maria Rosca</strong>
                                 <br />
                                 A passionate programmer and a Learner, always looking for new challenges. I am interested in Full Stack Web Development with React.js, Redux, Express.js, Node.js, and MongoDb as my tech stack.
                                 <br />
                                 My second passion is Machine Learning and Data Visualization, which were discovered during faculty of Computer Science in Iasi.
                                 <br />
                                 I took several individual courses in this area of which to mention would be: 
                                 <br /><strong>
                                 -Data Scientist with Python Track on Datacamp 
                                 <br />
                                 -Structureing Machine Learning Projects on Coursera 
                                 <br />
                                 -Data Visualization </strong>
                                 I'm excited to work with people to do things bigger than I could accomplish alone.
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                                <br /> 
                                <br />
                            </Row>
                            <Row>
                                { /* Social links */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2 btn" variant="outline-primary">Let's talk</Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/roscaandreea" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 btn" variant="outline-dark">
                                                GitHub
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/andreea-maria-rosca-6bb501140/" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2 btn" variant="outline-info">
                                                LinkedIn
                                            </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default About;