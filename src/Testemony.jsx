import Title from "./Title";
import IconBox from "./IconBox";
import start from "./assets/icons/fi-sr-star.svg";
import "./testemony.css";

function Testemony() {
  return (
    <section className="testemonys">
      <Title
        tag="Loyalty"
        head="What People said"
        body="We always make shore that our client is satisfied by our services"
      ></Title>
      <div className="container">
        <div className="testemony">
          <h4 className="c-heading w-midium">
            As a busy professional, I often struggle to find the time to cook
            homemade meals. Thanks to Qetter, I can enjoy delicious, home-cooked
            dishes without the hassle. The convenience and quality of the food
            are unmatched!
          </h4>
          <div className="rating">
            <IconBox
              color="yellow"
              alt="start"
              size="sm"
              icon={start}
            ></IconBox>
            <IconBox
              color="yellow"
              alt="start"
              size="sm"
              icon={start}
            ></IconBox>
            <IconBox
              color="yellow"
              alt="start"
              size="sm"
              icon={start}
            ></IconBox>
            <IconBox
              color="yellow"
              alt="start"
              size="sm"
              icon={start}
            ></IconBox>
            <IconBox
              color="yellow"
              alt="start"
              size="sm"
              icon={start}
            ></IconBox>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testemony;
