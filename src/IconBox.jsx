import { useState } from "react";
import "./iconBox.css";

function IconBox(props) {
  let iconsize, iconStyle;
  switch (props.size) {
    case "sm":
      iconsize = 33;
      break;
    case "md":
      iconsize = 48;
      break;
    case "lg":
      iconsize = 52;
      break;

    default:
      iconsize = 33;
      break;
  }
  if (props.text) {
    iconStyle = { height: iconsize };
  } else {
    iconStyle = { width: iconsize, height: iconsize };
  }
  return (
    <div
      onClick={props.onClick}
      style={iconStyle}
      className={props.color + " icon-box " + props.active + " "}
    >
      {props.text && <h6 className="w-semibold">{props.text}</h6>}
      <img
        src={props.active ? props.iconActive || props.icon : props.icon}
        alt={props.alt}
      />
    </div>
  );
}

export default IconBox;
