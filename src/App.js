import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <Router>
      <div id="main">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="MyProjects" element={<MyProjects />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
