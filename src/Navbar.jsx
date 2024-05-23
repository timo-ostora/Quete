import Button from "./Button";
import "./navbar.css";
function Navbar(props) {
  return (
    <nav className={"navbar " + props.active} data-navbar>
      <ul className="navbar-list">
        {props.items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={
                (index == 0 ? "c-body-light" : "c-body-strong") +
                " navbar-link body-md"
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="navbar-wrapper">
        <a href="#" className="btn-link body-md c-body-light">
          Login
        </a>
        <Button text="Get Started" type="fill"></Button>
      </div>
    </nav>
  );
}
export default Navbar;
