import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import aution from '../4.png'
function HomeScreene({autionskill}) {
  return (
    <Card className='my-3 p-3 rounded  bg-info'>
        <Link to={`/autionskill/${autionskill._id}`}>
        <Card.Img src={aution} style={{height:"300px"}}></Card.Img>
        
        </Link>
        <Card.Body text as="h3">
        <Link to={`/autionskill/${autionskill._id}`}>
        
        
        </Link>
       
      
        </Card.Body>
    </Card>
    
  )
}

export default HomeScreene