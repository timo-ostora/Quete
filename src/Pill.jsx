import "./pill.css"


function Pill(props) {
  return (
    <div className={"pill w-medium " + props.size}>{props.text}</div>
  )
}

export default Pill;