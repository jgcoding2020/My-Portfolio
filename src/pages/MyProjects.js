import './MyProjects.css';
import DoConnectSlider from './imageSliders/DoConnectSlider.js';

/**
 * MyProjects function contains information about my projects pertaining to being a developer
 * @returns div #my-projects
 */
function MyProjects() {
    return (
        <div id="my-projects">
            {/* Heading at top of MyProjects page */}
            <h1>What Have I Accomplished?</h1>
            <h2 id="my-projects-heading">My Projects</h2><hr></hr>
            <h4 id="doconnect-heading"> DoConnect</h4>
            {/* DoConnect section */}
            <div id="doconnect-section">
                <div id="doconnect-img" alt="DoConnect Images">{DoConnectSlider}</div>
                <article id="doconnect-article">&emsp;<em>DoConnect</em> is a <strong>full stack web application</strong> forum where users can
                    post answers to questions posted by other users. Admin are notified when a user posts a question or answer by email and must log in
                    to approve the posts before they are visible to users. Users can also chat with other users through <strong>direct messaging </strong>
                    within the app. Once the application was implemented locally, we deployed it on the web through <strong>AWS, S3, EC2, and RDS</strong>.<br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> HTML5, CSS3, TypeScript, Angular 15 Framework</span>
                    <span><strong>Back-end:</strong> Java, Spring Boot, Rest API, JPA, Hibernate, MySQL, Postman</span>
                    <span><strong>Others:</strong> VS Code, Eclipse, Git, GitHub, WhatsApp, AWS, S3, EC2, RDS</span>
                </article>
            </div><hr></hr>
        </div>
    );
}

export default MyProjects;