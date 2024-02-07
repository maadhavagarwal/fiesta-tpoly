import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Bf from '../3.png'
function HomeScreen({course}) {
  console.log(course);
  return (
    <Card className='my-3 p-3 rounded  bg-info'>
        <Link to={`/course/${course._id}`}>
        <Card.Img src={Bf}style={{height:"300px"}}></Card.Img>
        
        </Link>
        <Card.Body text as="h3">
        <Link to={`/course/${course._id}`}>
        
        
        </Link>
       
    
        </Card.Body>
    </Card>
    
  )
}

export default HomeScreen