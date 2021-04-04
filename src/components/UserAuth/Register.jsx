import React, { useState } from 'react';
import axios from 'axios'
const Register = () => {
    const [user,setUser]=useState({"First_name": "", "Email": "", "Password": ""})
    const handleChange = (e)=> {
        setUser({...user, [e.target.name]: e.target.value})
    }
    console.log(user)
    const handleSubmit = async(e)=> {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/users/signup', user)

        } catch (err) {
            console.error(err)
        }
        
    }
    return (
        <div>
            <h2>Please Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="First_name" onChange={handleChange}/>

                <label>Email</label>
                <input type="text" name="Email" onChange={handleChange}/>

                <label>Password</label>
                <input type="password" name="Password" onChange={handleChange}/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Register;