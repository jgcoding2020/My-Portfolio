import "./UnderConstruction.css";

/**
 * Component containing UnderConstruction image
 * @returns <fragment/> UnderConstruction achievment
 */
function UnderConstruction() {

    const image = process.env.PUBLIC_URL + "images/";

    return (
        <>
            <div id="under-construction">
                <img src={process.env.PUBLIC_URL + "images/image_0.png"} alt="under_construction.png"></img>
            </div>
        </>
    );
}

export default UnderConstruction;