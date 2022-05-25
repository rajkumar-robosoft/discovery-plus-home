import classNames from "classnames";
import Image from "../../atoms/image";
import "./style.css";

const CarouselImage = ({ src, width, height, alt, className }) => {
  const myClass = classNames("carousel-img", {
    [className]: className,
  });

  return (
    <div className="carousel-img-container">
      <Image
        src={src}
        width={width}
        height={height}
        variant='rounded'
        alt={alt}
        className={myClass}
      />
    </div>
  );
};

export default CarouselImage;
