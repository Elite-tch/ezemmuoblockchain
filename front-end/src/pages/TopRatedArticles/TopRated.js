import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TopRated.css'; // Ensure to style as needed
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import Loading from '../../components/Loading/Loading';
const TopRatedArticles = () => {
  const baseurl = 'http://localhost:3000';
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all blogs
    axios
      .get(`${baseurl}/blogs`)
      .then((response) => {
        const fetchedBlogs = response.data.blogs;

        // Sort blogs by createdAt (latest first) and limit to 4
        const sortedBlogs = fetchedBlogs
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4); // Limit to 4 latest blogs
        
        setBlogs(sortedBlogs);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const handleBlogClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="top-rated-articles">
      <h1>FEATURED ARTICLES</h1>
      {blogs.length > 0 ? (
        <div className="blog-grids">
          {blogs.map((blog) => (
            <div key={blog._id} className="blogPost" onClick={() => handleBlogClick(blog._id)}>
              <img src={blog.image || '/images/blog1.png'} alt={blog.title} />
              <div className="body">
                <div className="tag">
                  {blog.tagOne && <p>{blog.tagOne}</p>}
                  {blog.tagTwo && <p>{blog.tagTwo}</p>}
                  {blog.tagThree && <p>{blog.tagThree}</p>}
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.snippet}</p>
                <div className="meta">
                  <span>{blog.createdAt.slice(0, 10)}</span>
                  <p>{blog.readMins}</p>
                </div>
              </div>
            
            </div>
          ))}
         <div className='view-all'>
         <Link to="/blog" className="about-me-read-more">SEE ALL ARTICLES <BsArrowUpRight/></Link>
   
         </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default TopRatedArticles;
