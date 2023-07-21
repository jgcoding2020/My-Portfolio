import "./About.css";

function About() {
    return (
        <div id="about">
            <h1>What To Know About Me?</h1>
            <h2>Recent Achievments</h2>
            <div id="cogent-infotech">
                <article id="cogent-article"><strong>Greetings!</strong> My name is
                <strong><em> Joshua Gardner</em></strong>. My most recent achievement as a
                developer was that on May 12, 2023 I completed a <strong>Full Stack Java 
                Developer </strong> Course through <strong>Cogent Infotech</strong>. 
                The course was 8 weeks and full time from 9am - 6pm Monday - Friday
                covering a broad range of topics through a hands on approach including
                but not limited to Core Java, Advanced Java, Spring, Spring Boot, Spring 
                Security, Rest APIs, JPA, Hibernate, JWT, SQL, MySQL, H2 database, Postman, HTML5, 
                CSS3, JavaScript, TypeScript, Angular Framework, and React JS Library. Overall,
                the course was a great experience and I fully enjoyed it.    
                </article>
                <img id="java-certification" src={process.env.PUBLIC_URL + "Graduation_Certificate.png"}></img>
            </div>
        </div>

    );
}

export default About;