import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogDetails.css';
import RelatedBlogs from '../../../src/components/RelatedBlogs/RelatedBlogs'; // Import the RelatedBlogs component
import Footer from '../../components/Footer/Footer';



const BlogDetails = () => {
  const { blogId } = useParams();
  const [data, setData] = useState(null);
  const [authorInfo, setAuthorInfo] = useState(null);
  const [commentData, setCommentData] = useState({
    comment: '',
    name: '',
    email: ''
  });

  const baseurl = 'http://localhost:3000';

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch blog details by ID
  useEffect(() => {
    if (blogId) {
      axios
        .get(`${baseurl}/blogs/${blogId}`)
        .then((response) => {
          setData(response.data.blog);
        })
        .catch((err) => {
          console.error('Error fetching blog:', err);
        });
    }
  }, [blogId]);

  // Fetch author details
  useEffect(() => {
    axios
      .get(`${baseurl}/admin_dashboard/users`)
      .then((response) => {
        setAuthorInfo(response.data.users);
      })
      .catch((err) => {
        console.error('Error fetching author info:', err);
      });
  }, []);

  const author = data ? data.author : '';
  const authorUrl = encodeURIComponent(author).replace(/%20/g, '-');

  const authorSocials = authorInfo
    ? authorInfo.filter((item) => item.username === author)
    : [];

  // Handle comment input change
  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    });
  };

  // Submit a comment
  const submitComment = (e) => {
    e.preventDefault();
    const commentInfo = {
      blogId: blogId,
      comments: {
        commenter: commentData.name,
        text: commentData.comment
      }
    };
    axios
      .post(`${baseurl}/blogs/${blogId}/comments`, commentInfo)
      .then((res) => {
        setData((prevData) => ({
          ...prevData,
          comments: [...prevData.comments, res.data.comment]
        }));
        setCommentData({ comment: '', name: '', email: '' });
      })
      .catch((err) => {
        console.error('Error submitting comment:', err);
      });
  };

  if (!data) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className='blog-details-width'>
<div className="blog-details">
      <section className="blogread">
        <h1 className="bread_title">{data.title}</h1>
        <div className="top">
         <div className='bread_flex'>
         <div className="bread_date">
            <img alt="author" src="/images/kevin1.png" className="authorIcon" />
            <span>
              Published by{' '}
              <b>
                <Link to={`/articles/authors/${authorUrl}`} state={data.author}>
                  {data.author}
                </Link>{' '}
                <br /> {data.createdAt.slice(0, 10)}
              </b>{' '}
              - {data.readMins}
            </span>
          </div>
          <div className="bread_customTags">
            <ul>
              {data.tagOne && <li>{data.tagOne}</li>}
              {data.tagTwo && <li>{data.tagTwo}</li>}
              {data.tagThree && <li>{data.tagThree}</li>}
              {data.tagFour && <li>{data.tagFour}</li>}
              {data.tagFive && <li>{data.tagFive}</li>}
              {data.tagSix && <li>{data.tagSix}</li>}
            </ul>
          </div>


         </div>
          <div className="share_socials">
            <h3>Share this:</h3>
            <span>
              <Link to="#">
                <img alt="icons" src="/images/icons8-facebook-48.png" />
              </Link>
              <Link to="#">
                <img alt="icons" src="/images/icons8-twitter-48.png" />
              </Link>
              <Link to="#">
                <img alt="icons" src="/images/icons8-linkedin-48.png" />
              </Link>
              <Link to="#">
                <img alt="icons" src="/images/icons8-telegram-48.png" />
              </Link>
              <Link to="#">
                <img alt="icons" src="/images/icons8-instagram-48.png" />
              </Link>
              <Link to="#">
                <img alt="icons" src="/images/icons8-link-50.png" />
              </Link>
            </span>
          </div>
          <img alt="blog_image" src={data.image} className="himg" />
        </div>
        <article className="blog_article">
          <div className="blog_body">
            <ReactQuill value={data.body} readOnly={true} modules={{ toolbar: false }} />
          </div>
        </article>
        <div className="bread_author">
        <div className='publish'>
        <h2>Published by:</h2>
        <div className='bread_author-flex'>
        <img alt="" className="authorImg" src="/images/kevin1.png" />
         
         <div className=''>
         <h3>{data.author}</h3>
                   <p>
                     <Link to={`/articles/authors/${authorUrl}`} state={data.author}>
                       See author's posts
                     </Link>
                   </p>
                   <span className="author_socials">
                     {authorSocials.map((item) => (
                       <span key={item._id}>
                         <Link
                           to={`https://twitter.com/${item.twitterId}`}
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <img alt="icons" src="/images/icons8-twitter-48.png" />
                         </Link>
                         <Link
                           to={`https://linkedin.com/in/${item.linkedInId}`}
                           target="_blank"
                           rel="noopener noreferrer"
                         >
                           <img alt="icons" src="/images/icons8-linkedin-48.png" />
                         </Link>
                       </span>
                     ))}
                   </span>
         
         
         </div>
         




        </div>
        </div>
        </div>
        <div className="rcomments">
          <h1>Recent comments</h1>
          <main className='comments'>
            {data.comments &&
              data.comments.map((item, index) => (
                <ul key={index}>
                  <li>{item.commenter}</li>
                  <li>{item.text}</li>
                </ul>
              ))}
          </main>
        </div>
        <form className="comment" onSubmit={submitComment}>
          <h1>Leave a reply</h1>
          <main>
            <div>
              <label>
                Comment:
                <textarea
                  placeholder="Leave your comment"
                  value={commentData.comment}
                  onChange={handleChange}
                  name="comment"
                />
              </label>
            </div>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  placeholder="Fullname"
                  value={commentData.name}
                  onChange={handleChange}
                  name="name"
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  placeholder="Email"
                  value={commentData.email}
                  onChange={handleChange}
                  name="email"
                />
              </label>
            </div>
          </main>
          <div className='button-flex'>
          <button type="submit">Post comment</button>
          </div>
        </form>
       
      </section>
    </div>
    <div className='related'>
          <h1 className="otherReadsHeader">Related Articles</h1>
          <hr />
          <RelatedBlogs />
        </div>
<Footer />

    </div>
  );
};

export default BlogDetails;
