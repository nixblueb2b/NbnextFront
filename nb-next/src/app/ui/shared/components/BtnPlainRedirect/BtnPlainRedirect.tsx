//Estre btn redirige tien label y icon pero no tiene stilos como backgropund o active 
import React from "react";
import { ButtonProps } from "primereact/button";
import { Button } from "primereact/button";
import Link from "next/link";

interface BtnRedirectProps extends ButtonProps {
  href: string;
}

function BtnPlainRedirect({
  label,
  icon,
  size,
  iconPos,
  href,
}: BtnRedirectProps) {
  return (
    <Link href={href}>
      <Button
        style={{all: "unset"}}
        label={label}
        icon={icon}
        size={size}    
        iconPos={iconPos}
        pt={{
          label: { className: "font-normal pl-4 text-sm" },
        }}
       
      />
    </Link>
  );
}

export default BtnPlainRedirect;
