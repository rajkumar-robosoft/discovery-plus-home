import Link from "../../atoms/link";
import './style.css';

const Nav = ({ navItem }) => (
  <div className="nav">
    {navItem.map((item, index) => (
      <Link
        name={item}
        url="/"
        style={index === 0 ? "txt-link-active" : "txt-link"}
      />
    ))}
  </div>
);
export default Nav;
