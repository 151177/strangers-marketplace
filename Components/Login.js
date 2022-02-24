import './Login.css';
import { useState } from "react";
import { login } from "../api";
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = await login(username.toLowerCase(), password);
        localStorage.setItem('token', token);
        setToken(token);
        navigate("/")
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-content">
                <h2>Login</h2>
                <input className="login-password-input-field" value={username} onChange={(event) => {
                    setUserName(event.target.value)
                }} />
                <input className="login-password-input-field" type="password" value={password} onChange={(event) => {
                    setPassword(event.target.value)
                }} />
                <button className="login-submit-button">Submit</button>
                <div className='sign-up-link'>Don't have an account? <strong><Link to="/register">Sign Up</Link></strong></div>
            </div>
        </form>
    )
}

export default Login;