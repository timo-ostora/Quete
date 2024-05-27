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
                "c-body-light navbar-link body-md " +
                (index == 0 ? "active" : "")
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
