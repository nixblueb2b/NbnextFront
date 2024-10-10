import React from "react";
import { Title, SimpleCard } from "@/app/ui/shared/components";

function Onboarding() {
  return (
    <>
      <div className="mt-44  mb-10">
        <Title
          type={1}
          size="text-3xl"
          weight="font-medium"
          align="text-center"
          label="¿Que deceas hacer ?"
        />
      </div>
      <div className="flex gap-5">
        <SimpleCard/>
        <SimpleCard/>
      </div>
    </>
  );
}

export default Onboarding;
