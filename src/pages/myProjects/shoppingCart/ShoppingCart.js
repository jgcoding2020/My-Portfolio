import ShoppingCartSlider from "./ShoppingCartSlider";

/**
 * Component containing information regarding ShoppingCart Project
 * @returns <fragment/> ShoppingCart project
 */
function ShoppingCart() {
    return (
        <>
            <h4 className="project-heading"> Shopping Cart</h4>
            {/* Shopping Cart section */}
            <div className="project-section">
                <div className="project-images" alt="ShoppingCart Images">{ShoppingCartSlider}</div>
                <article className="project-article">&emsp;Designed UML diagrams (class, sequence, state) and CRC cards. 
                Wrote use cases plus variations and functionality specifications. Utilized 3 interfaces and 6 classes 
                including sysAPI.java. Implemented java program with design patterns (Iterator, Proxy, observer, Strategy, 
                Adapter). Users create accounts as buyers or customers. Sellers add products to sell and system keeps track 
                of products, inventory, price, cost, revenue, and profit per seller. Customers choose number of products to 
                buy and add/ remove to/ from cart/ check out.
                <br></br><br></br>
                    <span><strong>Tools used:</strong></span>
                    <span><strong>Front-end:</strong> Swing framework </span>
                    <span><strong>Back-end:</strong> Java, serialization, deserialization </span>
                    <span><strong>Others:</strong> NetBeans, GitHub, MS Word, Google Docs, WhatsApp, OBS Studio, YouTube</span>
                </article>
            </div><hr></hr>
        </>
    );
}

export default ShoppingCart;
