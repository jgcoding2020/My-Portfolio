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
                <article className="project-article">&emsp;Individuals <strong>establish accounts as buyers or customers</strong>. 
                Vendors upload items for sale, and the system <em>monitors product details, stock levels, pricing, 
                expenses, earnings, and seller-specific profits</em>. Clients select the quantity of products for purchase 
                and manage additions and removals within their <strong>shopping cart</strong> before proceeding to the 
                <strong> checkout</strong>.
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
