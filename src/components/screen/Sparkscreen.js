import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import spark from '../2.png'
function Sparkscreen({sparks}) {
  return (
    <Card className='my-3 p-3 rounded  bg-info'>
        <Link to={`/sparks/${sparks._id}`}>
        <Card.Img src={spark} style={{height:"300px"}}></Card.Img>
        
        </Link>
        <Card.Body text as="h3">
        <Link to={`/sparks/${sparks._id}`}>
       
        
        </Link>
       
        
        </Card.Body>
    </Card>
    
  )
}

export default Sparkscreen