import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// 
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

const BlogForm = lazy(() => import('./components/BlogForms/BlogForm'));
const ViewUsers = lazy(() => import('./components/ViewUsers/ViewUsers'));
const ViewProfile = lazy(() => import('./components/ViewProfile/ViewProfile'));
const BlogRead = lazy(() => import('./components/blogread/blogread'));
const VideoEdit = lazy(() => import('./components/VideoEdit/VideoEdit'));

const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const ViewBlogs = lazy(() => import('./pages/ViewBlogs/ViewBlogs'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const Login = lazy(() => import('./pages/Login/Login'));
const BlogEdit = lazy(() => import('./pages/BlogEdit/BlogEdit'));
const Videos = lazy(() => import('./pages/Videos/Videos'));
const Main = lazy(() => import('./pages/main/Main'));
const AddVideos = lazy(() => import('./pages/AddVideos/AddVideos'));
const Newsletter = lazy(() => import('./pages/Newsletter/Newsletter'));
const CommentPage = lazy(() => import('./pages/CommentPage/CommentPage'));
const Home = lazy(() => import('./pages/Home/Home'));
const BlogPage = lazy(() => import('./pages/Blog/blog'));
const BlogDetails = lazy(() => import('./pages/BlogDetails/BlogDetails'));
const BlogDisplay = lazy(() => import('./components/BlogPages/BlogDisplay'));
const VideoDetails = lazy(() => import('./pages/VideoDetails/VideoDetails'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const Community = lazy(() => import('./pages/Community/Community'));
const ContactUs = lazy(() => import('./pages/Contact/Contact'));
const GalleryForm = lazy(() => import('./components/Gallery-form/GalleryForm'));
const ViewGallery = lazy(() => import('./pages/ViewGallery/ViewGallery'));

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Suspense fallback={<Loading/>}>
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
            <Route path='/contact' element={<ContactUs />} />
            <Route path="/blog" element={<BlogPage />}>
              <Route index element={<BlogDisplay />} />
              <Route path="video-details" element={<VideoDetails />} />
            </Route>
            <Route path="/blog/:blogId" element={<BlogDetails />} />
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
}

export default App;

