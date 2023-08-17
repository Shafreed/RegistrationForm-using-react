import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
})

const inputChangeHandler =(event)=>{
const {name,value}=event.target
setFormData((prevData)=>({...prevData,[name]:value}))
}

const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData);
    
}

  return (
    <div className='sign-up-container'>
    <div className='signup-card'>
      <h1>Registration Form</h1>
    
    <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='First Name' name='firstName' value={formData.firstName} onChange={(event)=>inputChangeHandler(event)}/>
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} onChange={(event)=>inputChangeHandler(event)}/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Email'  name='email' value={formData.email} onChange={(event)=>inputChangeHandler(event)}/>
        <label htmlFor="">Password</label>
        <input type="Password" placeholder='Password' name='password'value={formData.password} onChange={(event)=>inputChangeHandler(event)} />
        <button type='submit'>Sign Up</button>
    </form>
    </div>
    </div>
  )
}

export default Signup
