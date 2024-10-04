"use client";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

const DropDown = <T,>({
  options,
  roundedRight,
  borderRight,
}: {
  options: T[];
  roundedRight?: boolean;
  borderRight?: boolean;
}) => {
  const [selectedOption, setSelectedOption] = useState<T | null>(options[0]);
  return (
    <div className="card flex justify-center">
      <Dropdown
        tabIndex={0}
        onChange={(e) => setSelectedOption(e.value)}
        value={selectedOption}
        options={options}
        optionLabel="name"
        pt={{
          root: { className: `${!roundedRight && "rounded-r-none"} ${!borderRight && "border-r-0"}`,  tabIndex: -1},
        }}
      />
    </div>
  );
};

export default DropDown;
