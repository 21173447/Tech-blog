import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Nav from './Components/Nav'; 
import Subscribe from './Components/Subscribe';
import FeaturedBlogs from './Components/FeaturedBlogs';
import Footer from './Components/Footer';

const App: React.FC = () => {
  const location = useLocation();

  
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const  isCreateBlog = location.pathname === '/create';

  
  const showFeaturedAndSubscribe = !(isHomePage || isLoginPage || isRegisterPage || isCreateBlog);

  return (
    <div>
      <Nav />
      <Outlet />
      {showFeaturedAndSubscribe && <FeaturedBlogs />}
      {showFeaturedAndSubscribe && <Subscribe />}
      <Footer />
    </div>
  );
};

export default App;
