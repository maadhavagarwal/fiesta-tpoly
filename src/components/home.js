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
import Seminar from './screen/Seminar1'
import Seminar2 from './screen/Seminar2'
import Seminar3 from './screen/Seminar3'
import Seminar4 from './screen/Seminar'
import Seminar5 from './screen/Seminar5'
import Seminar6 from './screen/Seminar6'
import eluctions from './eluctions'
import Footer from './footer'
function Home() {
  return (
    <>
    <h1 className='text-center m-3'>Event</h1>
    <hr></hr>
    <Row style={{display:'flex',flexWrap:'wrap',width:'100%',margin:'0'}} sm={12} md={6} lg={3} xl={8}>
    {/*<Row>
        {courses.map((course)=>(
        <Col key={course._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> 
          <HomeScreen course={course}></HomeScreen>
          
        </Col>      ))
        }
      </Row>*/}
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
   {/*} <Row >
    {sem1s.map((sem1s)=> {
      return (
        <Col key={sem1s._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> 
          <Seminar sem1s={sem1s}></Seminar>
        </Col>      );
    })}  
    </Row>
    <Row >
    {sem2s.map((sem2s)=> {
      return (
        <Col key={sem2s._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> 
          <Seminar2 sem2s={sem2s}></Seminar2>
        </Col>      );
    })}  
    </Row>*/}
    <Row >
    {sem3s.map((sem3s)=> {
      return (
        <Col key={sem3s._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <Seminar3 sem3s={sem3s}></Seminar3>
        </Col>      );
    })}
    </Row>
        <Row >
        {sems.map((sems)=> {
          return (
            <Col key={sems._id} sm={12} md={6} lg={4} xl={8}>
              {/* <h2>{course.name}</h2> */}
              <Seminar4 sems={sems}></Seminar4>
            </Col>      );
        })}  
        </Row>
        <Row >
    {sem5s.map((sem5s)=> {
      return (
        <Col key={sem5s._id} sm={12} md={6} lg={4} xl={8}>
          {/* <h2>{course.name}</h2> */}
          <Seminar5 sem5s={sem5s}></Seminar5>
        </Col>      );
    })}
    </Row>
       <Row >
        {sem6s.map((sem6s)=> {
          return (
            <Col key={sem6s._id} sm={12} md={6} lg={4} xl={8}>
              {/* <h2>{course.name}</h2>*/}
              <Seminar6 sem6s={sem6s}></Seminar6>
            </Col>      );
        })}  
      </Row>
     
    
    </Row>
  
    
  <Footer/>
   
    

  
    </>
  )
}

export default Home