import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../Actions/User';
import "./Login.css"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    // const alert = useAlert();


    const loginHandler = (e) => {
        e.preventDefault();

        dispatch(loginUser(email,password));
    }

    return (
        <div className="login">
            <form className="loginForm" onSubmit={loginHandler}>
                <Typography variant="h3" style={{ padding: "2vmax" }}>Social Media App</Typography>
                <input type="email" placeholder="Login Email ID" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Login Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                <Link to="/forget/password"><Typography>Forget Password</Typography></Link>
                <Button type="submit" >Longin</Button>
                <Link to="/register"><Typography>New User?</Typography></Link>
            </form>
        </div>
    )
}


// {
//     "name":"Bobby7",
//     "email":"bobby7@gmail.com",
//     "password":"123456"
// }