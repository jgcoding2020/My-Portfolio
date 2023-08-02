import "./About.css";
import CogentInfotech from "./cogentInfotech/CogentInfotech";
import Revature from "./revature/Revature";
import BSCS from "./bscs/BSCS";
import BBA from "./bba/BBA";

/**
 * About function contains information about my achievements pertaining to being a developer
 * @returns div #about
 */
function About() {
    return (
        <div id="about">
            {/* Heading at top of about page */}
            <h1>What To Know About Me</h1>
            <h2 id="my-achievements-heading">Achievements</h2><hr></hr>
            <CogentInfotech/>
            <Revature/>
            <BSCS/>
            <BBA/>
        </div>
    );
}

export default About;