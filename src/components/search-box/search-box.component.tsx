import { ChangeEvent } from "react";
import "./search-box.style.css";

type SearchBoxProps = {
  className: string;
  placeHolder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeHolder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      type="search"
      className={`search-box ${className}`}
      placeholder={placeHolder}
      onChange={(e) => onChangeHandler(e)}
    />
  );
};

export default SearchBox;
