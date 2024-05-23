import IconBox from "./IconBox.jsx";
import icon from "./assets/icons/fi-rr-angle-square-right.svg";
import img from "./assets/images/offer3.png";
import Title from "./Title.jsx";
import "./mission.css";
function Proces() {
  return (
    <section className="proces">
      <div className="container">
        <div className="proces-centent">
          <Title
            tag="Accessible"
            head="Ordering Made Easy: A Flavorful Journey"
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
