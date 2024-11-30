import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Nav from './Components/Nav'; 
import Subscribe from './Components/Subscribe';
import FeaturedBlogs from './Components/FeaturedBlogs';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Nav />
      <Outlet />  
      <FeaturedBlogs/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};

export default App;
