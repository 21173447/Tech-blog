import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import UpdateProfile from "./pages/UpdateProfile.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import Cards from "./Components/Cards.tsx";
import Edit from "./pages/Edit.tsx";
import BlogsPage from "./pages/BlogsPage.tsx";
import BrowseBlogs from "./pages/BrowseBlogs.tsx";
import BlogDetail from "./pages/BlogDetail.tsx";
import AdminPage from "./pages/AdminPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/createAccount", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <RegisterPage /> },
      { path: "/homepage", element: <BrowseBlogs /> },
      { path: "/profile", element: <UpdateProfile /> },
      { path: "/create", element: <CreateBlog /> },
      { path: "/Manageblogs", element: <BlogsPage /> },
      { path: "/cards", element: <Cards /> },
      { path: "/edit/:bid", element: <Edit /> },
      { path: "/", element: <BrowseBlogs /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/blog/:bid", element: <BlogDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
