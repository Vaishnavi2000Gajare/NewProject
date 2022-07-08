import React from "react";
import logo from "../Images/logo1.png";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Master/Page2.css";
import img from "../Images/Rectangle.png";

export default function Page2() {
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
      </div>

      <div class="first">
        <Container>
          <Row>
            <Col class="div1">
              <img src={img} id="img0" />
            </Col>
            <Col class="div2">
            <div >
                <h2 id="h2"><b>The_New Shoes_Collection</b></h2>
            </div>
            <Row>
                <Col id="1">
                    <h2 id="textBackground"><b>Background</b></h2>
                    <h2>£828282</h2>
                </Col>

                <Col id="clothing">
                <h2 id="textClothing"><b>Clothing</b></h2>
                    <h2>£828282</h2>
                </Col>
            </Row>
            <Row>
                <Col id="1">
                    <h2 id="textBackground"><b>Skin</b></h2>
                    <h2>£428hev</h2>
                </Col>

                <Col id="clothing">
                <h2 id="textClothing"><b>Headwear</b></h2>
                    <h2>281eed</h2>
                </Col>
            </Row>
            <Row>
                <Col id="1">
                    <h2 id="textBackground"><b>Body Accessory</b></h2>
                    <h2>£lo5247</h2>
                </Col>

                <Col id="clothing">
                <h2 id="textClothing"><b>Headphones</b></h2>
                    <h2>25ed8e</h2>
                </Col>
                <Row>
                <Col id="trans" >
                <Button variant="light" id="trans1">
                TRANSFER
              </Button>{" "}
                </Col>

                <Col>
                
                </Col>
               
            </Row>
               
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
