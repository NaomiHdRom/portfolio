import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from './ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';

import Ajolotech from '../assets/images/photos/Ajolotech.jpg';
import TRA from '../assets/images/photos/SemanaDIMEITRA.jpg';
import Tecnolochicas from '../assets/images/photos/TECNOLOCHICASLOGO.jpg'


import ReactCert from '../assets/images/certificates/React.png'
import GGLCert from '../assets/images/certificates/GGL.jpg'
import Excel from '../assets/images/certificates/Excel.png'
import IA4EV from '../assets/images/certificates/IA.png'
import SIMULIDE from '../assets/images/certificates/ConstanciaSIMULIDE.png'
import TCPRO from '../assets/images/certificates/ConstanciaTecnolochicas.png'
import pythonDS from '../assets/images/certificates/python.png'
import talento from '../assets/images/certificates/TalentoHumano.jpg'
import HSK1 from '../assets/images/certificates/CertificadoCHINO.png'

import SQLFundamentals from '../assets/images/certificates/SQLFundamentals.png'
import Postgre from '../assets/images/certificates/Postgre.png'
import ManipulatingData from '../assets/images/certificates/ManipulatingData.png'
import JoiningData from '../assets/images/certificates/JoiningData.png'
import IntroductionSQL from '../assets/images/certificates/IntroductionSQL.png'
import IntermediateSQL from '../assets/images/certificates/IntermediateSQL.png'
import DataManipulation from '../assets/images/certificates/DataManipulation.png'
import DatabaseDesign from '../assets/images/certificates/DatabaseDesign.png'
import DashboardDesign from '../assets/images/certificates/DashboardDesign.png'

import hexapodImage from '../assets/images/photos/hex.png';


