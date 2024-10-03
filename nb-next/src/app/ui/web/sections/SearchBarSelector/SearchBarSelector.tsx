import React from "react";
import { SearchInput, SearchBtn, DropDown } from "@/app/ui/shared/components";

function SearchBarSelector() {
  interface selectData {
    name: string;
  }

  const data: selectData[] = [{ name: "Producto" }, { name: "Proveedor" }];

  return (
    <div className="flex">
      <form action="" className="flex">
        <DropDown options={data} roundedRight={false} borderRight={false} />
        <SearchInput roundedLeft={false} />
        <SearchBtn />
      </form>
    </div>
  );
}

export default SearchBarSelector;
