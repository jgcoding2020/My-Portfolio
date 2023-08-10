import Iframe from 'react-iframe';
import "./Hobbies.css";

/**
 * Component containing information regarding my hobbies
 * @returns <div/> #hobbies
 */
function Hobbies() {
    return (
        <div id="hobbies">
            {/*Hobbies & Interests heading*/}
            <div class="container-fluid text-center my-5" >
                <div class="row">
                    <h1 class="col text-light" id="history">Hobbies &amp; Interests</h1>
                </div>
            </div>
            {/*Hobbies section*/}
            <div id="activities" class="container-fluid mb-5 text-center">
                <div class="row bg-secondary text-light">
                    <div class="col-sm-4">
                        <p>Tennis</p><p>Watching Movies</p><p>Video Games</p>
                        <p>Road Cycling</p><p>Working Out</p><p>Running</p>
                    </div>
                    <div class="col-sm-4">
                        <p>Making Music</p><p>Basketball</p><p>Martial Arts</p>
                        <p>Pool &amp; Billiards</p><p>Baseball</p><p>Coding</p>
                    </div>
                    <div class="col-sm-4">
                        <p>Swimming</p><p>Playing Piano</p><p>Volleyball</p>
                        <p>Darts</p><p>Mountain Biking</p><p>Disc Golf</p>
                    </div>
                </div>
            </div>
            {/*iframe containing piano portfollio website*/}
            <Iframe url="https://jgcoding2020.github.io/Piano-Portfolio-V2/"
                width="100%"
                height="100%"
                id="iframe"
                className="iframe"
                display="block"
                position="relative" />
        </div>
    );
}

export default Hobbies;
/*<img src={process.env.PUBLIC_URL + "images/myProjectsImages/webProjectPortalImages/image_0.png"} alt="under_construction.png"></img>*/