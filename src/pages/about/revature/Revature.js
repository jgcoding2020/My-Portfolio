import "./Revature.css";

/**
 * Component containing information regarding my experience with Revature
 * @returns <fragment/> Revature achievment
 */
function Revature() {
    return (
        <>
            <h4 id="revature-heading">Java Software Developer Training</h4>
            {/* Revature section */}
            <div id="revature-section">
                <img id="revature-img" src={process.env.PUBLIC_URL + "images/aboutImages/Revature.png"} alt="Revature Logo"></img>
                <article id="revature-article">&emsp;<strong>After graduating</strong> with a <strong>computer science degree</strong>,
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
        </>
    );
}

export default Revature;