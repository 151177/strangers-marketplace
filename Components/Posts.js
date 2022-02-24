import { fetchPosts, handleDelete } from "../api";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = ({ token, posts, setPosts, filteredPosts, setFilteredPosts}) => {
    const handlePosts = async () => {
        try {
            const newPosts = await fetchPosts(token);
            setPosts(newPosts);
            setFilteredPosts(newPosts);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        handlePosts();
    }, [token])

    const deletePosts = async (currentPostId) => {
        const success = await handleDelete(token, currentPostId);
        if (success) {
            const newPosts = posts.filter(post => post._id !== currentPostId)
            setPosts(newPosts);
            setFilteredPosts(newPosts);
        }
    }
    return (
        <div>
            <div className="posts">
                {filteredPosts.length > 0 &&
                    filteredPosts.map(({ _id, title, author:{username}, description, price, location, willDeliver, isAuthor }) => {
                        return (
                            <div className="post" key={_id}>
                                <div className="username">{username}</div>
                                <div className="title">{title}</div>
                                <div className="description">{description}</div>
                                <div className="price">Price: {price}</div>
                                <div className="location">Location: {location}</div>
                                {token && willDeliver ? <div className="will-deliver">Will Deliver</div> : null}
                                {token && isAuthor ? <button className="delete-button" onClick={() => deletePosts(_id)}>Delete</button> : null}
                                {token && !isAuthor ? <Link to={`/createmessage/${_id}`}><button className="send-message-button">Send Message</button></Link>
                                        : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts;