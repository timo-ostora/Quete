import IconBox from "./IconBox";
import badgetCheck from "./assets/icons/fi-rr-badget-check-alt.svg";
import shoppingCart from "./assets/icons/fi-rr-shopping-cart-check.svg";
import shield from "./assets/icons/fi-rr-shield-check.svg";
import shippinFast from "./assets/icons/fi-rr-shipping-fast.svg";
import "./offer.css";
function Offers() {
  return (
    <div className="offers">
      <div className="container">
        <div className="offer">
          <IconBox size="md" icon={badgetCheck} color="full-yellow"></IconBox>
          <h4 className="w-medium c-heading-light">Quality Services</h4>
        </div>
        <div className="offer">
          <IconBox size="md" icon={shippinFast} color="full-yellow"></IconBox>
          <h4 className="w-medium c-heading-light">Fast Delivery</h4>
        </div>
        <div className="offer">
          <IconBox size="md" icon={shield} color="full-yellow"></IconBox>
          <h4 className="w-medium c-heading-light">Secure Payment</h4>
        </div>
        <div className="offer">
          <IconBox size="md" icon={shoppingCart} color="full-yellow"></IconBox>
          <h4 className="w-medium c-heading-light">Easy To Order</h4>
        </div>
      </div>
    </div>
  );
}

export default Offers;
