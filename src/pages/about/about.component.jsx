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
                                <Image className="profile justify-content-end shadow rounded" alt="profile" src={Profile} />
                            </Row>
                        </Col>
                        {/* About description + social link */}
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-3 my-details rounded shadow">
                                { /* description */}
                                <p className="text">Hi there! I am <strong>Andreea-Maria Rosca</strong></p>
                                 <br />
                                 <p className="text">A passionate programmer and a learner, I'm always looking for new challenges with a special interest in Full Stack Web Development with React.js + Redux,Node.js + Express.js,MongoDB. A more complete list of interests can be found on my <a className="underlineText" href="https://www.linkedin.com/in/andreea-maria-rosca-6bb501140/">Linkedin</a>.</p>
                                 <p className="text">I'm also passionate about Machine Learning and Data Visualization, which I discovered during my Computer Science bachelor studies.
                                 I also took several courses in this area such as:&nbsp; 
                                 <ul className="list">
                                    <li><a className="underlineText" href="https://www.datacamp.com/statement-of-accomplishment/track/7af1c7614badfe8ac8f7102dd71a5a44495b1720">Data Scientist with Python Track on Datacamp</a></li>
                                    <li><a className="underlineText" href="https://www.coursera.org/account/accomplishments/certificate/7YETAYMLNXBE">Structuring Machine Learning Projects on Coursera</a></li>
                                    <li><a className="underlineText" href="https://www.freecodecamp.org/certification/andreea_dev/data-visualization">Data Visualization on FreeCodeCamp</a></li>
                                 </ul>
                                 </p>
                                 <p className="text">I'm excited to work with people to deliver better and bigger projects than what could be accomplished individually.
                                I love learning about new technologies,solving problems and how I can use them to build better and more scalable products.</p>
                            </Row>
                            <Row>
                                { /* Social links */}
                                <Col className="mt-2 d-flex justify-content-center flex-wrap">
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