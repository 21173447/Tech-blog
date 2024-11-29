import React from 'react';
import { Outlet } from 'react-router-dom'; // To render child components based on the route
import Nav from './Components/Nav'; // Navigation component

const App: React.FC = () => {
  return (
    <div>
      <Nav />  {/* The navigation bar */}
      <Outlet />  {/* Where the child routes' components will be rendered */}
    </div>
  );
};

export default App;
