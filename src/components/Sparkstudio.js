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
       
  <h3>Eligibility Criteria:</h3>
  
    <ol style={{color:"000000"}}>
    <li>
●	Only [current polytechnic students] are eligible to participate.
</li>
<li>
●	The maximum number of team members per team ( 1 minimum. 6 maximum ).
</li>
</ol>
<h4>
	Business Idea Submission:
  </h4>
<ol>
  <li>
●	Teams must submit a detailed business idea, including an executive summary, market analysis, and feasibility study.
</li>
<li>
●	The submission deadline is [20th Feb 2024 5PM], and late submissions will not be considered.
	Selection Criteria:
  </li>
<li>
●	Ideas will be evaluated based on innovation, market potential, feasibility, and overall viability.
</li>
<li>
●	No preference for a specific industry, but ideas should align with general ethical standards.
	Team Composition:

  </li>
<li>
●	Teams must consist solely of [current s students].
</li>
<li>
●	Limit the number of team members to a maximum of six
	</li>
  </ol>
  <h4>
  Intellectual Property:
  </h4>
  <ol>
<li>
●	Participants must disclose whether their business idea is based on existing intellectual property.
</li>
<li>
●	A standard confidentiality agreement must be signed by all participants.
</li>
</ol>
<h4>
  Presentation Guidelines:
  </h4>
  <ol>
<li>
●	Each team will have [5 Minutes] to present their business idea.
</li>
<li>
●	Presentations can include slides, live demonstrations, or prototypes.
</li>
<li>
●	Clarity, professionalism, and adherence to the allotted time will be considered in evaluation.
	Question and Answer Session:
  </li>
<li>
●	Each team will have [10 Minutes] for Q & A on their business idea.
</li>
<li>
●	A Q&A session, facilitated by the judging panel, will follow each pitch.
</li>
<li>
●	Teams should be prepared to answer questions about their business idea and implementation plan.
	Judging Panel:
  </li>
<li>
●	The judging panel will consist of industry experts, investors, and professionals.
</li>
<li>
  
●	Judges will evaluate pitches based on predefined criteria, with scores assigned individually.
	</li>
  </ol>
  <h4>
  Scoring System:
  </h4>
  <ol>
<li>
●	Judges will use a transparent scoring system that considers factors such as innovation, market potential, feasibility, and presentation quality.
</li>
<li>
●	Scores will be aggregated, and the team with the highest score will be the winner.
	Investment Terms:
  </li>
<li>
●	Participation in the event does not guarantee investment.
●	Interested investors will negotiate terms separately with winning teams.
</li>
<li>
●	Teams are encouraged to have legal representation for potential investment discussions.
	Code of Conduct:
  </li>
<li>
●	All participants must adhere to a code of conduct that emphasizes professionalism, respect, and ethical behavior.
</li>
<li>
●	Violations may result in disqualification or other consequences, as determined by the organizing committee.
	</li>
</ol>
  <h4>
  Event Logistics:
  </h4>
  <ol>
<li>
●	The event will take place at Thakur polytechnic
</li>
<li>
●	Teams should bring their own devices and equipment for presentations.
</li>
<li>
●	Technical support will be provided by the organizing committee.
</li>
</ol>
<h3>
	Disclosure Requirements:
  </h3>
  <ol>
<li>
●	Participants must disclose any conflicts of interest or biases that may affect the judging process.
</li>
<li>
●	Transparency is crucial for maintaining the integrity of the event.
</li>
</ol>
	<h3>Feedback Session:</h3>
<ol>
<li>
●	Each team will receive constructive feedback from the judging panel.
</li>
<li>
●	Feedback sessions are designed to help teams improve their business ideas and presentation skills.
	Media and Documentation:
  </li>
<li>
●	Media coverage and documentation of the event will be allowed.
</li>
<li>
●	Participants will be asked to sign a media release form granting permission for their images and content to be used for promotional purposes.
	Prizes and Recognition:
  </li>
<li>
●	The winning team will receive [prizes/awards].
</li>
<li>
●	All participating teams will receive [certificates of participation].
</li>
</ol>



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
