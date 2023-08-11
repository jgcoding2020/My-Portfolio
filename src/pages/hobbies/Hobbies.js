import "./Hobbies.css";

/**
 * Component containing information regarding my hobbies
 * @returns <div/> #hobbies
 */
function Hobbies() {
    return (
        <div id="hobbies">
            {/*Hobbies section*/}
            <div id="activities" className="container-fluid bg-secondary m-5 mx-auto text-center text-light">
                <h2 className="col mt-3 mb-5">Hobbies &amp; Interests</h2>
                <div className="row">
                    <div className="col-sm-4">
                        <p>Tennis</p><p>Watching Movies</p><p>Video Games</p>
                        <p>Road Cycling</p><p>Working Out</p><p>Running</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Making Music</p><p>Basketball</p><p>Martial Arts</p>
                        <p>Pool &amp; Billiards</p><p>Baseball</p><p>Coding</p>
                    </div>
                    <div className="col-sm-4">
                        <p>Swimming</p><p>Playing Piano</p><p>Volleyball</p>
                        <p>Darts</p><p>Mountain Biking</p><p>Disc Golf</p>
                    </div>
                    <a href="https://jgcoding2020.github.io/Piano-Portfolio-V2/" target="_blank" >
                        <img id="piano" src={"images/piano.jpg"} alt="piano-image"></img>
                        <img id="piano-logo" src={"images/piano-logo.jpg"} alt="piano-logo"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;