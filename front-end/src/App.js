import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import BlogForm from './components/BlogForms/BlogForm';
import ViewUsers from './components/ViewUsers/ViewUsers';
import ViewProfile from './components/ViewProfile/ViewProfile';
import BlogRead from './components/blogread/blogread';
import VideoEdit from './components/VideoEdit/VideoEdit';

import Dashboard from './pages/Dashboard/Dashboard';
import ViewBlogs from './pages/ViewBlogs/ViewBlogs';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import BlogEdit from './pages/BlogEdit/BlogEdit';
import Videos from './pages/Videos/Videos';
import Main from './pages/main/Main';
import AddVideos from './pages/AddVideos/AddVideos';
import Newsletter from './pages/Newsletter/Newsletter';
import CommentPage from './pages/CommentPage/CommentPage';
import Home from './pages/Home/Home';
import BlogPage from './pages/Blog/blog';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import BlogDisplay from './components/BlogPages/BlogDisplay';
import VideoDetails from './pages/VideoDetails/VideoDetails';
import AboutUs from './pages/AboutUs/AboutUs';
import Community from './pages/Community/Community';
import ContactUs from './pages/Contact/Contact';
import GalleryForm from './components/Gallery-form/GalleryForm';
import ViewGallery from './pages/ViewGallery/ViewGallery';
function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Dashboard />}>
            <Route index element={<Main />} />
            <Route path='create-blog' element={<BlogForm />} />
            <Route path='blogs' element={<ViewBlogs />} />
            <Route path='blogs/viewblog' element={<BlogRead />} />
            <Route path='gallery' element={<ViewGallery />} />
            <Route path='add-user' element={<SignUp />} />
            <Route path='gallery-form' element={<GalleryForm />} />
            <Route path='blog-edit' element={<BlogEdit />} />
            <Route path='view-users' element={<ViewUsers />} />
            <Route path='profile' element={<ViewProfile />} />
            <Route path='videos' element={<Videos />} />
            <Route path='add-videos' element={<AddVideos />} />
            <Route path='edit-videos' element={<VideoEdit />} />
            <Route path='newsletter' element={<Newsletter />} />
            <Route path='comments' element={<CommentPage />} />
          </Route>
          <Route path='/add' element={<SignUp />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/community' element={<Community />} />
          
          <Route path='/contact' element={<ContactUs/>} />
          <Route path="/blog" element={<BlogPage />}>
         
            <Route index element={<BlogDisplay />} />
            <Route path="video-details" element={<VideoDetails />} />
          </Route>
          <Route path="/blog/:blogId" element={<BlogDetails />} /> </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

