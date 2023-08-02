import "./BSCS.css";

/**
 * Component containing information regarding my BSCS
 * @returns <fragment/> BSCS achievment
 */
function BSCS () {
    return (
        <>
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
                <img id="bscs-img" src={process.env.PUBLIC_URL + "images/BSCS_Degree.png"} alt="BSCS Degree"></img>
            </div><hr></hr>
        </>
    );
}

export default BSCS;