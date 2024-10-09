'use client'
import React, {useState} from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { SearchBtn } from "@/app/ui/shared/components";


interface SelectData {
    name: string;
  }

const data: SelectData[] = [{ name: "Producto" }, { name: "Proveedor" }];


function MobileSearchBarSelector() {

 const [selectedOption, setSelectedOption] = useState<SelectData>(data[0]);

  return (
    <form className="w-full flex h-9">
      <Dropdown
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.value)}
        optionLabel="name"
        options={data}
        pt={{
          root: {
            className: `border-r-0 rounded-r-none w-4/12 `,
            tabIndex: -1,
          }
        }}
      />
      <InputText
        size="small"
        pt={{
          root: {
            className: `border rounded-l-none w-6/12 rounded-r-none border-r-0 h-9 text-sm`,
            tabIndex: -1,
          },
        }}
      />
      <div className="w-1/12">
        <SearchBtn height={9} />
      </div>
    </form>
  );
}

export default MobileSearchBarSelector;
