import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Ms from './8.png'
function Sem({sem2s}) {
  return (
    <Card className='my-3 p-3 rounded bg-info'>
        <Link to={`/sem2s/${sem2s._id}`}>
        <Card.Img src={Ms} style={{height:"300px"}}></Card.Img>
        
        </Link>
        <Card.Body text as="h3">
        <Link to={`/sem2s/${sem2s._id}`}>
        
        </Link>
       
     
        </Card.Body>
    </Card>
    
  )
}

export default Sem