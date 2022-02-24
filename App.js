import { Routes, Route } from 'react-router-dom';
import { Posts, Login, Register, Navigation, NewPost, Messages, CreateMessage } from './Components';
import { useState, useEffect } from 'react';
import { getUser } from './api';

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleUser = async () => {
    if(token) {
      const userObject =  await getUser(token);
      setUser(userObject);
    } else {
      setUser({});
    }
  }

  useEffect(() => {
    handleUser()
  }, [token])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
   }, [])

  return (
    <div className="App">
      <Navigation token={token} posts={posts} setToken={setToken} setPosts={setPosts} setFilteredPosts={setFilteredPosts}/> 
      <Routes>
        <Route path='/' element={<Posts posts={posts} setPosts={setPosts} token={token} filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} />} />
        <Route path='/login' element={<Login setToken={setToken}  />} />
        <Route path='/register' element={<Register token={token} setToken={setToken} />} />
        <Route path='/newpost' element={<NewPost token={token} posts={posts} setPosts={setPosts} />} />
        <Route path='/messages' element={<Messages token={token} user={user} posts={posts}/>} />
        <Route path='/createmessage/:postid' element={<CreateMessage token={token} posts={posts} setPosts={setPosts}/>} />
      </Routes>
    </div>
  );
}

export default App;
