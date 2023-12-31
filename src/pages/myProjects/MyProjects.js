import "./MyProjects.css";
import DoConnect from "./doConnect/DoConnect";
import OfflineWebApp from "./offlineWebApp/OfflineWebApp";
import ShoppingCart from "./shoppingCart/ShoppingCart";
import SocialMediaWebApp from "./socialMediaWebApp/SocialMediaWebApp";
import WebProjectPortal from "./webProjectPortal/WebProjectPortal";

/**
 * MyProjects function contains information about my developer projects
 * @returns div #my-projects
 */
function MyProjects() {
    return (
        <div id="my-projects">
            {/* Heading at top of MyProjects page */}
            <h1>Projects</h1>
            <h2 id="my-projects-heading">Projects Completed</h2><hr></hr>
            <DoConnect />
            <OfflineWebApp />
            <ShoppingCart />
            <SocialMediaWebApp />
            <WebProjectPortal />
        </div>
    );
}

export default MyProjects;