import React, { useEffect, useState } from "react";
import "./searchbar.css";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };


  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <div className="searchbar__container">
      <div className="searchbar">
        <input type="text" placeholder="buscar pokemon" onChange={onChange} />
      </div>
    </div>
  );
};

export default SearchBar;
