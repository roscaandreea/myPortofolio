import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import L_UAIC from "../../assets/img/education_certificate/uaic.svg";
import './education.style.css';

const EducationCertificates = () => {
    return (
        <div id="education">
            <h1 className="pt-3 text-center font-details-b pb-3">Education</h1>
            <Jumbotron className="jumbo_style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                      <Card>
                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                            <Card.Img variant="top" className="img-resize" src={L_UAIC} alt="UAIC logo" />
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-center flex-column">
                            <div>
                                <Card.Title className="text-center">„Alexandru Ioan Cuza” University of Iași</Card.Title>
                            </div>
                            <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Faculty Of Computer Science</strong>
                                    <br />
                                    <strong>Level:</strong> Bachelor Degree
                                    <br />
                                    <div className="text-left">
                                    <strong> Description: </strong>
                                        <strong>Computer Software Engineering</strong> with 
                                        courses developed in partnership with the IT companies
                                            in response to their needs.
                                    </div>
                                    <br />
                                    <strong>Duration:</strong> October 2014 - Present
                                    <br/>                                 
                                </Card.Text>
                            </div>
                        </Card.Body>
                      </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default EducationCertificates;

