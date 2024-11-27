import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts'
import HomePage from './pages/HomePage.tsx';
import UpdateProfile from './pages/UpdateProfile.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/createAccount' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path = '/homepage' element ={<HomePage/>}/>
        <Route path = '/profile' element ={<UpdateProfile/>}/>
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
