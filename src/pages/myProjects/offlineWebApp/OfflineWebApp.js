import OfflineWebAppSlider from "./OfflineWebAppSlider";

/**
 * Component containing information regarding Offline Web App Project
 * @returns <fragment/> OfflineWebApp project
 */
function OfflineWebApp() {
    return (
        <>
            <h4 className="project-heading"> Offline Web App</h4>
            {/* OfflineWebApp section */}
            <div className="project-section">
                <div className="project-images" alt="OfflineWebApp Images">{OfflineWebAppSlider}</div>
                <article className="project-article">&emsp;The <strong>Offline Web 
                App</strong> is designed to be hosted using <em>Docker</em>, and it's purpose is to assist in 
                efficiently <em>collecting, storing, and easily accessing large amounts of data</em>. It comprises five 
                sub-systems, each serving a specific purpose. These subsystems handle <strong> data collection, storage, 
                user access, data processing, and analysis</strong>.<br></br><br></br>
                <strong>The system:</strong>
                <ul>
                    <li>Permits extent of application use based on individual's access level.</li>
                    <li>Creates tailored forms to collect data.</li>
                    <li>Enforces data validation on all questions.</li>
                    <li>Securely stores all the collected data.</li>
                    <li>Allows users to visually inspect created forms.</li>
                    <li>Grants users API access to the data.</li>
                    <li>Hosted in Docker for additional isolation and security.</li>
                </ul>
                Overall, BLOWFELD offers a <em>user-friendly and powerful</em> solution for <strong>managing extensive datasets </strong> 
                for the sponsor and their team.
                <br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> HTML5, CSS3, Bootstrap, JavaScript </span>
                    <span><strong>Back-end:</strong> Node.js, PHP, MAMP, SQL, MySQL, phpMyAdmin </span>
                    <span><strong>Others:</strong> GitHub, VS Code, MS Teams, Zoom, MS Word, MS PPT, OBS Studio, YouTube</span>
                </article>
            </div><hr></hr>
        </>
    );
}

export default OfflineWebApp;
