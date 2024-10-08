"use client";
import React, { useState } from "react";
import { SearchInput, SearchBtn } from "@/app/ui/shared/components";
import { Dropdown } from "primereact/dropdown";

function SearchBarSelector() {

  const data: SelectData[] = [{ name: "Producto" }, { name: "Proveedor" }];


  interface SelectData {
    name: string;
  }

  const [selectedOption, setSelectedOption] = useState<SelectData>(data[0]);

  return (
    <div className="flex">
      <form action="" className="flex">
        <Dropdown
          tabIndex={0}
          onChange={(e) => setSelectedOption(e.value)}
          value={selectedOption}
          options={data}
          optionLabel="name"
          pt={{
            root: { className: `border-r-0 rounded-r-none`, tabIndex: -1 },
          }}
        />
        <SearchInput roundedLeft={false} width="md:w-60 lg:w-96" />
        <SearchBtn />
      </form>
    </div>
  );
}

export default SearchBarSelector;
