import Image from "../../atoms/image";
import "./style.css";

const RailsImage = ({ src, width, height, alt, style }) => (
  <div>
    <Image src={src} width={width} height={height} alt={alt} style={style} />
  </div>
);

export default RailsImage;
