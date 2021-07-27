import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import './projects.style.css';

//projects logo
import L_ReactCovidTracker from "../../assets/img/projects/covid_tracker.webp";
import L_ReactProjectFreeCodeCamp from "../../assets/img/projects/frontendLibrariesAndDataVisualization.webp"
import L_ReactToDoApp from "../../assets/img/projects/toDoApp.webp";
import L_EventBooking from "../../assets/img/projects/eventBooking.webp";
import L_CloudEngineer from "../../assets/img/projects/CE.webp";
import L_DataScience from "../../assets/img/projects/DS.webp";
import L_ML from "../../assets/img/projects/ML.webp";
import L_RecipeApp from "../../assets/img/projects/recipeApp.webp";
import L_TempApp from "../../assets/img/projects/tempApp.webp";

//import skills
// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_Graphql from "../../assets/img/skills/GraphQL.svg";
import L_D3 from "../../assets/img/skills/D3.png";
import L_MATERIAL_UI from "../../assets/img/skills/material-ui.svg";

const Projects = () => {
    return ( 
        <div id="projectsCertifications">
            <h1 className="pt-3 text-center font-details-b pb-3">Projects and Certificates</h1>
            <Timeline>
                <Events>
                     {/* Projects: freeCodeCamp  */}
                     <ImageEvent
                        date="In progress..."
                        className="text-center"
                        text="freeCodeCamp Projects"
                        src={L_ReactProjectFreeCodeCamp}
                        alt="project freeCodecamp"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Some interesting projects which are part of the curriculum for the Front End Libraries Certification and Data Visualization on freeCodeCamp.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Build new project from freeCodeCamp platform</li>
                                                    <li>Upgraded projects already present</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_D3}
                                                                alt="D3.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                D3.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                CSS3
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/roscaandreea/freecodecamp-projects"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/roscaandreea/freecodecamp-projects"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                        
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Covid Tracker App  */}
                    <ImageEvent
                        date="08/04/2021"
                        className="text-center"
                        text="React Covid Tracker App"
                        src={L_ReactCovidTracker}
                        alt="React Covid Tracker App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Covid Dashboard App created with React and Material UI
                                                 which displaying with diagrams the number of infections,recover and deaths globally and for each country.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Covid detector based on symptoms </li>
                                                    <li>Live no of infections by country</li>
                                                    <li>Display number of people which is vacinated</li>
                                                    <li>Use d3.js to upgrade the map</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIAL_UI}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                Material-UI
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/roscaandreea/covid19Tracker"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/roscaandreea/covid19Tracker"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                        
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Todo App  */}
                    <ImageEvent
                        date="07/10/2020"
                        className="text-center"
                        text="React ToDo App"
                        src={L_ReactToDoApp}
                        alt="React ToDo App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Todo App created with React that keeps a track of your Todos
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Powered by React </li>
                                                    <li>Respoisive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                 CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/roscaandreea/toDoReactAPP"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/roscaandreea/toDoReactAPP"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                        
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Event Booking */}
                    <ImageEvent
                        date="10/09/2020"
                        className="text-center"
                        text="EventBooking App"
                        src={L_EventBooking}
                        alt="Event Booking App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This application allows a user to log in after which he can create an event to which other users will be able to make booking.
                                                On the backend I used graphQL along with react and on frontend I used react with d3.js for charts.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Enter button for delete event</li>
                                                    <li>Add mechanism for leaving feedback</li>
                                                    <li>Possibility to update an event</li>
                                                    <li>Add more charts and style</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                             React
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    Node.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    Express
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt="MongoDB"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    MongoDB
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Graphql}
                                                                alt="GraphQL"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    GraphQL
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_D3}
                                                                alt="D3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    D3.js
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                    CSS3
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                   <UrlButton
                                    href="https://github.com/roscaandreea/reactEventBookingApp"
                                    target="_blank"
                                   >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/roscaandreea/reactEventBookingApp"
                                    target="_black"
                                >
                                    SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Certificates: Cloud Engineer */}
                    <ImageEvent
                        date="28/05/2020"
                        className="text-center"
                        text="Cloud Engineer"
                        src={L_CloudEngineer}
                        alt="Cloud Engineer"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            CERTIFICATES DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A certificate from which I learned how to explored and deployed solution
                                                elements and infrastructure components such as application services,systems using Google Cloud Platform
                                                 <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Data engineer certificates</li>
    
                                                </ul>
                                                <hr />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://www.coursera.org/account/accomplishments/specialization/certificate/EXFEE9XZQQ6P"
                                    target="_blank"
                                >
                                    SEE CREDENTIALE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Certificates: Data Science */}
                    <ImageEvent
                        date="28/04/2020"
                        className="text-center"
                        text="Data Science"
                        src={L_DataScience}
                        alt="Data Science"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            CERTIFICATES DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> In this course I've learned how to import,clean,manipulate,and visualize data. 
                                                Through interactive exercises, I've got hands-on with some of the most popular Python libraries, including pandas, NumPy, Matplotlib, and many more.
                                                I've worked with real-world datasets to learn the statistical and machine learning techniques that I needed to train decision trees and used natural language processing (NLP).
                                                <hr />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://www.datacamp.com/statement-of-accomplishment/track/7af1c7614badfe8ac8f7102dd71a5a44495b1720"
                                    target="_blank"
                                >
                                    SEE CREDENTIALE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Certificates: ML */}
                    <ImageEvent
                        date="05/05/2020"
                        className="text-center"
                        text="Structuring Machine Learning Projects"
                        src={L_ML}
                        alt="Machine Learning Structure"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            CERTIFICATES DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> In this course I've learned how to build a successful machine learning project. 
                                                Also will teach you how to be a technical leader in AI, and know how to set direction for your team's work.
                                                Understand how to diagnose errors in a machine learning system, and 
                                                 Other things that I've learned:
                                                 <br/> 
                                                 -Be able to prioritize the most promising directions for reducing error
                                                 <br/>
                                                 - Understand complex ML settings, such as mismatched training/test sets, and comparing to and/or surpassing human-level performance
                                                 <br/>
                                                 - Know how to apply end-to-end learning, transfer learning, and multi-task learning
                                                
                                                <hr />
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://www.coursera.org/account/accomplishments/certificate/7YETAYMLNXBE"
                                    target="_blank"
                                >
                                    SEE CREDENTIALE
                                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: Recipe App  */}
                    <ImageEvent
                        date="12/07/2020"
                        className="text-center"
                        text="React Recipe App"
                        src={L_RecipeApp}
                        alt="React Recipe App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an app which use Edamam API to search different recipes starting from an ingredient or from a food and also display how many calories has that recipe.
                                                It makes with react and styled with pure css3.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Style using bootstrap4 </li>
                                                    <li>Display region from where is that recipe</li>
                                                    <li>Add link with video recipe</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                 CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/roscaandreea"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/roscaandreea"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                        
                            </div>
                        </div>
                    </ImageEvent>
                    { /* Project: Temp App */}
                    <ImageEvent
                        date="12/07/2020"
                        className="text-center"
                        text="Weather App"
                        src={L_TempApp}
                        alt="Weather App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an app which use OpenWeatherMap API to display weather from different cities.
                                                Also this app display three other values that have to do with the weather.
                                                <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Style using bootstrap4 </li>
                                                    <li>Add some graphic which display values from a week</li>
                                                    <li>Make this website responsive</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                HTML5
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                                                                 CSS3
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                                                                React
                                                        </span>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/roscaandreea"
                                    target="_blank"
                                >
                                    SEE LIVE
                                </UrlButton>
                                <UrlButton
                                    href="https://github.com/roscaandreea"
                                    target="_blank"
                                >
                                    SOURCE CODE
                                </UrlButton>
                        
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    );
}

export default Projects;