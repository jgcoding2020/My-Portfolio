import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar contains a headshot image, button links to pages, and an Outlet 
 * @returns nav container
 */
function Navbar() {

    return (
        <>
            <nav id="nav">
                <Link className="links" to="/"><img id="headshot" src={process.env.PUBLIC_URL + "images/navbarImages/headshot.PNG"} alt="Headshot"></img></Link>
                <Link className="links" to="/About"><button type="button" className="btn btn-primary">About Me</button></Link>
                <Link className="links" to="/MyProjects"><button type="button" className="btn btn-primary">Projects</button></Link>
                <Link className="links" to="/Skills"><button type="button" className="btn btn-primary">Skills</button></Link>
                <Link className="links" to="/ContactMe"><button type="button" className="btn btn-primary">Contact Info</button></Link>
                <Link className="links" to="/Hobbies"><button type="button" className="btn btn-primary">Hobbies & Interests</button></Link>
            </nav>
            <Outlet></Outlet>
        </>
    );
}

export default Navbar;