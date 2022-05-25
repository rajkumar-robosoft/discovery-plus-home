import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

export const InputType = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
  NUMBER: "number"
};
const Input = ({type, id, name, value, placeholder, isRequired, isSearch, onChange, className, ...props}) => {

  const myClass = classNames(isSearch ? 'search-input' : 'normal-input', {
    [className]: className
  });
  
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={isRequired}
      className={myClass}
      onChange={onChange}
      {...props}
    />
  );
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(InputType)),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  isSearch: PropTypes.bool,
  isRequired: PropTypes.bool
};
Input.defaultProps = {
  type: InputType.TEXT,
  isSearch: true,
};

  
  export default Input;