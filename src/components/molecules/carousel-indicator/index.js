import classNames from "classnames";
import Link from "../../atoms/link";
import './style.css';

const CarouselIndicator = ({ type, onClick , className}) => {
  const myClass = classNames("", {
    [className]: className,
  });

  return (
    <div className='carousel-indicator'>
      <Link onClick={onClick} className={myClass} />
    </div>
  );
}




export default CarouselIndicator;
