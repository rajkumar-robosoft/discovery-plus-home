import "./style.css";
import Header from "../organisms/header";
import Carousel from "../organisms/Carousel";
import Rails from "../organisms/Rails";

const Template = () => (
  <div className="main">
    <div className="header-conatiner">
      <Header />
    </div>
    <div className="carousel-container">
      <Carousel />
    </div>
    <div className="rail-container">
      <Rails />
    </div>
  </div>
);
export default Template;
