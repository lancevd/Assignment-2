import Home from "./Home";
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Users from "./Users";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
      
    </Router>
  );
}

export default App;

