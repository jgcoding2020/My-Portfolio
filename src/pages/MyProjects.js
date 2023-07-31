import './MyProjects.css';

/**
 * MyProjects function contains information about my projects pertaining to being a developer
 * @returns div #my-projects
 */
function MyProjects() {
    return (
        <div id="my-projects">
            {/* Heading at top of MyProjects page */}
            <h1>What Have I Accomplished?</h1>
            <h2 id="my-projects-heading">My Projects</h2><hr></hr>
            <h4 id="user-forum-heading">User Forum</h4>
            {/* User Forum section */}
            <div id="user-forum-section">
                <img id="user-forum-img"></img>
                <article id="user-forum-article"></article>
            </div>
        </div>
    );
}

export default MyProjects;