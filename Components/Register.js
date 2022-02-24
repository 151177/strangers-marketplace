import './Register.css';
import { useState } from 'react';
import { register } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(username.toLowerCase(), password);
        navigate("/login");
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="register-form-content">
                <h2>Register</h2>
                <input className="register-username-input-field" value={username} onChange={(event) => {
                    setUsername(event.target.value)
                }} />
                <input className="register-password-input-field" type="password" value={password} onChange={(event) => {
                    setPassword(event.target.value)
                }} />
                <button className="register-submit-button">Create Account</button>
            </div>
        </form >
    )
}

export default Register;