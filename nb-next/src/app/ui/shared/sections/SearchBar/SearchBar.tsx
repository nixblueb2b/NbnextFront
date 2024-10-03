import React from "react";
import { SearchInput, SearchBtn } from "@/app/ui/shared/components";
import { SearchBarSelector } from "@/app/ui/web/sections";

const SearchBar = () => {
  return (
    <div>
      <SearchInput />
      <SearchBtn />
    </div>
  );
};

export default SearchBar;
