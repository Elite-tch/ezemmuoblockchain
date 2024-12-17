import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RelatedBlogs.css'; // Ensure to style as needed
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading'
const RelatedBlogs = () => {
  const baseurl = 'http://localhost:3000';
  const { blogId } = useParams(); // Get the current blog ID from the route
  const [blogs, setBlogs] = useState([]);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all blogs
    axios
      .get(`${baseurl}/blogs`)
      .then((response) => {
        setBlogs(response.data.blogs);

        // Find the current blog
        const currentBlog = response.data.blogs.find((blog) => blog._id === blogId);

        // Find related blogs based on category or tags
        if (currentBlog) {
          const related = response.data.blogs.filter(
            (blog) =>
              blog._id !== blogId && // Exclude the current blog
              (blog.category === currentBlog.category || // Same category
                [blog.tagOne, blog.tagTwo, blog.tagThree].some((tag) =>
                  [currentBlog.tagOne, currentBlog.tagTwo, currentBlog.tagThree].includes(tag)
                )) // Matching tags
          );
          setRelatedBlogs(related.slice(0, 4)); // Limit to 4 related blogs
        }
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, [blogId]);

  const handleBlogClick = (id) => {
    // Scroll to the top before navigating
    window.scrollTo(0, 0);
    
    // Navigate to the blog details page
    navigate(`/blog/${id}`);
  };

  return (
    <div className="related-blogs">
     
      {relatedBlogs.length > 0 ? (
        <div className="related-blog">
          {relatedBlogs.map((blog) => (
            <div key={blog._id} className="related-blogPost" onClick={() => handleBlogClick(blog._id)}>
              <img src={blog.image || '/images/blog1.png'} alt={blog.title} />
              <div className="body">
                <div className="tag">
                  {blog.tagOne && <p>{blog.tagOne}</p>}
                  {blog.tagTwo && <p>{blog.tagTwo}</p>}
                  {blog.tagThree && <p>{blog.tagThree}</p>}
                </div>
                <h2>{blog.title}</h2>
                <p className='blog_snip'>{blog.snippet}</p>
                <div className="meta">
                  <span>{blog.createdAt.slice(0, 10)}</span>
                  <p>{blog.readMins}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RelatedBlogs;
