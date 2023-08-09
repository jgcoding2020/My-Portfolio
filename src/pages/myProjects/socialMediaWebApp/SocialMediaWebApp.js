import SocialMediaWebAppSlider from "./SocialMediaWebAppSlider";

/**
 * Component containing information regarding SocialMediaWebAppCart Project
 * @returns <fragment/> SocialMediaWebApp project
 */
function SocialMediaWebApp() {
    return (
        <>
            <h4 className="project-heading"> Social Media Web App</h4>
            {/* Social Media Web App section */}
            <div className="project-section">
                <div className="project-images" alt="SocialMediaWebApp Images">{SocialMediaWebAppSlider}</div>
                <article className="project-article">&emsp;I assumed the role of a <strong>Scrum Master</strong> and 
                <strong> Agile development team leader</strong> for the <strong> Owl Post Social Media Web App Jira project</strong>. I was responsible for 
                orchestrating the <em>task planning<em> and </em>creating the backlog</em>, as well as <em>task delegation </em> 
                to team members. I also generated <em>burndown charts<em> for each </em>sprint and milestone</em>, 
                <em> tracked the backlog's progress</em>, and <strong>designed/ implemented the front end of the application</strong>.
                <br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> HTML5, CSS3, BootStrap, JavaScript </span>
                    <span><strong>Back-end:</strong> JavaScript, PHP, SQL, MySQL (LAMP)</span>
                    <span><strong>Others:</strong> VS Code, Jira, VMware, WinSCP, Balsamic Wireframes, GitHub, MS PPT, OBS Studio, YouTube</span>
                </article>
            </div><hr></hr>
        </>
    );
}

export default SocialMediaWebApp;