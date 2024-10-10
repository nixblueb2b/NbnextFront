//Btn solo icon sin label para derireccionar

import React from 'react'
import Link from 'next/link'
import { Button, ButtonProps  } from "primereact/button";

interface BtnRedirectIconProps extends ButtonProps {
    href: string;
  }

function BtnRedirectIcon({href, icon, severity}: BtnRedirectIconProps) {
  return (
    <Link href={href}>
        <Button icon={icon} severity={severity} rounded text aria-label="Filter" pt={{
            root: {
                className: "w-7 h-8 flex justify-center items-center"
            }
        }} />
    </Link>
  )
}

export default BtnRedirectIcon