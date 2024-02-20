import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import eluctions from './eluctions'
import ReactDOM from 'react-dom';
import Footer from'./footer'



function Elocution (){


  const navigate = useNavigate();
const {id} =useParams()
 const eluction=eluctions.find((c)=>c._id==id)
 
    
  return (
  

    <Container >
     <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
     <Row>
      <Col md={3}>
        {/* <Image src={course.image}  height={200} width={200}/> */}
    </Col>
      <Col md={6}>
      <Image src={eluction.image} height={200} width={200}/>
      <ListGroup variant='flush'>
       <ListGroup.Item>
        <h3>{eluction.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>Fee: {eluction.fee}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>{eluction.description}</h3>
       </ListGroup.Item>
       <ol>
       	Rules and regulations

<ol>•	Participants must arrive at the location 30 minutes before the start of the competition. </ol>
<ol>•	The topic will be given to you before the competition begins.</ol>
<ol>•	Elocution will be based on self-composed content.</ol>
<ol>•	 The language for the elocution will be English. </ol>
<ol>•	Each participant will be allotted 5 minutes only, 3 minutes for speaking and 2 minutes for Q&A.</ol> 
<ol>•	Judging criteria will depend on presentation, introduction, depth of the topic, creativity, and grasp of language.</ol> 
<ol>•	Your speech shouldn’t deviate from the topic. </ol>
<ol>•	The judges' decision will be final. </ol>
<ol>•	Any external media (e.g., PowerPoint, poster, etc.) is not allowed."</ol>

       </ol>
      </ListGroup>
      </Col>
     <Col md={3}>
      <Card>
        <ListGroup varient='flush'>
          <ListGroup.Item>
            <h6>Duration:{eluction.duration}</h6>

          </ListGroup.Item>
        </ListGroup>
        
          
          <ListGroup.Item>
          <Button  onClick={()=>{navigate("/form1")}}>Enroll Now</Button>
         
          </ListGroup.Item>
      </Card>
     </Col>


     </Row>
   
     </Container>


  ) 
  } 


export default Elocution
