import React from "react";

// import react, { FC } from 'react';

interface ProductNameProps {
  label: string;
  align?: "text-center" | "text-left" | "text-right";
  type: 1 | 2 | 3 | 4 | 5 | 6;
  size:
    | "text-xs"
    | "text-sm"
    | "-text-base"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  weight: "font-medium" | "font-semibold" | "font-bold";
}

const Title = ({
  type,
  size,
  weight,
  align,
  label,
}: ProductNameProps) => {
  switch (type) {
    case 1:
      return (
        <h1 className={`${size} ${weight} ${align}`}>{label}</h1>
      );
    case 2:
      return (
        <h2 className={`${size} ${weight} ${align}`}>{label}</h2>
      );
    case 3:
      return (
        <h3 className={`${size} ${weight} ${align}`}>{label}</h3>
      );
    case 4:
      return (
        <h4 className={`${size} ${weight} ${align}`}>{label}</h4>
      );
    case 5:
      return (
        <h5 className={`${size} ${weight} ${align}`}>{label}</h5>
      );
    case 6:
      return (
        <h6 className={`${size} ${weight} ${align}`}>{label}</h6>
      );
  }
};

export default Title;
