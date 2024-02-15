import React,{useState} from 'react'
import{Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap"
import { Link,useNavigate,useParams } from 'react-router-dom'
import courses from '../courses'
import ReactDOM from 'react-dom';


function Course (){


  const navigate = useNavigate();
const {id} =useParams()
 const course=courses.find((c)=>c._id==id)
 
    
  return (
  

    <Container >
     <Link to='/events' className='btn btn-dark my-3'>Go Back</Link>
     <Row>
      <Col md={3}>
        {/* <Image src={course.image}  height={200} width={200}/> */}
    </Col>
      <Col md={6}>
      <Image src={course.image} height={200} width={200}/>
      <ListGroup variant='flush'>
       <ListGroup.Item>
        <h3>{course.name}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>Fee: {course.fee}</h3>
       </ListGroup.Item>
       <ListGroup.Item>
        <h3>{course.description}</h3>
       </ListGroup.Item>
       <ol>
       <ol>
        

	Rules:
</ol>
<ol>
1.	Do not litter and maintain the decorum of the event.
</ol>
<ol>
2.	Chairs won’t be provided; you need to bring your own chairs.
</ol>
<ol>
3.	Tables will be arranged for you.
</ol>
<ol>
4.	It is compulsory to wear your college ID card.
</ol>
<ol>
5.	There are three criteria for judging:
</ol>
<ol>
a.	Presentation
</ol>
<ol>
b.	Cleanliness 
</ol>
<ol>
c.	Execution 
</ol>
<ol>
d.	A Mystery Criteria  
</ol>
<ol>

6.	Themes:
</ol>
<ol>
a.	Service – Clothing items, materials, etc.
</ol>
<ol>
b.	Games
</ol>
<ol>
c.	Food 
</ol>
<ol>
7.	Only 3 participants are allowed per team.
</ol>
<ol>
8.	Electricity and water will be provided.
</ol>
<ol>
9.	You are allowed to keep only two payment modes – UPI and Cash.
</ol>
<ol>
10.	 It is mandatory to send a WhatsApp message to +91 9313859293 (Jay Patel) regarding your theme, items used, etc.
For example, if you’re choosing Food, you should mention what you will be selling, the items used, etc.
</ol>
<ol>
11.	 Prizes:
</ol>
<ol>
1st winner - ₹1000 cash + Certificate + Momento
</ol>
<ol>
2nd winner - ₹500 cash + Certificate + Momento
</ol>
<ol>
3rd winner - Certificate + Momento
</ol>



       </ol>
      </ListGroup>
      </Col>
     <Col md={3}>
      <Card>
        <ListGroup varient='flush'>
          <ListGroup.Item>
            <h6>Duration:{course.duration}</h6>

          </ListGroup.Item>
        </ListGroup>
        
          
          <ListGroup.Item>
          <Button  onClick={()=>{navigate("/form")}}>Enroll Now</Button>
         
          </ListGroup.Item>
      </Card>
     </Col>


     </Row>
   
     </Container>


  ) 
  } 


export default Course
