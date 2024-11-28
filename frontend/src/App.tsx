import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import { ToastContainer } from 'react-toastify';
import Cards from './componeents/Cards';
import Edit from './pages/Edit';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/edit/:bid" element={<Edit/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
