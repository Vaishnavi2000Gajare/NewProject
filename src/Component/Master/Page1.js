import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../Images/Vector 102.png'
import Header from '../Auth/Header';
import img1 from '../Images/Group 629.png'
import img2 from '../Images/image 56.png'
import '../Master/Page1.css'
import img3 from '../Images/image 56.png'
import logo from '../Images/logo1.png'
import '../Master/Page1.css'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logoo from '../Images/logo1.png'
import image9 from '../Images/image 30.png'
import myvideo from '../Images/shoes_video.mp4'
import Card from 'react-bootstrap/Card';
import sh from '../Images/sh1.png'


export default function Page1() {
   
  return (
    <div>
          <div class="hard">
            <Container>
              <Row>
                <Col >
                <Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logoo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id="id">Home</Nav.Link>
            <Nav.Link href="#action2" id='id1'>Roadmap</Nav.Link>
            <Nav.Link href="#action2" id='id1'>Features</Nav.Link>
            <Nav.Link href="#action2" id='id1'>Partners</Nav.Link>
            <Nav.Link href="#action2" id='id1'>Team</Nav.Link>
            <Nav.Link href="#action2" id='id1'>Stake</Nav.Link>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
                </Col>
                
              </Row>
            </Container>
            <Container>
              <Row>
                <Col sm={6} id='mana'>
                  <div id='manage'>

                 
                <h1 id="Moonstep">MoonStep</h1>
                <h2 id='blockchain'>On the Blockchain</h2>
                <p id='par'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Volutpat ligula ac leo dignissim phasellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat ligula ac leo dignissim phasellus.</p>
                <section class='section'>
                <Button
                  variant="light"
                  id="buthover"
                  style={{
                    
                  }}>Explore</Button>
                   <Button
                  variant="light"
                  id="buthover"
                  style={{backgroundColor:'white',color:'black',border:'1px solid green',marginLeft:'14px',fontWeight:'700'
                    
                  }}>Mint</Button>
                 </section>
                </div>
                </Col>
                <Col sm={6}>
                <h1></h1>
                </Col>
              </Row>
            </Container>

            <div class='video'>
              
                <video width="100%" height="100%"  preload='auto'>
                  <source src={myvideo} type="video/mp4" />
                 
                  </video>
            </div>

                    <div>
                      <Container>
                        <Row>
                         
                           <Col><h1>hii</h1>

                           

                          </Col>
                          
                        </Row>
                      </Container>
                    </div>

          </div>
       
          
               
            
               
              
           
          






















    
    </div>
  )
}
