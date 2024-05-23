import logo from "./assets/images/quete_light1-removebg-preview.png";
import "./footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <img src={logo} className="img-cover" alt="logo" />
        </div>
        <p className="body-md c-body-light w-regular">
          Whether you're a seller looking to share your culinary creations or a
          client in search of homemade goodness, we invite you to join our
          community today. Together, let's celebrate the joy of homemade cooking
          and create connections that nourish both body and soul.
        </p>
        <div className="row">
          <div className="col-1">
            <h4 className="c-heading-light"> Quick Links</h4>
            <ul className="list">
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <h4 className="c-heading-light"> Support</h4>
            <ul className="list">
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  Contant
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <h4 className="c-heading-light"> Get in touch</h4>
            <ul className="list">
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  qetter@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="c-body-light body-midium list-item">
                  rue madagascar Bloc E appt 2 rabat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="c-body-light body-md"> &copy; copyright Mohammed azizi</p>
      </div>
    </footer>
  );
}
export default Footer;
