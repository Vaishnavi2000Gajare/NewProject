import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../Images/logo1.png'
import '../Auth/Header.css'
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <div>
        <div >
        <Navbar>
      <Container>
        <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
         STAKE
          </Navbar.Text>
          <Navbar.Text>
         HOME
          </Navbar.Text>
          <Navbar.Text>
         ROADMAP
          </Navbar.Text>
          <Navbar.Text>
         FEATUES
          </Navbar.Text>
          <Navbar.Text>
         PARTENERS
          </Navbar.Text>
          <Navbar.Text>
         TEAM
          </Navbar.Text>
         <Link to='/discord'> <Button variant="light" id="but">JOIN OUR DISCORDS</Button>{' '}</Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </div>
  )
}