export const Projects = () => {
  const projects = [
    {
      title: "Talentos 4.0 Program 2024",
      description: "Participation in this program sponsored by GeekGirls Latam & BOSCH to strengthen skills in steam with Coursera certifications",
      imgUrl: Ajolotech,
    },
  

  ];



  const experiences=[

    {
      title: "Talentos 4.0 Program 2024",
      description: "Participation in this program sponsored by GeekGirls Latam & BOSCH to strengthen skills in STEM with Coursera certifications.",
      imgUrl: Ajolotech,
    },
    {
      title: "TRA- Taller de Robótica Abierta UNAM",
      description: "At this space I carried out my social service within RemBot project; developing PCBs, battery assembly, 3D prints for the robot circuitry and created a new website.",
      imgUrl: TRA,
    },
    {
      title: "Tecnolochicas",
      description: "Participation in Tecnolochicas PRO SUMMER 2023: Web design HTML, CSS & Bootstrap /// Tecnolochicas Data Science 2024: Python, SQL, Pandas, MongoDB. ",
      imgUrl: Tecnolochicas,
    },
   

  ];




  const certificates = [

    {
      title: "Talentos 4.0 Program 2024",
      description: "View more",
      imgUrl: GGLCert,
      linkUrl: "https://drive.google.com/drive/u/0/folders/1EmC0dHFjNYkbcNMRaYYth_7rM6aUeMFx ",
    },
    {
      title: "Tecnolochicas PRO SUMMER 2023",
      description: "View more",
      imgUrl: TCPRO,
      linkUrl: "https://drive.google.com/drive/u/0/folders/1EmC0dHFjNYkbcNMRaYYth_7rM6aUeMFx",
    },
    {
      title: "Python for Data Science, AI & Development",
      description: "View certificate",
      imgUrl: pythonDS,
      linkUrl:"https://www.coursera.org/account/accomplishments/verify/WXS6RS2Q5VVJ",

    },
    {
      title: "Developing Front-End Apps with React",
      description: "View certificate",
      imgUrl: ReactCert,
      linkUrl:"https://www.coursera.org/account/accomplishments/verify/48TNFB6S3D92",
    },
    {
      title: "Excel Basics for Data Analysis",
      description: "View Certificate",
      imgUrl: Excel,
      linkUrl:"https://www.coursera.org/account/accomplishments/verify/LBHRLA8WZF4P",
    },
    {
      title: "IA for Everyone",
      description: "View Certificate",
      imgUrl: IA4EV,
      linkUrl:"https://www.coursera.org/account/accomplishments/verify/Q7CLGSYP699K",
    },

    {
      title: "SQL Fundamentals",
      description: "View Certificate",
      imgUrl: SQLFundamentals,
      linkUrl:"https://drive.google.com/file/d/1oeDM0Gwyz5OlweexdjotCmZjV-SQ9Xt1/view?usp=drive_link",
    },
    {
      title: "Database Design",
      description: "View Certificate",
      imgUrl: DatabaseDesign,
      linkUrl:"https://drive.google.com/file/d/1fjyped15DwbdYkpGjziR3l_CylxCQd3o/view?usp=drive_link",
    },

    {
      title: "Dashboard Design Concepts",
      description: "View Certificate",
      imgUrl: DashboardDesign,
      linkUrl:"https://drive.google.com/file/d/1QRiGQi-s3mqJ0_QFCpPVMhlCScgbqbcy/view?usp=drive_link",
    },

    {
      title: "Intermediate SQL",
      description: "View Certificate",
      imgUrl: IntermediateSQL,
      linkUrl:"https://drive.google.com/file/d/1HZNLPtPWPL2VHkdKJMrPeO4IwCcTt-nO/view?usp=drive_link",
    },

    {
      title: "PostgreSQL Summary Stats and Window Functions",
      description: "View Certificate",
      imgUrl: Postgre,
      linkUrl:"https://drive.google.com/file/d/1o2g6uAGGnmd14MsVzM7Y_Z1YUbY3NTEE/view?usp=drive_link",
    },

    {
      title: "Functions for Manipulating Data in SQL",
      description: "View Certificate",
      imgUrl: ManipulatingData,
      linkUrl:"https://drive.google.com/file/d/1nz3PRYEFhvRanohlGgI57iz4Iq4HDgc-/view?usp=drive_link",
    },

    {
      title: "Data Manipulation in SQL",
      description: "View Certificate",
      imgUrl: DataManipulation,
      linkUrl:"https://drive.google.com/file/d/1EBW0TycqtfLhOyF7ugh39uF7ZrTfYBXR/view?usp=drive_link",
    },

    {
      title: "Joining Data in SQL",
      description: "View Certificate",
      imgUrl: JoiningData,
      linkUrl:"https://drive.google.com/file/d/1t5OnFR1p_0CCtgNtUSthDsCJZFHpzFLE/view?usp=drive_link",
    },

    {
      title: "Introduction to SQL",
      imgUrl: IntroductionSQL,
      linkUrl:"https://drive.google.com/file/d/1vwlxfAQiQg7mhkhyP5tA1H8YRrVSvRrx/view?usp=sharing",
    },


  


    {
      title: "Chinese for HSK1",
      description: "View Certificate",
      imgUrl: HSK1,
      linkUrl:"https://www.coursera.org/account/accomplishments/verify/B8HU4VKMBVVN",
    },
    {
      title: "Capacitación SIMULIDE",
      imgUrl: SIMULIDE,
    },
    {
      title: "Estrategias para la captación del talento humano",
      imgUrl: talento,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>
                    My background in Mechatronics Engineering has enabled me to develop skills across various engineering disciplines, including Mechanics, Electronics, Computer Science, and Product Design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experiences</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row className="images-container">
                          {experiences.map((project, index) => (
                            <Col key={index} sm={12} md={6} lg={4} className="d-flex">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                  
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>At the moment I'm working on a Mobile Hexapod Robot for the MRG "Mechatronics Research Group" UNAM.
                          Using technology such as ROS, Servomotors & JetsonNano.
                          This project includes the kinematic research, prototype modelling & building, and real time response simulation.
                        </p>
                        <div className='contenedor-imagen-hex'>
                        <img className='hexapodimg' src={hexapodImage} alt="hexapod" />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      
                        <Row className="images-container">
                          {certificates.map((project, index) => (
                            <Col key={index} sm={12} md={6} lg={4} className="d-flex">
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane> 
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
