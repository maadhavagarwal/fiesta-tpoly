import React from 'react'
import {Container,Row,Col,Form,Button,Card} from  'react-bootstrap'
import FormContainer from '../FormContainer'
import Messages from '../messages'
import {useState} from 'react'

function Login() {
  const [email,setEmail]=useState('');
const [pass1,setPass1]=useState('');
const [message,setMessage]=useState('');
const submithandler=(e)=>{
  e.perventDefualt()
  setMessage(`${email},${pass1}`) 
 setEmail('')
 setPass1('') 
//setMessage('')
}
  return (
     <>
   <FormContainer>
        <Form onSubmit={submithandler}>
            <h1 classname='text-centre'>Signup</h1>
            {message && <Messages varient='sucess'>{message}</Messages>}
            <i class="fa-regular fa-envelope"></i>
            <Form.Group controlId='firstname'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' placeholder="Email" value={email} onchange={(e)=> setEmail(e.target.value)}required></Form.Control>
            </Form.Group>
            <i class="fa-solid fa-lock"></i>
            <Form.Group controlId='firstname'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder="password" value={pass1} onchange={(e)=> setPass1(e.target.value)} required></Form.Control>
            </Form.Group>
            <Button classname='mt-3' type='submit' variant='sucess'>login</Button>
        </Form>
    </FormContainer>
   </>
  )
}

export default Login