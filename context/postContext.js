import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//context
const PostContext = createContext();

const PostProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [post, setPosts] = useState([]);

  //get posts
  const getAllPosts = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get("/post/get-all-posts");
      setLoading(false);
      setPosts(data?.post);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // inintal  posts
  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <PostContext.Provider value={[post, setPosts, getAllPosts]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };