import Button from "./Button.jsx";
import heroImg from "./assets/images/imgbin_chef-png.png";
import "./hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h2 className="hero-title w-semibold c-heading-light">
            Enjoy <span>homemade</span> favorites <span>delivered</span> right
            to your door.
          </h2>
          <p className="body-sm hero-text c-body-light">
            Are you craving the comforting taste of homemade meals, just like
            your mom used to make? Look no further! Qette is here to connect you
            with talented home cooks who pour their heart and soul into every
            dish they create.
          </p>
          <Button type="outline" text="Get Started"></Button>
        </div>
        <div className="hero-banner">
          <img src={heroImg} alt="chef" className="img-cover" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
