import React from 'react'
import {SearchBarSelector, NavigationBar} from '@/app/ui/web/sections'
import { BtnOpenMenu, Logo } from '@/app/ui/shared/components'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <Logo/>
        <div className='hidden lg:block'>
          <SearchBarSelector/>
        </div>
        <div className='hidden lg:block'>
          <NavigationBar/>
        </div>
       <div className='block lg:hidden'>
          <BtnOpenMenu icon="pi pi-bars" severity='secondary' />
       </div>
    </div>
  )
}

export default Header