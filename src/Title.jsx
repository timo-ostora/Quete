import "./title.css";
function Title(props) {
  return (
    <div className="sectionTitle">
      <p className="body-md c-secondary">{props.tag}</p>
      <h2 className="c-heading w-regular"> {props.head}</h2>
      <p className="c-body-soft body-sm">{props.body}</p>
    </div>
  );
}
export default Title;
