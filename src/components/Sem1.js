import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import sem1s from './sem1s'
import ReactDOM from 'react-dom';




function Sem1 (){


  const navigate = useNavigate();
const {id} =useParams()
 const sem1=sem1s.find((c)=>c._id==id)
 
    
  return (
  

    <Container >
     <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
     <Row>
      <Col md={3}>
        {/* <Image src={course.image}  height={200} width={200}/> */}
    </Col>
      <Col md={6}>
      <Image src={sem1.image} height={200} width={200}/>
      <ListGroup variant='flush'>
       <ListGroup.Item>
        <h3>{sem1.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>Fee: {sem1.fee}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>{sem1.description}</h3>
       </ListGroup.Item>
      </ListGroup>
      </Col>
     <Col md={3}>
      <Card>
        <ListGroup varient='flush'>
          <ListGroup.Item>
            <h6>Duration:{sem1.duration}</h6>

          </ListGroup.Item>
        </ListGroup>
        
          
          <ListGroup.Item>
          <Button  onClick={()=>{navigate("/fsem1")}}>Enroll Now</Button>
         
          </ListGroup.Item>
      </Card>
     </Col>


     </Row>
     
     </Container>


  ) 
  } 


export default Sem1
