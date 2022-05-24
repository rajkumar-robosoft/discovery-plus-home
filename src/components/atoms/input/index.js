import "./style.css";
const Input = ({type, id, name, value, placeholder, required, isSearch, onChange}) => (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      className={isSearch ? 'search-input' : 'normal-input'}
      onChange={onChange}
    />
  );
  Input.defaultProps = {
    type: "text",
    isSearch: true
  };
  
  export default Input;