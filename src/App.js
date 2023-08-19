import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import MyProjects from "./pages/myProjects/MyProjects";
import ContactMe from "./pages/contactMe/ContactMe";
import Hobbies from "./pages/hobbies/Hobbies";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import './App.css';

/**
 * The main application component that sets up routing and the overall structure of the web application.
 * It defines routes for various pages and includes the Navbar.
 *
 * @returns {JSX.Element} The rendered React element.
 */
function App() {
  return (
    <Router>
      <main id="main">
        <Navbar></Navbar>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/MyProjects" element={<MyProjects />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Hobbies" element={<Hobbies />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
