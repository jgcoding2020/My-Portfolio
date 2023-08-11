import "./BBA.css";

/**
 * Component containing information regarding my BBA
 * @returns <fragment/> BBA achievment
 */
function BBA() {
    return(
        <>
            <h4 id="bba-heading">Bachelor's of Business Administration</h4>
            {/* Business administration degree section */}
            <div id="bba-section">
                <img id="bba-img" src={"images/aboutImages/BBA_Degree.png"} alt="BBA Degree"></img>
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
        </>
    );
}

export default BBA;