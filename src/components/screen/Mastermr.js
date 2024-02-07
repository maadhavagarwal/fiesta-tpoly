import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Ms from '../6.png'
function HomeScreene({master}) {
  return (
    <Card className='my-3 p-3 rounded bg-info'>
        <Link to={`/master/${master._id}`}>
        <Card.Img src={Ms} style={{height:"300px"}}></Card.Img>
        
        </Link>
        <Card.Body text as="h3">
        <Link to={`/master/${master._id}`}>
        
        </Link>
       
     
        </Card.Body>
    </Card>
    
  )
}

export default HomeScreene