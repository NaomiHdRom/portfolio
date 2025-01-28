import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';

import robot from '../assets/images/logos/robot.svg';
import data from '../assets/images/logos/data.svg';
import coding from '../assets/images/logos/coding.svg';
import engineer from '../assets/images/logos/engineer.svg';
import computer from '../assets/images/logos/computer.svg';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Skills = () => {
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <h4>My background in Mechatronics Engineering has enabled me to develop skills across various engineering disciplines, including Mechanics, Electronics, Computer Science, and Product Design.</h4>

                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>

                                <div className='item'>
                                    <img src={robot} alt="robot" />
                                    <h3>Robotics</h3>
                                    <div className='lista'>
                                        <li>
                                            <p>ROS</p>
                                        </li>
                                        <li>
                                            <p>Arduino</p>
                                        </li>

                                        <li>
                                            <p>Servomotors</p>
                                        </li>
                                        <li>
                                            <p>Jetson Nano & ESP32</p>
                                        </li>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src={data} alt="data" />
                                    <h3>Data Science</h3>
                                    <div className='lista'>
                                        <li>
                                            <p>SQL</p>
                                        </li>
                                        <li>
                                            <p>Python</p>
                                        </li>
                                        <li>
                                            <p>Pandas</p>
                                        </li>
                                        <li>
                                            <p>MongoDB</p>
                                        </li>
                                        <li>
                                            <p>Statistics & Probability</p>
                                        </li>

                                    </div>
                                </div>

                                <div className='item'>
                                    <img src={coding} alt="coding" />
                                    <h3>Front-End Dev</h3>
                                    <div className='lista'>
                                        <li>
                                            <p>JS</p>
                                        </li>
                                        <li>
                                            <p>CSS</p>
                                        </li>
                                        <li>
                                            <p>HTML</p>
                                        </li>   <li>
                                            <p>REACT</p>
                                        </li>
                                        <li>
                                            <p>Markdown & Latex</p>
                                        </li>
                                    </div>
                                </div>


                                <div className='item'>
                                    <img src={engineer} alt="coding" />
                                    <h3>Applied Engineering</h3>
                                    <div className='lista'>
                                        <li>
                                            <p>3D Design & Print</p>
                                        </li>
                                        <li>
                                            <p>PLC Programming</p>
                                        </li>   <li>
                                            <p>PCB Manufacturing</p>
                                        </li>
                                    </div>
                                </div>

                                <div className='item'>
                                    <img src={computer} alt="computer" />
                                    <h3>Software</h3>
                                    <div className='lista'>
                                        <li>
                                            <p>Excel</p>
                                        </li>
                                        <li>
                                            <p>VS Code</p>
                                        </li>
                                       
                                        <li>
                                            <p>Word & Pages</p>
                                        </li>
                                        <li>
                                            <p>Canva & PowerPoint</p>
                                        </li>
                                        <li>
                                            <p>Autodesk Inventor & Fusion 360</p>
                                        </li>
                                    </div>
                                </div>



                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
