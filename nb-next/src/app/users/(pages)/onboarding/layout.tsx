import React from "react";
import { SimpleBackHeader } from "@/app/ui/shared/sections";

function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="py-8 fixed top-0 left-0 right-0 bg-white">
        <div className="w-full max-w-7xl  mx-auto bg-white px-4 sm:px-8">
          <SimpleBackHeader />
        </div>
      </div>
      <div className="w-full max-w-7xl bg-white mx-auto px-4 sm:px-8">
        {children}
      </div>
    </div>
  );
}

export default OnboardingLayout;
