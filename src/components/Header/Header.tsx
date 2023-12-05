import React from "react";
import Search from "./Search/Search";
import Categories from "./Categories/Categories";
import SortingBy from "./SortingBy/SortingBy";
import { HeaderWrapper } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="search-bar">
        <Search />
        <div className="under-search-items">
          <Categories />
          <SortingBy />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
