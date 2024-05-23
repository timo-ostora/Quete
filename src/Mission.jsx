import IconBox from "./IconBox.jsx";
import chefHat from "./assets/icons/fi-rr-hat-chef.svg";
import badgeCheck from "./assets/icons/fi-rr-badge-check.svg";
import meat from "./assets/icons/fi-rr-meat.svg";
import location from "./assets/icons/fi-rr-location-alt.svg";
import img from "./assets/images/offer2.png";
import Title from "./Title.jsx";

import "./mission.css";
function Mission() {
  return (
    <section className="mission">
      <div className="container">
        <div className="mission-centent">
          <Title
            tag="Visibility"
            head="Our Mission: Cultivating Community Through Food"
            body="At Quete, we believe that food is more than sustenance—it’s a
            powerful force that brings people together, fuels creativity, and
            nourishes both body and soul. Our mission is rooted in four core
            principles:"
          ></Title>
          <div className="list">
            <div className="list-item">
              <IconBox size="md" icon={chefHat} color="primary"></IconBox>
              <p className="body-md c-body">Empower talented cooks</p>
            </div>
            <div className="list-item">
              <IconBox size="md" icon={meat} color="primary"></IconBox>
              <p className="body-md c-body">Wholesome Choices</p>
            </div>
            <div className="list-item">
              <IconBox size="md" icon={location} color="primary"></IconBox>
              <p className="body-md c-body">represent local food</p>
            </div>

            <div className="list-item">
              <IconBox size="md" icon={badgeCheck} color="primary"></IconBox>
              <p className="body-md c-body">Transparency and Trust</p>
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

export default Mission;
