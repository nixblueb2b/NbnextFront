import React from 'react'
import { Button, ButtonProps } from 'primereact/button'

interface BtnCloseMenuProps extends  ButtonProps {
    closeMenu: (isOpen: boolean)=> void
}

function BtnCloseMenu({icon, severity, closeMenu}: BtnCloseMenuProps) {
  return (
    <Button onClick={()=>closeMenu(false)}  icon={icon} severity={severity} rounded text aria-label="Filter" pt={{
        root: {
            className: "w-7 h-8 flex justify-center items-center"
        }
    }} />
  )
}

export default BtnCloseMenu