import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './Blog.css';
import Footer from '../../components/Footer/Footer';

export default function BlogPage() {
  return (
    <div className="blog">
      <nav className="blog-nav">
        <NavLink
          to=""
          end
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Article
        </NavLink>
        <NavLink
          to="video-details"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Video
        </NavLink>
      </nav>
<hr/>
      <div className="blog-content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}
