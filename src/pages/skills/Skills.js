import "./Skills.css";

/**
 * Component containing information regarding skills info
 * @returns <div/> #skills 
 */
function Skills() {
    return (
        <div id="skills">
            {/*section containing title, skills, and GitHub link*/}
            <div className="card bg-secondary mx-auto my-5 w-75">
                <div className="card-body">
                    <h2 className="card-title mb-5">Skills</h2>
                    <p className="card-text">I am a <strong>developer</strong> that enjoys working on all aspects of <strong>full stack</strong> projects from start to finish.</p>
                    <p className="card-text"><strong>Front-end</strong>: preference: HTML5, CSS3, JavaScript, TypeScript, BootStrap, React JS or Angular equally</p>
                    <p className="card-text">Also use: jQuery, Tailwind</p>
                    <p className="card-text"><strong>Back-end</strong>: preference: Java, Spring Boot, JPA, Lombok, Hibernate, Rest APIs, MySQL</p>
                    <p className="card-text">Also use: PHP, C, C++, C#, Python, Spring, SQL, H2, Postman</p>
                    <p className="card-text"><strong>AWS Cloud</strong>: S3, EC2, RDS</p>
                    <p className="card-text"><strong>Version Control</strong>: preference: Git</p>
                    <p className="card-text"><strong>Remote Repository</strong>: preference: GitHub</p>
                    <p className="card-text"><strong>IDE</strong>: preference: Visual Studio Code, Eclipse, Maven</p>
                    <p className="card-text">Also use: CodeBlocks, Brackets, CCS, Visual Studios, NetBeans, PyCharm</p>
                    <p className="card-text"><strong>Other familiar technologies</strong>: Jira, MS Teams, MAMP, XXAMP, Docker, Machine Learning, Deep Learning, Altera Quartus II, VMware, Cyberduck, WinSCP, PuTTYgen, PuTTy, Microsoft Word, PowerPoint, Excel, Access, One Note</p>
                    <p className="card-text"><strong>Interested in learning</strong>: .net framework</p>
                    <a href="https://github.com/jgcoding2020" target="_blank" >
                        <img id="github-mark" src={process.env.PUBLIC_URL + "images/github-mark-white.svg"}></img>
                        <img id="github-logo" src={process.env.PUBLIC_URL + "images/GitHub_Logo_White.png"}></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Skills;