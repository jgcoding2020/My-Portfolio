import "./CogentInfotech.css";

/**
 * Component containing information regarding my experience with CogentInfotech
 * @returns <fragment/> CogentInfotech achievment
 */
function CogentInfotech() {

    const image = "images/aboutImages/Graduation_Certificate.png";
    
    return (
        <>
            <h4 id="cogent-heading">Advanced Java Certification</h4>
            {/* Java certification section */}
            <div id="cogent-section">
                <article id="cogent-article"><strong>Greetings,</strong><br></br><br></br>&emsp;
                    My name is <strong><em> Joshua Gardner</em></strong>. My most recent achievement as a
                    developer was that on May 12, 2023 I completed a <strong>Full-Stack Java Developer </strong>
                    Course through <em>Cogent Infotech</em>. The course was 8 weeks and full time from 9am - 6pm Monday - Friday
                    covering a broad range of topics with a hands on approach including
                    but not limited to: <br></br><br></br>
                    <ul id="cogent-ul">
                        <li><strong>Front-end:</strong> HTML5, CSS3, BootStrap, JavaScript, TypeScript, Angular Framework, React JS Library</li><br></br>
                        <li><strong>Back-end:</strong> Core Java, Advanced Java, Spring, Spring Boot, Spring Security,
                            Rest APIs, JPA, Hibernate, JWT, SQL, MySQL, H2 database, Postman</li>
                    </ul>
                    Overall, the course was a <strong>great learning experience</strong>, and I fully enjoyed it.
                </article>
                <img id="java-certification" src={image} alt="Advanced Java Certification"></img>
            </div><hr></hr>
        </>
    );
}

export default CogentInfotech;