import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <>
            <nav id="nav">
                <img id="headshot" src={process.env.PUBLIC_URL + "/headshot.PNG"}></img>
                <button type="button" className="btn btn-primary"><Link className="links" to="/About">About Me</Link></button>
                <button type="button" className="btn btn-primary"><Link className="links" to="MyProjects">My Projects</Link></button>
                <button type="button" className="btn btn-primary"><Link className="links" to="Skills">Skills</Link></button>
                <button type="button" className="btn btn-primary"><Link className="links" to="ContactMe">Contact Me</Link></button>  
                <button type="button" className="btn btn-primary"><Link className="links" to="Hobbies">Hobbies & Interests</Link></button>  
            </nav>
                <Outlet></Outlet>
        </>
    );

}

export default Navbar;