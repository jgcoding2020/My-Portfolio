import "./About.css";

/**
 * About function contains information about my achievements pertaining to being a developer
 * @returns div #about
 */
function About() {
    return (
        <div id="about">
            {/* Heading at top of about page */}
            <h1>What To Know About Me?</h1>
            <h2 id="my-achievements-heading">My Achievements</h2><hr></hr>
            <h4 id="cogent-heading">Advanced Java Certification</h4>
            {/* Java certification section */}
            <div id="cogent-section">
                <article id="cogent-article"><strong>Greetings,</strong><br></br><br></br>&emsp; 
                My name is <strong><em> Joshua Gardner</em></strong>. My most recent achievement as a
                developer was that on May 12, 2023 I completed a <strong>Full Stack Java Developer </strong> 
                Course through Cogent Infotech. The course was 8 weeks and full time from 9am - 6pm Monday - Friday
                covering a broad range of topics through a hands on approach including
                but not limited to: <br></br><br></br>
                    <ul id="cogent-ul">
                        <li><strong>Front-end:</strong> HTML5, CSS3, BootStrap, JavaScript, TypeScript, Angular Framework, React JS Library</li><br></br>
                        <li><strong>Back-end:</strong> Core Java, Advanced Java, Spring, Spring Boot, Spring Security, 
                            Rest APIs, JPA, Hibernate, JWT, SQL, MySQL, H2 database, Postman</li>
                    </ul> 
                Overall, the course was a <strong>great learning experience</strong>, and I fully enjoyed it.    
                </article>
                <img id="java-certification" src={process.env.PUBLIC_URL + "Graduation_Certificate.png"} alt="Advanced Java Certification"></img>
            </div><hr></hr>
            <h4 id="revature-heading">Java Software Developer Training</h4>
            {/* Revature section */}
            <div id="revature-section">
                <img id="revature-img" src={process.env.PUBLIC_URL + "Revature.png"} alt="Revature Logo"></img>
                <article id="revature-article">&emsp;<strong>After graduating</strong> with a computer science degree, 
                I began applying for developer roles and recognized I wasn't going to be able to find a job without additional 
                knowledge in more <strong>modern tools and technologies</strong> than I had learned while I was obtaining my 
                formal education computer science degree. I had applied for a <strong>Java software developer</strong> role 
                with Revature and signed up to participate in a 10 week pre employment training course that had an estimated 
                time commitment of approximately 20 hours per week. The layout of the training was very efficient and
                user friendly. The content consisted of weekly reading material with practice quizzes, live & recorded lectures, 
                coding labs and assessments on the topics covered for the week. The topics were all about <strong>back-end </strong> 
                and <strong>middleware</strong> revolving around the usage of <strong>Java, SQL, and relational database connectivity. </strong>
                </article>
            </div><hr></hr>
            <h4 id="bscs-heading">Bachelor's of Science in Computer Science</h4>
            {/* Computer science degree section */}
            <div id="bscs-section">
                <article id="bscs-article">&emsp;All throughout my life I have had a desire to pursue a career in technology. 
                My personality has been a naturally very <strong>logical, thinking, analytical, problem-solving</strong> type since day one. 
                During 2018, I decided it was time to start pulling the trigger on the idea. I started reading and doing 
                research on various technological topics from time to time. In 2019 I felt it would be best to start 
                pursuing a career in <strong>computer programming</strong> of some nature given that my personality type was naturally a 
                great fit for this line of work.<br></br><br></br>
                &emsp;I started self learning <strong>HTML5 and CSS3</strong>. I used online resources and tutorials
                to get started and was creating websites on notepad that I would display on my web browser on Windows XP OS. 
                I really got sucked in and had to learn more. I then began learning <strong>JavaScript</strong> and decided that it was time for 
                me to return to school for a <em>second baccalaureate</em> in <strong>computer science</strong>. In the summer of 2020 I began my coursework 
                full time at <strong>Florida Atlantic University</strong> in Boca Raton, and I graduated this past December 16, 2022.</article>
                <img id="bscs-img" src={process.env.PUBLIC_URL + "BSCS_Degree.png"} alt="BSCS Degree"></img>
            </div><hr></hr>
            <h4 id="bba-heading">Bachelor's of Business Administration</h4>
            {/* Business administration degree section */}
            <div id="bba-section">
                <img id="bba-img" src={process.env.PUBLIC_URL + "BBA_Degree.png"} alt="BBA Degree"></img>
                <article id="bba-article">&emsp;My first <em>bachelor's degree</em> was in <strong>business administration </strong> 
                with a <em>double major</em> in management and marketing. There were many <em>logical</em> reasons why it made 
                sense to me at the time to get a degree in business. The top reasons were that <strong>Florida Atlantic University </strong>
                is an excellent college of business, and I figured at some point I may want to start my own company.<br></br><br></br>
                &emsp;I chose my majors in <strong> management and marketing</strong>, because every business needs managers 
                and strategies targeting specific markets in order to provide them with products and/ or services. There were 
                many great aspects to obtaining a degree in business, but my personal favorite is how well the coursework fine 
                tuned my <strong>communication skills</strong> both <strong> orally</strong> and in <strong>writing </strong> 
                due to the extensive amount of writing assignments and presentations required.</article> 
            </div><hr></hr>
        </div>
    );
}

export default About;