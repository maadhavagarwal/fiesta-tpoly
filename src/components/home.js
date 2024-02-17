import React from 'react'
import{Row,Col} from 'react-bootstrap'
import courses from '../courses'
import autionskill from './autionskills'
import HomeScreen from './screen/HomeScreen'
import HomeScreene from './screen/Homescreene'
import MockHome from './screen/MockHome'
//import Eluction from './Eluction'
import autionskills from './autionskills'
import Course from './Course'
import Mock from './Mock'
 import Spark from './Sparkstudio'
 import sem1s from './sem1s'
 import sem2s from './sem2s'
 import sem3s from './sem3s'
 import sem5s from './sem5s'
 import sem6s from './sem6s'
 import sems from './sems'
import mockinterviews from './mockinterviews'
import Sparkstudio from './screen/Sparkscreen'
import sparks from './sparkstudios'
import Sparkscreen from './screen/Sparkscreen'
import master from './Master'
import masters from './MMs'
import Mastermr from './screen/Mastermr'
import Eluc from './screen/Eluc'
import Seminar from './screen/FSem1'
import Seminar2 from './screen/FSem2'
import Seminar3 from './screen/FSem3'
import Seminar4 from './screen/FSem4'
import Seminar5 from './screen/FSem5'
import Seminar6 from './screen/FSem6'
import eluctions from './eluctions'
import Footer from './footer'
function Home() {
  return (
    <>
    <h1 className='text-center m-3'>Event</h1>
    <hr></hr>
    <Row style={{display:'flex',flexWrap:'wrap',width:'100%',margin:'0'}} sm={12} md={6} lg={3} xl={8}>
    <Row>
        {courses.map((course)=>(
        <Col key={course._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <HomeScreen course={course}></HomeScreen>
          
        </Col>      ))
        }
    </Row>
    <Row>
    {sparks.map((sparks)=> {
      return (
        <Col key={sparks._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <Sparkscreen sparks={sparks}></Sparkscreen>
        </Col>      );
    })}  
    </Row>
    <Row style={{margin:'0px'}}>
    {autionskills.map((autionskill)=> {
      return (
        <Col key={autionskill._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <HomeScreene autionskill={autionskill}></HomeScreene>
        </Col>      );
    })}  
    </Row>
    
    
    <Row>
    {eluctions.map((eluction)=> {
      return (
        <Col key={eluction._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <Eluc eluctions={eluction}></Eluc>
        </Col>      );
    })}  
    </Row>
    <Row>
    {masters.map((master)=> {
      return (
        <Col key={master._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <Mastermr master={master}></Mastermr>
        </Col>      );
    })}  
    </Row>
    <Row style={{margin:'0px'}}>
    {sem1s.map((Sem1)=> {
      return (
        <Col key={autionskill._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <Seminar Sem1={Sem1}></Seminar>
        </Col>      );
    })}  
    </Row>
    </Row>
    
  <Footer/>
   
    

  
    </>
  )
}

export default Home