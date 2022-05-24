import Link from "../../atoms/link";
import './style.css';

const RailsIndicator = ({ type, onClick }) => (
  <Link url="/" handleClick={onClick} style={type} />
);

export default RailsIndicator;
