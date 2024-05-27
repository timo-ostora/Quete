import Button from "./Button.jsx";
import video from "./assets/images/food-senimatique.mp4";
import "./hero.css";
function Hero() {
  return (
    <div className="hero">
      <video
        autoPlay={true}
        preload="true"
        muted
        loop
        className="myVideo img-cover"
      >
        <source type="video/mp4" src={video} />
      </video>
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
      </div>
    </div>
  );
}

export default Hero;
