import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import MyProjects from "./pages/MyProjects";
import ContactMe from "./pages/ContactMe";
import Hobbies from "./pages/Hobbies";
import Skills from "./pages/Skills";
import About from "./pages/About";
import './App.css';

/**
 * App function provides routes throughout all pages components
 * @returns <Router>, <main>, <Navbar>, <Routes> 
 */
function App() {
  return (
    <Router>
      <main id="main">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="About" element={<About />} />
          <Route path="MyProjects" element={<MyProjects />} />
          <Route path="ContactMe" element={<ContactMe />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Hobbies" element={<Hobbies />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
