
import "./button.css"

function Button(props) {

  return (
    <a href="#" className={"body-xs btn " + props.type}> {props.text}</a>
  )

}
export default Button