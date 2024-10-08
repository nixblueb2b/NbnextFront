'use client'
import React from 'react'
import { Button, ButtonProps } from 'primereact/button'


interface btnOpenMenuProps extends ButtonProps  {
  openMenu: (state: boolean) => void
}

function BtnOpenMenu({icon, severity, openMenu}:  btnOpenMenuProps) {
  return (
    <Button onClick={()=>openMenu(true)} icon={icon} severity={severity} rounded text aria-label="Filter" pt={{
        root: {
            className: "w-7 h-8 flex justify-center items-center"
        }
    }} />
  )
}

export default BtnOpenMenu