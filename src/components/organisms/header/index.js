import Logo from "../../molecules/logo";
import Nav from "../../molecules/nav";
import Search from "../../molecules/search-and-signin";
import DiscoveryLogo from "./logo.png";
import "./style.css";

const headerData = {
  nav: ["Home", "Explore", "Shorts", "MindBlown", "Premium"],
};

const Header = () => (
  <div className="header">
    <Logo src={DiscoveryLogo} width="170" />
    <Nav navItem={headerData.nav} />
    <Search
      placeholder="Search for a show, episode, shorts etc."
      btnName="Sign In"
    />
  </div>
);
export default Header;
