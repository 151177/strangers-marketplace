import './CreateMessage.css';
import { useState } from "react";
import { fetchMessage, fetchPosts } from "../api";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const CreateMessage = ({ token, posts, setPosts }) => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const { postid } = useParams()
    const [post] = posts.filter((element) => {
        return postid === element._id;
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchMessage(token, message, postid);
        setMessage("");
        const newPosts = await fetchPosts(token);
        setPosts(newPosts);
        navigate("/");
    }

    return (
        <form className="new-message-form" onSubmit={handleSubmit}>
            <div className="new-message-form-content">
                <h2>Create Message</h2>
                <div className="send-message-label">Send to: {post.author.username}</div>
                <input value={message} required placeholder="Message" className="message-input-field" onChange={(event) => {
                    setMessage(event.target.value)
                }} />
                <button className="send-message-button">Send Message</button>
            </div>
        </form>
    )
}

export default CreateMessage;