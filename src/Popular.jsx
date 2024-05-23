import Title from "./Title.jsx";
import Card from "./Card.jsx";
import tajinImg from "./assets/images/Moroccan-Orange-and-Chicken-Tagine.jpg";
import pastilaFish from "./assets/images/pastila-fich.jpeg";
import pastilaChiken from "./assets/images/Moroccan-Pastilla-chicken.jpg";
import avatar1 from "./assets/images/avatar 1.png";
import avatar2 from "./assets/images/avatar 2.png";

import "./popular.css";
function Popular() {
  return (
    <section className="popular">
      <div className="container">
        <Title
          tag="Delicious "
          head="Popular Recipes"
          body="We always make shore that our client is satisfied by our services"
        ></Title>
        <div className="recipes">
          <Card
            name="Tajin Beef"
            alt="tajin beef"
            img={tajinImg}
            oldPrice="15.62"
            price="14.77"
            avatar={avatar1}
            userName="Halima oulhaian"
            pro="Pro"
          ></Card>
          <Card
            name="Fish Pastilla"
            alt="Fish Pastilla"
            img={pastilaFish}
            oldPrice="50.45"
            price="45.75"
            avatar={avatar2}
            userName="Fatima Abiba"
            pro="Pro"
          ></Card>
          <Card
            name="Chiken Pastila"
            alt="Chiken Pastila"
            img={pastilaChiken}
            oldPrice="50.45"
            price="45.75"
            avatar={avatar1}
            userName="Halima oulhaian"
            pro="Pro"
          ></Card>
          <Card
            name="Tajin Beef"
            alt="tajin beef"
            img={tajinImg}
            oldPrice="15.62"
            price="14.77"
            avatar={avatar1}
            userName="Hafida Macran"
            pro="Pro"
          ></Card>
        </div>
      </div>
    </section>
  );
}

export default Popular;
