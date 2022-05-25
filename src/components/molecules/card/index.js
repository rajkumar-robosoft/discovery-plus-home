import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";
import Image from "../../atoms/image/";

const Card = ({ img, txt, imgWidth, imgHeight, className }) => {
  const myClass = classNames("card-container", {
    [className]: className,
  });

  return (
    <div className={myClass}>
      <Image src={img} width={imgWidth} height={imgHeight} variant='rounded' className='card-img' />
      <div className="bottom-center">
        <span className="card-text">{txt}</span>
      </div>
    </div>
  );
};
Card.propTypes = {
  imgWidth: PropTypes.number,
  imgHeight: PropTypes.number,
  img: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
