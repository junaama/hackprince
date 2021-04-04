import React,{useState} from 'react';
import axios from 'axios';

const Login = () => {
    const [user,setUser]=useState({"Email": "", "Password": ""})
    const handleChange = (e)=> {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit =async(e)=> {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/users/login', user)

        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" />
                <label>Password</label>
                <input type="text" />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Login;