import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Mock from '../1.png'
function HomeScreen({mock}) {
  return (
    <Card className='my-3 p-3 rounded bg-info'>
        <Link to={`/mock/${mock._id}`}>
        <Card.Img src={Mock} style={{height:"300px"}}></Card.Img>
        
        </Link>
        <Card.Body text as="h3">
        <Link to={`/mock/${mock._id}`}>
        
        
        </Link>
       
       
        </Card.Body>
    </Card>
    
  )
}

export default HomeScreen