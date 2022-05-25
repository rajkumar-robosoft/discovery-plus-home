import PropTypes from "prop-types";
import classNames from "classnames";
import Image from "../../atoms/image";
import Link from "../../atoms/link";
import "./style.css";

const Logo = ({ src, width, height, alt, url, className, ...props }) => {
  const myClass = classNames("", {
    [className]: className,
  });

  return (
    <div className={myClass}>
      <Link url={url}>
        <Image src={src} width={width} height={height} alt={alt} />
      </Link>
    </div>
  );
};
Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string,
};

export default Logo;
