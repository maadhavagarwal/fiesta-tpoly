import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import autionskills from './autionskills'
import ReactDOM from 'react-dom';
import autionskill from './autionskill.png'
import Footer from './footer'

function AutionSkill (){


 const navigate = useNavigate()
 const {id}=useParams()
 console.log(id);
 const  autionskill=autionskills.find((c)=>c._id==id)
 
    
  return (
  

    <Container >
     <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
     <Row>
      <Col md={3}>
        {/* <Image src={course.image}  height={200} width={200}/> */}
    </Col>
      <Col md={6}>
      <Image src={autionskill.image} height={200} width={200}/>
      <ListGroup variant='flush'>
       <ListGroup.Item>
        <h3>{autionskill.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>Fee: {autionskill.fee}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>{autionskill.description}</h3>
       </ListGroup.Item>
      </ListGroup>
      </Col>
     <Col md={3}>
      <Card>
        <ListGroup varient='flush'>
          <ListGroup.Item>
            <h6>Duration:{autionskill.duration}</h6>

          </ListGroup.Item>
        </ListGroup>
        
          
          <ListGroup.Item>
          <Button  onClick={()=>{navigate("/form3")}}>Enroll Now</Button>
         
          </ListGroup.Item>
      </Card>
     </Col>


     </Row>
     <Footer/>
     
     </Container>


  ) 
  } 


export default AutionSkill
