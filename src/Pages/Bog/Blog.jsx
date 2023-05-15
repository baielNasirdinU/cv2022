import React, { useState, useEffect } from "react";
import "./blog.scss";
import { Posts } from "../../Conpanents/Posts/Posts";
import axios from "axios";
import { Pagination } from "../../Conpanents/Pagination/Pagination";
import { motion } from "framer-motion";
const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentpage] = useState([1]);
  const [postsPerPage] = useState([5]);
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    getPosts();
  }, []);

  const indexOflastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOflastPost);
  const paginate = (pageNumber) => {
    setCurrentpage(pageNumber);
  };

  return (
    <>
      <div className="blog">
        <div className="container blog__container">
          <motion.h1
            className="blog__title"
            initial={{ x: -100 }}
            animate={{ x: "50%" }}>
            my blog
          </motion.h1>
          <div className="">
            <Posts posts={currentPosts} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
