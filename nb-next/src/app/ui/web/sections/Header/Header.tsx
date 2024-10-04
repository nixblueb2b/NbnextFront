import React from 'react'
import {SearchBarSelector} from '@/app/ui/web/sections'
import { Logo, BtnRedirect } from '@/app/ui/shared/components'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <Logo/>
        <div className='hidden md:block'>
          <SearchBarSelector/>
        </div>
        <div>
          <BtnRedirect label="Ingresar" icon="pi pi-sign-in" size="small" iconPos="right" href="/home"  />
        </div>
    </div>
  )
}

export default Header