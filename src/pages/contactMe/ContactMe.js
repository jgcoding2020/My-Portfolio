import "./ContactMe.css";

/**
 * Component containing information regarding contact info
 * @returns <div/> #contact-me 
 */
function ContactMe() {
    return (
        <div id="contact-me">
            <a href="https://www.linkedin.com/in/joshua-gardner-983883126/" target="_blank">
                {/*linkedin card*/}
                <div id="linkedin" className="card text-white bg-primary">
                    <div className="card-header">Connect</div>
                    <div className="card-body">
                        <h4 className="card-title">Linkedin</h4>
                        <img src={"images/linkedin.png"} alt="Linkedin logo"></img>
                    </div>
                </div></a>
            <a href="mailto: jgardn11@gmail.com">
                {/*email card*/}
                <div id="email" className="card text-white bg-secondary">
                    <div className="card-header">Email</div>
                    <div className="card-body">
                        <h4 className="card-title">Gmail</h4>
                        <img src={"images/gmail.png"} alt="email logo"></img>
                    </div>
                </div></a>
        </div>
    );
}

export default ContactMe;