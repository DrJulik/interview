import React from "react";

const Navbar = ({ searchString, setSearchString }: any) => {
  const handleSearch = (e: any) => {
    setSearchString(e.target.value);
  };

  return (
    <div className="search">
      <input
        placeholder="Type member's name to find them"
        className="search-input"
        type="text"
        value={searchString}
        onChange={handleSearch}
      />
      <button>{"+ Add member"}</button>
    </div>
  );
};

export default Navbar;
