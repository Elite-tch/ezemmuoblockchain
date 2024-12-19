import React from 'react'
import GalleryPost from '../../components/GalleryFrame/GalleryFrame'
import './ViewGallery.css'

const ViewGallery = () => {
  return (
    <div className='ViewBlogs'>
        <h1 className='tt'>
            All Gallery
        </h1>
        <small className='del'>Deleting a Gallery takes at least 60secs</small>
        <section>
        <GalleryPost/>
        </section>
        <span></span>
    </div>
  )
}

export default ViewGallery;