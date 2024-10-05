import React from "react";
import { Button, ButtonProps  } from "primereact/button";
import Link from "next/link";


interface BtnRedirectProps extends ButtonProps {
  href: string;
}

function BtnRedirect({ label, icon, size, iconPos, href, severity, outlined }: BtnRedirectProps) {
  return<Link href={href}>
     <Button pt={{
        label: { className: "font-normal" },
     }}  label={label} size={size} icon={icon} iconPos={iconPos} severity={severity} outlined={outlined} />
  </Link>
 
}

export default BtnRedirect;
