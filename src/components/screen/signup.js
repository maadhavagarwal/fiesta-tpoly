import React from 'react'
import {Container,Row,Col,Form,Button,Card} from  'react-bootstrap'
import FormContainer from '../FormContainer'
import Messages from '../messages'
import {useState} from 'react'
//import QR from './QR.jpeg'
function Signup(){
const [fname,setFname]=useState('');
const [lname,setLname]=useState(''); 
const [email,setEmail]=useState('');
const [pass1,setPass1]=useState('');
const [pass2,setPass2]=useState('');
const [mobile,setMobile]=useState('');
const [message,setMessage]=useState('');
const submithandler=(e)=>{
  e.perventDefualt()
  setMessage(`${fname},${lname},${email},${mobile}`)
 if(pass1/=pass2){
  setMessage('password is not matching')
 }
 else if(mobile.length/=10){
  setMessage('pls entre 10 digit number')
 }
 else{
  setFname('')
 setLname('')
 setEmail('')
 setPass1('')
 setPass2('')
 setMobile('')
//setMessage('')
 }
}


return (
    <>
    
    <FormContainer>
        <Form onSubmit={submithandler}>
            <h1 classname='text-centre'>Register</h1>
            {message && <Messages varient='sucess'>{message}</Messages>}
            <i class="fa-regular fa-user"></i>
            <Form.Group controlId='firstname'>

            <Form.Label>First name</Form.Label>
            <Form.Control type='text' placeholder="Enter your first name" value={fname} onchange={(e)=> setFname(e.target.value)} required></Form.Control></Form.Group>
            <Form.Group controlId='firstname'>
            <Form.Label>last name</Form.Label>
            <Form.Control type='text' placeholder="Enter your last  name" value={lname} onchange={(e)=> setLname(e.target.value)} required></Form.Control>
             </Form.Group>
             <i class="fa-regular fa-envelope"></i>
            <Form.Group controlId='firstname'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' placeholder="Enter your ename" value={email} onchange={(e)=> setEmail(e.target.value)}required></Form.Control>
            </Form.Group>
            
            
            <i class="fa-solid fa-mobile"></i>
            <Form.Group controlId='firstname'>
            <Form.Label>Mobile Numbere</Form.Label>
            <Form.Control type='Number' placeholder="Enter your Mobile number" value={mobile} onchange={(e)=> setMobile(e.target.value)}required></Form.Control>
            </Form.Group>
            <i class="fa-solid fa-mobile"></i>
            <Form.Group controlId='firstname'>
            <Form.Label>Event name</Form.Label>
            <Form.Control type='Number' placeholder="Event" value={mobile} onchange={(e)=> setMobile(e.target.value)}required></Form.Control>
            </Form.Group>
            
            <Button classname='mt-3' type='submit'>Signup</Button>
        </Form>
    </FormContainer>
    </>
  );
}

export default Signup;