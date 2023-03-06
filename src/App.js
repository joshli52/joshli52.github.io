import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/project/:p" element={<ProjectDisplay />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
