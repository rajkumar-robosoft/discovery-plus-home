import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";


const Link = ({id, name, url, rel, target, style, onClick, className, children, ...props}) => {

  const myClass = classNames('txt',{
    [className]: className,

  });

    return (
      <a
      id={id}
      name={name}
      href={url}
      rel={rel}
      onClick={onclick}
      target={target}
      className={myClass}
    >
      {children}
    </a>
  
  );
  }

  
Link.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Link;
