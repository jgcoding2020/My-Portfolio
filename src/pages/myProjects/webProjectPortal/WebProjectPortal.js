import WebProjectPortalSlider from "./WebProjectPortalSlider";

/**
 * Component containing information regarding WebProjectPortal Project
 * @returns <fragment/> WebProjectPortal project
 */
function WebProjectPortal() {
    return (
        <>
            <h4 className="project-heading"> Web Project Portal</h4>
            {/* Web Project Portal section */}
            <div id="web-project-portal"className="project-section">
                <div className="project-images" alt="WebProjectPortal Images">{WebProjectPortalSlider}</div>
                <article className="project-article">&emsp;This project comprised five distinct segments. 
                The initial segment involved <em>crafting and executing a web-based bio/resume</em> by employing 
                <strong> HTML5 and CSS3</strong>. Subsequently, the second phase <em>entailed enhancing the initial component </em> 
                through the utilization of <strong>Bootstrap</strong>. Moving on to the third part, the task was to create 
                a web application tool with <strong>JavaScript</strong>, which could receive three user-input numbers 
                and subsequently compute essential statistical values such as <em>minimum, maximum, mean, median, 
                and range</em>. In the fourth phase, the objective was to develop a web-based <em>Tic Tac Toe</em> game application, 
                incorporating the functionality of <strong>jQuery</strong>. Lastly, the fifth and final stage encompassed the creation 
                of a <strong>web portal</strong> housing links to each of the preceding four project segments.<br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> HTML5, CSS3, BootStrap, JavaScript, jQuery </span>
                    <span><strong>Others:</strong> VS Code, VMware, WinSCP, GitHub, MS PPT, OBS Studio, YouTube</span>
                </article>
            </div><hr></hr>
        </>
    );
}

export default WebProjectPortal;