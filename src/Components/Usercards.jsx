import "./Usercards.css";

const Usercards = (props) => {
  return (
    <div className="user-container">
      <h2 id="user-name">{props.name}</h2>
      <img id="user-image" src={props.image} alt={props.name} />
      <p className="user-desc">{props.desc}</p>
    </div>
  );
};

export default Usercards;
