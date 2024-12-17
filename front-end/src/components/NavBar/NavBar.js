import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const user = localStorage.getItem('data');
    const [data, setData] = useState({
        access: 'admin' // Default access for testing
    });
    const [admin, setAdmin] = useState(true);

    useEffect(() => {
        // Uncomment the following line to use actual user data
        // setData(JSON.parse(user));
        setAdmin(data.access === 'admin');
    }, [data]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
      const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
    

    return (
        
        <>
            {admin ? (
                
                <div className='navbar'>
                         <button className="sidebar-toggles" onClick={toggleSidebar}>
        Dashboard
      </button>
                 
                    <nav className={`nav ${isSidebarOpen ? 'open' : ''}`} id='navbar'>
                      <img alt='logo' src='/images/flogo1.png' className='logo' />
                 
                        <ul>
                            <NavLink to='/admin'  onClick={closeSidebar} activeClassName='active'><li>Dashboard</li></NavLink>
                        </ul>
                        <p>Blogs</p>
                        <ul>
                            <NavLink to='/admin/create-blog' onClick={closeSidebar} activeClassName='active'><li>Create Blog</li></NavLink>
                            <NavLink to='/admin/blogs' onClick={closeSidebar} activeClassName='active'><li>View Blogs</li></NavLink>
                        </ul>
                        <p>Videos</p>
                        <ul>
                            <NavLink to='/admin/videos' onClick={closeSidebar} activeClassName='active'><li>View Videos</li></NavLink>
                            <NavLink to='/admin/add-videos' onClick={closeSidebar} activeClassName='active'><li>Add Videos</li></NavLink>
                        </ul>
                        <p>Gallery</p>
                        <ul>
                            <NavLink to='/admin/gallery-form' onClick={closeSidebar} activeClassName='active'><li>Add Gallery</li></NavLink>
                            <NavLink to='/admin/gallery' onClick={closeSidebar} activeClassName='active'><li>View Gallery</li></NavLink>
                        </ul>



                        <p>Forms</p>
                        <ul>
                          {/* <NavLink to='/admin' activeClassName='active'><li>Mentorships</li></NavLink> */}
                            <NavLink to='/admin/newsletter' onClick={closeSidebar} activeClassName='active'><li>Newsletter</li></NavLink>
                        </ul>
                        <p>Users</p>
                        <ul>
                            <NavLink to='/admin/add-user' onClick={closeSidebar} activeClassName='active'><li>Add User</li></NavLink>
                            <NavLink to='/admin/view-users' onClick={closeSidebar} activeClassName='active'><li>View Users</li></NavLink>
                        </ul>
                        
                        <ul>
                            <NavLink to='/login' onClick={closeSidebar}>
                                <li onClick={() => localStorage.removeItem('logged')}>Logout</li>
                            </NavLink>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className='navbar'>
                    <img alt='logo' src='/images/logo.png' className='logo' />
                    <nav>
                        <p>Blogs</p>
                        <ul>
                            <NavLink to='/create-blog' onClick={closeSidebar} activeClassName='active'><li>Create Blog</li></NavLink>
                            <NavLink to='/blogs' onClick={closeSidebar} activeClassName='active'><li>View Blogs</li></NavLink>
                        </ul>
                        <p>Logout</p>
                        <ul>
                            <NavLink to='/login' onClick={closeSidebar}>
                                <li onClick={() => localStorage.removeItem('logged')}>Logout</li>
                            </NavLink>
                        </ul>
                    </nav>
                    
                </div>
            )}
              {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
  
        </>
    );
};

export default NavBar;  