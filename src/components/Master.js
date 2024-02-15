import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import masters from './MMs'
import ReactDOM from 'react-dom';


function Master(){


 const navigate = useNavigate()
 const {id}=useParams()
 console.log(id);
 const  master=masters.find((c)=>c._id==id)
 
    
  return (
  

    <Container >
     <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
     <Row>
      <Col md={3}>
        {/* <Image src={course.image}  height={200} width={200}/> */}
    </Col>
      <Col md={6}>
      <Image src={master.image} height={200} width={200}/>
      <ListGroup variant='flush'>
       <ListGroup.Item>
        <h3>{master.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>Fee: {master.fee}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>{master.description}</h3>
       </ListGroup.Item>
       <h4>MST. & MS. FIESTA</h4>
<ol>
<ol>•	Registration fees of each college is 100/- </ol>
<ol>•	Prize money for both the winner ( male and female ) is 1000/- per winner </ol>
<ol>•	Only 2 person ( 1 male 1 female ) from each college </ol>
<ol>•	There will be 3 rounds, all the rounds are based on entrepreneurship and business </ol>
<ol>•	All the participants have to reach the college 2hrs before the starting event time</ol>
<ol>•	Carry all your needy things.</ol>
</ol>
<ol>
# 1st round – Q & A 
You will have to wear business related clothes (i.e blazer, formals, etc.). and after the walk you will be asked to some questions based on some situations
</ol>
<ol>
# 2nd round – Motivation round 
You will get 5 mins to motivate the youth generation 
</ol>
<ol>
#3rd round – 10 mins Pitch 
This will be a type of surprise round where you will get any object or materialistic thing and you will have to pitch about that product 
</ol>


      </ListGroup>
      </Col>
     <Col md={3}>
      <Card>
        <ListGroup varient='flush'>
          <ListGroup.Item>
            <h6>Duration:{master.duration}</h6>

          </ListGroup.Item>
          
        </ListGroup>
        
          
          <ListGroup.Item>
          <Button  onClick={()=>{navigate("/form2")}}>Enroll Now</Button>
         
          </ListGroup.Item>
      </Card>
     </Col>


     </Row>
     
     </Container>


  ) 
  } 


export default Master
