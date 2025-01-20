import React, { useState, useEffect } from "react";
import BlogFrame from "../blogFrame/blogFrame";
import axios from "axios";
import Loading from "../Loading/Loading";
import "./blogPost.css";

const BlogPost = () => {
  const baseurl = "http://localhost:3000";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseurl}/blogs`);
        setData(response.data.blogs);
        console.log("🚀 ~ fetchData ~ response:", response);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting blog post with ID:", id);
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      axios
        .delete(`${baseurl}/blogs/${id}`)
        .then((response) => {
          console.log("Post deleted:", response.data);
          setData((prevData) => prevData.filter((item) => item._id !== id));
        })
        .catch((err) => {
          console.error("Error deleting post:", err);
        });
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error loading blog posts: {error.message}</div>;
  }

  return (
    <>
      <div className="blogPosts">
        {data.length > 0 ? (
          data.map((item) => (
            <BlogFrame
              key={item._id}
              image={item.image ? item.image : "/images/blog1.png"}
              date={item.createdAt.slice(0, 10)}
              tagOne={item.tagOne}
              tagTwo={item.tagTwo}
              tagThree={item.tagThree}
              tagFour={item.tagOne}
              tagFive={item.tagTwo}
              tagSix={item.tagThree}
              title={item.title}
              body={item.body}
              blogSnippet={item.snippet}
              readLength={item.readMins}
              id={item._id}
              author={item.author}
              createdAt={item.createdAt}
              comments={item.comments}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div>No blog posts available.</div>
        )}
      </div>
    </>
  );
};

export default BlogPost;
