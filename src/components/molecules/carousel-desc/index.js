import classNames from "classnames";
import Image from "../../atoms/image";
import Link from "../../atoms/link";
import "./style.css";

const CarouselDesc = ({
  heading,
  subHeading,
  tag1,
  tag2,
  playBtnSrc,
  playUrl,
  playText,
  playBtnWidth,
  playBtnHeight,
  className
}) => {
  const myClass = classNames("carousel-desc", {
    [className]: className,
  });
  return (
    <div className={myClass}>
      <div>
        <span className="carousel-heading">{heading}</span>
      </div>
      <div className="sub-heading-area">
        <span className="carousel-subheading">{subHeading}</span>
      </div>
  
      <div className="tags-area">
        <span className="carousel-tags">{tag1}</span>
        <span className="carousel-tags">{tag2}</span>
      </div>
  
      <div className="play-button">
        <Link
          url={playUrl}
          
        >
          <Image
              src={playBtnSrc}
              width={playBtnWidth}
              height={playBtnHeight}
              alt="PLAY"
            />
        </Link>
        <Link url={playUrl} className='play-text'>{playText} </Link>
      </div>
    </div>
  );
}

export default CarouselDesc;
