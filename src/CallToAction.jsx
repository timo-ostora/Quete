import Button from "./Button";
import "./call.css";
function CallToAction() {
  return (
    <section className="call">
      <div className="container">
        <h3 className="c-heading">
          Join us as we blend tradition with innovation, elevate taste to an art
          form, and build a flavorful future
        </h3>
        <Button text="Order Now" type="fill"></Button>
      </div>
    </section>
  );
}
export default CallToAction;
