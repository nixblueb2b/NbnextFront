import React from 'react'
import { Button } from 'primereact/button'
import { ButtonProps } from 'primereact/button'




function BtnRedirect({label, icon, size, iconPos}: ButtonProps ) {
  return (
    <Button label={label} size={size} icon={icon} iconPos={iconPos}/>
  )
}

export default BtnRedirect