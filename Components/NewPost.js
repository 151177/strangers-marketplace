import './NewPost.css';
import { useState } from "react";
import { newPostData } from "../api";
import { useNavigate } from 'react-router-dom';


const NewPost = ({ token, posts, setPosts }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchNewPostData = await newPostData(token, title, description, price, location, willDeliver);
        setPosts([...posts, fetchNewPostData]);
        navigate("/");
    }

    return (
        <form className="new-post-form" onSubmit={handleSubmit}>
            <div className="new-post-form-content">
                <h2>Create New Post</h2>
                <input required placeholder="Title" className="title-input-field" value={title} onChange={(event) => {
                    setTitle(event.target.value)
                }} />
                <input required placeholder="Description" className="description-input-field" value={description} onChange={(event) => {
                    setDescription(event.target.value)
                }} />
                <input required placeholder="Price" className="price-input-field" value={price} onChange={(event) => {
                    setPrice(event.target.value)
                }} />
                <input placeholder="Location" className="location-input-field" value={location} onChange={(event) => {
                    setLocation(event.target.value)
                }} />
                <div className="will-deliver-label">Will Deliver?
                    <select value={willDeliver} className="will-deliver-selection" onChange={(event) => {
                    setWillDeliver(event.target.value)
                }}>
                        <option value={false}>No</option>
                        <option value={true}>Yes</option>
                    </select>
                </div>
                <button className="add-new-post-button">Add New Post</button>
            </div>
        </form>
    )
}

export default NewPost;