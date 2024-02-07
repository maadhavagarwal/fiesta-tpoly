import React from 'react'
import {Navbar,Row,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
function footer() {
  return (
<Navbar bg="dark" variant='dark'>
      <Container>
        <LinkContainer to="/">
        
        <div className='text-light bg-dark'>
        <p>Jay Patel - 9313859293</p>
        <p>Dhanesh Shetty - 8591604650 </p>
    
        <p>Avaneesh Gawde - 9820874701 </p>
        <p>Hrishikesh Thakrar - 7020991887</p>
        <p>Email : iic@tpoly.in</p>
       
        
        </div>
        
       
             
       
        
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" 
          style={{maxHeight:'100px'}}
          navbarScroll
          
          
          ></Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
          
  )
}

export default footer