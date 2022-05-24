import "./style.css";
const Button = ({ variant, type, name, handleClick }) => (
    <button className={`button ${variant}`} type={type} onclick={handleClick}>
    {name}
  </button>
);
Button.defaultProps = {
  variant: "primary",
  type: "button",
};

export default Button;
