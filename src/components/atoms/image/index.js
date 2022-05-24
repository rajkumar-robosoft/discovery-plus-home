const Image = ({width, height, src, alt, style}) => (
    <img src={src} height={height} width={width} alt={alt} className={style}  />

);
export default Image;