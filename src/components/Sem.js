import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import sems from './sems'
import ReactDOM from 'react-dom';




function Sem (){


const navigate = useNavigate();
const {id} =useParams()
 const sem=sems.find((c)=>c._id==id)
 
    
  return (
  

    <Container>
    <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
    <Row>
     <Col md={3}>
      <h1 style={{textalign:'center'}}>Entries full</h1>
     
     </Col>
     </Row>
    </Container>

  ) 
  } 


export default Sem
