import Pill from "./Pill.jsx";
import IconBox from "./IconBox.jsx";
import heartrr from "./assets/icons/fi-rr-heart.svg";
import heartsr from "./assets/icons/fi-sr-heart.svg";
import startsr from "./assets/icons/fi-sr-star.svg";
import { useState, useEffect } from "react";
import "./card.css";
function Card(props) {
  /** props items
   * name
   * alt
   * img
   * oldPrice
   * price
   * avatar
   * userName
   * pro
   */

  const [FavActive, setFavActive] = useState("");

  function handlClick() {
    setFavActive((f) => (f ? "" : "active"));
  }

  return (
    <div className="card">
      <div className="card-banner">
        <figure className="img-holder">
          <IconBox
            color="red"
            iconActive={heartsr}
            icon={heartrr}
            size={33}
            alt="like"
            onClick={handlClick}
            active={FavActive}
          ></IconBox>
          <IconBox
            color="yellow"
            text="5.5"
            icon={startsr}
            size={33}
            alt="Rating"
          ></IconBox>
          <img className="img-cover" src={props.img} alt={props.alt} />
        </figure>
      </div>
      <div className="card-content">
        <h4 className="c-heading w-semibold">{props.name}</h4>
        <div className="prices">
          <h6 className="c-caption ">${props.price}</h6>
          {props.oldPrice && (
            <h6 className="c-caption-soft strikethrough">${props.oldPrice}</h6>
          )}
        </div>
      </div>
      <div className="user">
        <div className="avatar">
          <img className="img-cover" src={props.avatar} alt="profile pictur" />
        </div>
        <p className="c-body body-sm user-name">{props.userName}</p>
        {props.pro && <Pill text="Pro" size="body-xs"></Pill>}
      </div>
    </div>
  );
}

export default Card;
