import React from 'react'
import '../Master/AboutUs.css'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../Images/logo1.png";
import Header from '../Auth/Header'
import "../Master/MainPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrFacebookOption } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Policy() {
  return (
    <div>
         <Header/>

<div class="AboutUs">
<Container> 
      <Row>
          <h1  id="AboutUs"> Privacy Policy</h1>
      </Row>
      <Row>
          <p style={{color:'white'}} id="text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet diam ipsum mattis. Nec dolor id in urna, et. Lorem orci, scelerisque tempor, massa rhoncus, non. Scelerisque in faucibus volutpat purus nisi, odio. Nascetur vel venenatis velit interdum.

Dictum amet viverra varius viverra suspendisse. Elementum dolor quam facilisis duis mattis in sociis. Tristique erat urna, non faucibus penatibus et sit sollicitudin. Senectus malesuada amet enim, egestas posuere neque egestas. Tortor bibendum mi quam in urna dignissim facilisi egestas et. Facilisis arcu vitae bibendum vitae sed convallis. Ut vitae praesent enim aenean nibh ut amet tellus enim. Rhoncus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet diam ipsum mattis. Nec dolor id in urna, et. Lorem orci, scelerisque tempor, massa rhoncus, non. Scelerisque in faucibus volutpat purus nisi, odio. Nascetur vel venenatis velit interdum. Dictum amet viverra varius viverra suspendisse. Elementum dolor quam facilisis duis mattis in sociis. Tristique erat urna, non faucibus penatibus et sit sollicitudin. Senectus malesuada amet enim, egestas posuere neque egestas. Tortor bibendum mi quam in urna dignissim facilisi egestas et. Facilisis arcu vitae bibendum vitae sed convallis. Ut vitae praesent enim aenean nibh ut amet tellus enim. Rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet diam ipsum mattis. Nec dolor id in urna, et.

Dictum amet viverra varius viverra suspendisse. Elementum dolor quam facilisis duis mattis in sociis. Tristique erat urna, non faucibus penatibus et sit sollicitudin. Senectus malesuada amet enim, egestas posuere neque egestas. Tortor bibendum mi quam in urna dignissim facilisi egestas et. Facilisis arcu vitae bibendum vitae sed convallis. Ut vitae praesent enim aenean nibh ut amet tellus enim. Rhoncus.</p>
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
    <Link to='/about'  style={{color:'white',textDecoration:'none'}}> ABOUT</Link>
    </Navbar.Text>
    <Navbar.Text>
    <Link to='/term'  style={{color:'white',textDecoration:'none'}} >  TERM AND CONDITION </Link>
    </Navbar.Text>
    <Navbar.Text>
    <Link to='/policy'  style={{color:'white',textDecoration:'none'}}>  PRIVACY POLICY </Link>
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
                  <a href="https://twitter.com/"> <SiTwitter id="twitter"/></a>
                  <a href="https://www.instagram.com/"><BsInstagram id="insta"/></a>
                  
                  </Col>
              </Row>
          </Container>
   </div>
</section>
<section class="lastField">
   <Container>
       <Row>
           <Col id="inputGroup">
               <input type="text" placeholder='Enter your Email' id='mail'></input>
         
<Button
            variant="light"
            id="buthover111"
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
  )
}
