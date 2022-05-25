import Input from "../../atoms/input";
import Image from "../../atoms/image";
import classNames from "classnames";
import "./style.css";
import SearchIcon from "../../../assets/images/search-icon.svg";

const Search = ({ placeholder, id, onChange, className }) => {
  const myClass = classNames("search", {
    [className]: className,
  });

  return (
    <div className={myClass}>
      <Input
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        className="search-inp"
      />
      <Image src={SearchIcon} className="search-icon" />
    </div>
  );
};
export default Search;
