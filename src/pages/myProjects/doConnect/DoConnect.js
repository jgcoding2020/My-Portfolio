import "./DoConnect.css";
import DoConnectSlider from '../imageSliders/DoConnectSlider.js';

/**
 * Component containing information regarding project DoConnect
 * @returns <fragment/> DoConnect project
 */
function DoConnect() {
    return (
        <>
            <h4 id="doconnect-heading"> DoConnect</h4>
            {/* DoConnect section */}
            <div id="doconnect-section">
                <div id="doconnect-img" alt="DoConnect Images">{DoConnectSlider}</div>
                <article id="doconnect-article">&emsp;<em>DoConnect</em> is a comprehensive <strong>full stack web application</strong> designed as a
                    <strong> forum</strong> where users can share their <strong>answers to questions</strong> posted by other users. The platform ensures that the
                    content posted is <em>monitored and approved by administrators</em> before being visible to all users. Additionally,
                    the application incorporates <strong>direct messaging</strong> functionality, enabling users to engage in <em>private conversations </em>
                    with each other. Once the application was developed and tested locally, it was deployed on the web using <strong>Amazon
                        Web Services</strong> infrastructure, including the following components: <strong>AWS S3, AWS EC2, AWS RDS</strong>.<br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> HTML5, CSS3, TypeScript, Angular 15 Framework</span>
                    <span><strong>Back-end:</strong> Java, Spring Boot, Rest API, JPA, Hibernate, MySQL, Postman</span>
                    <span><strong>Others:</strong> VS Code, Eclipse, PuTTYGen, Putty, Git, GitHub, AWS, S3, EC2, RDS, WhatsApp, Zoom, MS PPT</span>
                </article>
            </div><hr></hr>
        </>
    );
}

export default DoConnect;