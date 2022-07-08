import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaDiscord } from "react-icons/fa";
import '../Master/Discord.css'
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import man from '../Images/MAN11.svg'
import cartoon from '../Images/cartoon.svg'
import { AiOutlineDownload } from "react-icons/ai";
import demo from '../Images/image.svg';
import demo1 from '../Images/image2.svg';
import demo2 from '../Images/image3.svg';
import demo3 from '../Images/image4.svg';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module


export default function Discord() {
  return (
    <div>

   
    <div class='dic'>
        <Container>
          
      
      <Row>
        <Col sm={3} id="panda">
        <FaDiscord style={{fontSize:'35px',marginRight:'4px',color:'white', marginTop:'8px'}}/> <h3 style={{color:'white',marginTop:'8px'}}>Discord</h3>
        {/*  */}
        </Col>
        <Col sm={6} id='imp'>
        <Navbar bg="blue" variant="blue" style={{textAlign:'center'}}>
        <Container id='imp'>
          <Navbar.Brand href="#home" id="hh"></Navbar.Brand>
          <Nav className="me-auto" id='auto'>
          <Nav.Link href="#home" id="auto">Download</Nav.Link>
            <Nav.Link href="#home" id="auto">Nitro</Nav.Link>
            <Nav.Link href="#features" id='auto'>Safety</Nav.Link>
            <Nav.Link href="#pricing" id='auto'>Support</Nav.Link>
            <Nav.Link href="#pricing" id='auto'>Blog</Nav.Link>
            <Nav.Link href="#pricing" id='auto'>Career</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </Col>
        <Col sm={3}>
        <Button variant="light" style={{marginTop:'8px',borderRadius:'12px'}}>Login</Button>{' '}
        </Col>
      </Row>
     
    </Container>

    
    </div>
    <section id='55'>
    <div class='threepart'>
      <Container>
   
      <Row>
        <Col>
            <img src={man} id='man99'/>
        
        </Col>
        <Col xs={5}>
         <h1 id='imagine'>IMAGINE A PLACE...</h1>
         <p style={{fontSize:'20px'}} id='para'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>

         <Button variant="outline-light" id='varia1'><AiOutlineDownload style={{marginRight:'9px',fontSize:'20px'}}/>Download For Mac </Button>{' '}
         <Button variant="outline-light"  id='varia'>Open Discord in Your brouser</Button>{' '}
          </Col>
        <Col>

        <img src={cartoon} id='cartoon'/>
        </Col>
      </Row>
    </Container>


    </div>
    </section>

    <div class='twoSection'>
    <Container>
      <Row>
        <Col>
            <img src={demo} id='demo1'/>

        </Col>
        <Col>
          <div>
            <h1 id='cet'>Create an<br></br> invite-only<br></br> place where you <br></br>belong</h1>
            <p id='0' style={{marginTop:'30px'}}>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
          </div>

        </Col>
      </Row>
     
    </Container>
    </div>

    <div class='twoSection'>
    <Container>
      <Row>
        <Col>
        <div>
            <h1 id='cet'>Where hanging out is easy</h1>
            <p id='0' style={{marginTop:'30px'}}>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call..</p>
          </div>

        </Col>
        <Col>
        <img src={demo1} id='demo1'/>
        

        </Col>
      </Row>
     
    </Container>
    </div>
    <div class='twoSection'>
    <Container>
      <Row>
        <Col>
            <img src={demo2} id='demo1'/>

        </Col>
        <Col>
          <div>
            <h1 id='cet'>From few to a fandom</h1>
            <p id='0' style={{marginTop:'30px'}}>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
          </div>

        </Col>
      </Row>
     
    </Container>
    </div>

    <div class='middle'>
      <Container>
        <Row>
         
          <Col>
                <h1 style={{marginTop:'180px'}}>RELIABLE TECH FOR STAYING CLOSE</h1>
                <h3 id='low'>Low-latency voice and video feels like you’re in the same room.<br></br> Wave hello over video, watch friends stream their games, or gather up and<br></br> have a drawing session with screen share.
</h3>

          </Col>
         
        </Row>
      </Container>

    </div>
    <div>
      <Container>
        <Row>
          <Col>
          <img src={demo3} id='demo3'/>
          </Col>
        </Row>
      </Container>
    </div>
    <div class='ready'>
      <Container>
        <Row>
          <Col>
                <h1 style={{marginTop:'80px'}}>Ready to start your journey?</h1>
                <Button variant="outline-light" id='varia2'><AiOutlineDownload style={{marginRight:'9px',fontSize:'20px'}}/>Download For Mac </Button>{' '}
          </Col>
        </Row>
      </Container>
    </div>
        <div>
          <footer style={{backgroundColor:'black'}} >
            <h1 style={{color:'black',paddingBottom:'50px'}}>footer</h1>
          </footer>
        </div>
    </div>
  )
}
