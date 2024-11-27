import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';


import { ToastContainer } from 'react-toastify';
import Cards from './componeents/Cards';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/cards" element={<Cards />} />
       
      </Routes>
    </Router>
  );
}

export default App;
