import React from 'react'
import { Button, ButtonProps } from 'primereact/button'


function BtnOpenMenu({icon, severity}:  ButtonProps) {
  return (
    <Button icon={icon} severity={severity} rounded text aria-label="Filter" pt={{
        root: {
            className: "w-7 h-8 flex justify-center items-center"
        }
    }} />
  )
}

export default BtnOpenMenu