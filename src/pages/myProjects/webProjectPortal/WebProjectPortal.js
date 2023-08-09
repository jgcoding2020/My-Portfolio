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
            <div className="project-section">
                <div className="project-images" alt="WebProjectPortal Images">{WebProjectPortalSlider}</div>
                <article className="project-article">&emsp;<br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> HTML5, CSS3, BootStrap, JavaScript, JQuery </span>
                    <span><strong>Others:</strong> VS Code, VMware, WinSCP, GitHub, MS PPT, OBS Studio, YouTube</span>
                </article>
            </div><hr></hr>
        </>
    );
}

export default WebProjectPortal;