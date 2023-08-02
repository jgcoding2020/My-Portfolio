import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import MyProjects from "./pages/myProjects/MyProjects";
import ContactMe from "./pages/contactMe/ContactMe";
import Hobbies from "./pages/hobbies/Hobbies";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";
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
