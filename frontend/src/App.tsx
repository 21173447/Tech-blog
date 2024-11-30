import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; 
import Nav from './Components/Nav'; 
import Subscribe from './Components/Subscribe';
import FeaturedBlogs from './Components/FeaturedBlogs';
import Footer from './Components/Footer';

const App: React.FC = () => {
  const location = useLocation();
  
  
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <Nav />
      <Outlet />
      {!isHomePage && <FeaturedBlogs />}
      {!isHomePage && <Subscribe />}
      <Footer />
    </div>
  );
};

export default App;
