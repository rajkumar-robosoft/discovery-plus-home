import Input from "../../atoms/input";
import Button from "../../atoms/button";
import './style.css';

const Search = ({ placeholder, btnName, id}) => (
  <div className="search">
    <Input placeholder={placeholder} id={id} />
    <Button name={btnName} />
  </div>
);
export default Search;
