import Logo from "../../molecules/logo";
import Link from "../../atoms/link";
import Search from "../../molecules/search-bar";
import Button from "../../atoms/button";
import DiscoveryLogo from "../../../assets/images/logo.png";
import classNames from "classnames";
import "./style.css";

const headerData = {
  nav: ["Home", "Explore", "Shorts", "MindBlown", "Premium"],
};

const Header = ({className}) => {
  const myClass = classNames("header", {
    [className]: className,
  });

  return (
    <div className={myClass}>
      <div className="logo">
      <Logo src={DiscoveryLogo} width="170" />
      </div>
      <div className="nav-bar">
      {headerData.nav.map((item, index) => (
      <Link
        
        url="/"
        className={index === 0 ? "txt-link-active" : "txt-link"}
      >{item}</Link>
    ))}
      </div>
      <div className="search-bar">
      <Search
        placeholder="Search for a show, episode, shorts etc."
        btnName="Sign In"
      />
      </div>
      <div className="sign-in">
      <Button>Sign In</Button>
      </div>
      
      
      
      
    </div>
  );
} 
export default Header;
