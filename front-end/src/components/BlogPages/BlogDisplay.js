import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './BlogDisplay.css'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
const BlogDisplay = () => {
  const baseurl = 'http://localhost:3000'
  const [data, setData] = useState([])
  const [categories] = useState(['education', 'blockchain', 'crytocurrency', 'coding/dev', 'featured', 'tutorials', 'reviews', 'tech', 'productivity'])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const blogsPerPage = 12
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${baseurl}/blogs`)
      .then(response => {
        setData(response.data.blogs)
      })
  }, [])

  const filteredBlogs = selectedCategory ? data.filter(item => item.category === selectedCategory) : data

  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
    setDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleBlogClick = (blogId) => {
    navigate(`/blog/${blogId}`)
  }

  return (
    <div className="container-display">
      <div className="category-filter">
      <button 
          onClick={() => handleCategoryChange('')}
          className={selectedCategory === '' ? 'active' : ''}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category} 
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
       
      </div>
    {/* <div className="dropdown">
        <button className='button' onClick={toggleDropdown}>Filter ▼</button>
        <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
        <button onClick={() => handleCategoryChange('')}>All</button>
     
          {categories.map(category => (
            <button key={category} onClick={() => handleCategoryChange(category)}>
              {category}
            </button>
          ))}
   </div>
      </div> */}
     <div className='blogs-width'>
     {currentBlogs.length > 0 ? (
        <div className="blog-grids">
          {currentBlogs.map(item => (
            <div key={item._id} className='blogPost' onClick={() => handleBlogClick(item._id)}>
              <img src={item.image || '/images/blog1.png'} alt={item.title} />
              <div className='body'>
                <div className='tag'>
                  {item.tagOne && <p>{item.tagOne}</p>}
                  {item.tagTwo && <p>{item.tagTwo}</p>}
                  {item.tagThree && <p>{item.tagThree}</p>}
                </div>
                <h2>{item.title}</h2>
                <p className='para'>{item.snippet}</p>
                <div className='meta'>
                  <span>{item.createdAt.slice(0, 10)}</span>
                  <p>{item.readMins}</p> 
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading/>
      )}


     </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }, (_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BlogDisplay

