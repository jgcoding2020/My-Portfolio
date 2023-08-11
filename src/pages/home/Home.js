import "./Home.css";
import { TypeAnimation } from "react-type-animation";

function Home() {
    return (
        <div id="home">
            <div id="introduction">
                <TypeAnimation
                    sequence={["Hello, my name is Joshua Gardner. I am a full-stack developer.",
                        1000
                    ]}
                    speed={25}
                    repeat={Infinity}
                    style={{ fontSize: "2.5em" }}
                />
            </div>
        </div>
    );
}

export default Home;