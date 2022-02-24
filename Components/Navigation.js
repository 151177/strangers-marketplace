import './Navigation.css';
import { Link } from 'react-router-dom';
import Search from './Search'

const Navigation = ({ token, setToken, posts, setPosts, setFilteredPosts }) => {
    return (
        <div className="navigation">
            <div>
                <div className="logo">Stranger's Marketplace</div>
                <div className="subhead">A place for everything you don't need</div>
            </div>
            <Search posts={posts} setPosts={setPosts} setFilteredPosts={setFilteredPosts} />
            {token ? <Link to="/newpost"><button className="create-new-post-button">Create New Post</button></Link>
                : null}
            <div>
                <Link to="/" className="home-link">Home</Link>
                {token ? < Link to="/messages" className="messages-link">Messages</Link> : null}
                {token ? <Link to="/" className="logout-link" onClick={() => {
                    setToken("");
                    localStorage.removeItem('token');
                }}>Log Out</Link> : <Link to="/login" className="login-register-link">Log In / Register</Link>}
            </div>
        </div>
    )
}

export default Navigation;