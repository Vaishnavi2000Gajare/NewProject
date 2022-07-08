import React from 'react'
import logo from "../Images/logo1.png";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Master/Page2.css";
import img from "../Images/Rectangle.png";
import logo2 from '../Images/barcode.png'
import "../Master/Page3.css"
import { RiFileCopyLine } from "react-icons/ri";
import pic from '../Images/Rectangle 76.png'
import pic1 from '../Images/Rectangle 76 (1).png'
import pic2 from '../Images/Rectangle 76 (2).png'
import pic3 from '../Images/Rectangle 430.png'
import pic4 from '../Images/Rectangle 76 (3).png'
import pic5 from '../Images/Rectangle 76 (4).png'
import pic6 from '../Images/Rectangle 76 (5).png'
import pic7 from '../Images/Rectangle 431.png'


export default function Page3() {
  return (
    <div>
        <div class="Navbar">
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>STAKE</Navbar.Text>
              <Navbar.Text>HOME</Navbar.Text>
              <Navbar.Text>ROADMAP</Navbar.Text>
              <Navbar.Text>FEATUES</Navbar.Text>
              <Navbar.Text>PARTENERS</Navbar.Text>
              <Navbar.Text>TEAM</Navbar.Text>
              <Button variant="light" id="but">
                JOIN OUR DISCORDS
              </Button>{" "}
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <section>
            <div class="nft">
            <Container>
      <Row id="barcode">
        <Col sm={4} >
        <img src={logo2} id="logo2"/>
        </Col>
        <Col sm={8}>
        {/* <Button variant="light" id="barbutton">
                03534argrvr5v53aevavagerg
              </Button>{" "} */}
              <Button variant="light" id="barbutton"> 03534argrvr5v53aevavagerg <RiFileCopyLine id="ri"/></Button>{' '}
              <Row>
                <Col>
               
                <h5 id="own"><b>Owened NFTs</b></h5>
                </Col>
               
                <Col>
               
                <h5 id="own1"><b>Claimed NFTs</b></h5>  
                </Col>
                
            </Row>
        </Col>
      
      </Row>
      
    </Container>
    <Container>
        <Row>
            <Col>
            <h3 id="space"><b>All NFTs will display once the admin stores there METADATA</b></h3>
            </Col>
        </Row>
    </Container>
    <Container>
        <Row id='pictures'>
            <Col sm={3}>
            <img src={pic}/>
            </Col>
            <Col sm={3}>
            <img src={pic1}/>
            </Col>
            <Col sm={3}>
            <img src={pic2}/>
            </Col>
           

           
            <Col sm={3}>
            <img src={pic3}/>
            </Col>
            </Row>
            <Row style={{color:'white'}} id="manage">
                <Col sm={2} id="11">
                   
                        <h6>Shoue Name</h6>
                       
                        <h6 id="shouu">£1234</h6>
                        
                
                </Col>
                <Col sm={2}>

                <h6 id="18">Shoue</h6>
                       
                       <h6 id="shouu1">£1234</h6>
                       
               
                </Col>
                
                <Col sm={2} >
               
               
                       
                </Col>
                <Col sm={2}>
                
                </Col>
                <Col sm={2}>
                <h6 id="13">Shoue Name</h6>
                       
                       <h6 id="sho">£1234</h6>
                </Col>
                <Col sm={2}>
                
                </Col>
                <Col sm={2}>
                <h6 id="14">Shoue Name</h6>
                       
                       <h6 id="sho1">£1234</h6>
                </Col>
              
            </Row>
            <Row>
            <Col sm={3}>
            <img src={pic4}/>
            </Col>
            <Col sm={3}>
            <img src={pic5}/> 
                </Col>
                <Col sm={3}>
                <img src={pic6}/> 
                </Col>
                <Col sm={3}>
                <img src={pic7}/>
                </Col>
                <Col sm={3}>
                
                </Col>
        </Row>
    </Container>

            </div>
        </section>
        </div>
    </div>
  )
}
