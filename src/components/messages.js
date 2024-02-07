 import React, { Children } from 'react'
import { Alert } from 'react-bootstrap'
 
 function messages({varient,children}) {
   return (
     <Alert varient={varient}>
        {children}
     </Alert>
   )
 }
 
 export default messages