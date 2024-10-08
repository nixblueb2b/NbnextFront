
"use client";
import DesignSystem from "@/app/design-system";
import { PrimeReactProvider } from "primereact/api";
import { twMerge } from "tailwind-merge";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: DesignSystem,
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
      }}
    >
        {children}
    </PrimeReactProvider>
  );
};

export default Providers;
