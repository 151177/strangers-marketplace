import "./Search.css";
import { useState, useEffect } from "react";

const Search = ({ posts, setPosts, setFilteredPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = posts.filter(({ title, description, location }) => {
    if (!searchTerm) {
      return true;
    }
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  useEffect(() => {
    setFilteredPosts(filteredPosts);
  }, [searchTerm]);

  return (
    <div className='search'>
      <div className='search-label'>Search</div>
      <input
        placeholder='Type key word'
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
