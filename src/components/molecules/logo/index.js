import Image from "../../atoms/image";
import Link from "../../atoms/link";
import './style.css';

const Logo = ({ src, width, height, url }) => (
  <div className="logo-container">
    <Link
      url={url}
      style="logo-link"
      name={
        <Image
          src={src}
          width={width}
          height={height}
          alt={Logo}
        />
      }
    />
  </div>
);

export default Logo;
