import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import spark from './sparkstudios'
import ReactDOM from 'react-dom';


function Spark (){


 const navigate = useNavigate()
 const {id}=useParams()
 console.log(id);
 const  sparks=spark.find((c)=>c._id==id)
 
    
  return (
  

    <Container >
     <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
     <Row>
      <Col md={3}>
        {/* <Image src={course.image}  height={200} width={200}/> */}
    </Col>
      <Col md={6}>
      <Image src={sparks.image} height={200} width={200}/>
      <ListGroup variant='flush'>
       <ListGroup.Item>
        <h3>{sparks.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>Fee: {sparks.fee}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>{sparks.description}</h3>
       </ListGroup.Item>
      </ListGroup>
      </Col>
     <Col md={3}>
      <Card>
        <ListGroup varient='flush'>
          <ListGroup.Item>
            <h6>Duration:{sparks.duration}</h6>

          </ListGroup.Item>
        </ListGroup>
        
          
        <ListGroup.Item>
          <Button  onClick={()=>{navigate("/form5")}}>Enroll Now</Button>
         
          </ListGroup.Item>
      </Card>
     </Col>


     </Row>
     
     </Container>


  ) 
  } 


export default Spark
