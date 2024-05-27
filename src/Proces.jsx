import IconBox from "./IconBox.jsx";
import icon from "./assets/icons/fi-rr-angle-square-right.svg";
import img from "./assets/images/offer3.jpg";
import Title from "./Title.jsx";
import "./feature.css";
function Proces() {
  return (
    <section className="feature">
      <div className="container">
        <div className="feature-centent">
          <Title
            tag="Accessible"
            head="Ordering Made Easy"
            body="At Quete , we’ve simplified the ordering process to ensure that you
            can savor our delicious meals stress-free. Follow these accessible
            steps to indulge in a culinary adventure"
          ></Title>
          <div className="list">
            <div className="list-item">
              <IconBox size="md" icon={icon} color="primary"></IconBox>
              <p className="body-md c-body">Explore Our Chefs Menu</p>
            </div>
            <div className="list-item">
              <IconBox size="md" icon={icon} color="primary"></IconBox>
              <p className="body-md c-body">Proceed to Checkout</p>
            </div>
            <div className="list-item">
              <IconBox size="md" icon={icon} color="primary"></IconBox>
              <p className="body-md c-body">Select Your Favorites</p>
            </div>

            <div className="list-item">
              <IconBox size="md" icon={icon} color="primary"></IconBox>
              <p className="body-md c-body">Confirmation and Delivery</p>
            </div>
          </div>
        </div>
        <div className="img-banner">
          <img src={img} className="img-cover" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Proces;
