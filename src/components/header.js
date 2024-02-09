import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Nss from './Removal-922.png'
import L4 from './logo4.png'
import L3 from './logo3.png'
import L2 from './logo2.png'
import L1 from './logo1.png'
function header() {
  return (
    <Navbar className='bg-dark'>
      <Container  style={{display:'flex',justifyContent:'centre',alignSelf:'center'}}>
        <LinkContainer to="/">
        
        <Navbar.Brand className='text-light navbar navbar-expand-lg navbar-dark bg-dark '>FIESTA</Navbar.Brand>
        </LinkContainer>
        <LinkContainer to="/events">
            <Nav.Link className='text-light bg-dark' style={{fontweight:'bold'}}>Events</Nav.Link>
            </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="navbar navbar-expand-lg navbar-dark bg-dark"  >
          
          
          
            <img src={L1} alt="cur" className="center" style={{height:50,position:'center',margin:0}}></img>
            <img src={L2} alt="cur" className="center" style={{height:50,position:'center',margin:0}}></img>
            <img src={L3} alt="cur" className="center" style={{height:50,position:'center',margin:0}}/>
            <img src={L4} alt="cur" className="center" style={{height:50,position:'center',margin:0}}></img>
            <img src={Nss} alt='nss'style={{height:40,position:''}}></img>
           
           
            
             
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default header
