import "./style.css";

const Link = ({url, target, style, handleClick, name}) => (
    <a
    href={url}
    onClick={handleClick}
    target={target}
    className={`txt ${style}`}
  >
    {name}
  </a>

);

export default Link;
