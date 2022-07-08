import React from "react";
import Header from "../Auth/Header";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Images/logo1.png";
import "../Master/MainPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrFacebookOption } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

import InputGroup from 'react-bootstrap/InputGroup';

export default function MainPage() {
  return (
    <div>
      <Header />
      <section>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-start">
              <Navbar.Text>
                <Button
                  variant="light"
                  id="buthover1"
                  style={{
                    backgroundColor: "black",
                    border: "black",
                    color: "white",
                  }}
                >
                  STAKE
                </Button>{" "}
              </Navbar.Text>
              <Navbar.Text>
                <Button
                  variant="light"
                  id="buthover1"
                  style={{
                    backgroundColor: "black",
                    border: "black",
                    color: "white",
                  }}
                >
                  UNSTAKE
                </Button>{" "}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <div class="wallet">
          <Container>
              <Row>
                  <Col>
                  <Button
                  variant="light"
                  id="buthover"
                  style={{
                    
                  }}>Connect Wallet</Button>
                  </Col>
              </Row>
          </Container>
          

      </div>
      <section>
      <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
      <Link to='/about' style={{color:'white',textDecoration:'none'}}>ABOUT</Link>   
          </Navbar.Text>
         <Navbar.Text>
         <Link to='/term'  style={{color:'white',textDecoration:'none'}}>TERM AND CONDITION</Link> 
          </Navbar.Text>
          <Navbar.Text>
        <Link to='/policy'  style={{color:'white',textDecoration:'none'}}>PRIVACY POLICY</Link>  
          </Navbar.Text>
          <Navbar.Text>
          WHITEPAPER
          </Navbar.Text>
         
         
         

        </Navbar.Collapse>
      </Container>
    </Navbar>
      </section>
     <section>
         <div class="last">
                <Container>
                    <Row>
                        <Col>
                            <h6 style={{color:'white' }}id='subscribe'><b>Subscribe for updates and announcements

</b></h6>
                        </Col>
                        <Col id="socialMedia">
                     <a href="https://www.facebook.com/"><GrFacebookOption id="fb"/></a>
                     <a href="https://twitter.com/">  <SiTwitter id="twitter"/></a>
                     <a href="https://www.instagram.com/">  <BsInstagram id="insta"/></a>
                        
                        </Col>
                    </Row>
                </Container>
         </div>
     </section>
     <section class="lastField">
         <Container>
             <Row>
                 <Col id="inputGroup">
                 <InputGroup size="sm" className="mb-3" id="inputGroup">
       
                    <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="Enter your Email"/>
      </InputGroup>
      <Button
                  variant="light"
                  id="buthover11"
                  style={{
                    
                  }}>Subscribe</Button>
                 </Col>

                 <Col>
                 <p style={{color:'white'}} id="rigthAll">©2022 -moonstep | All rights reserved</p>
                 </Col>

             </Row>
         </Container>
     </section>
    </div>
  );
}
