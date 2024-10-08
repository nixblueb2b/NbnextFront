'use client'
import React from 'react'
import {SearchBarSelector, NavigationBar} from '@/app/ui/users/sections'
import { BtnOpenMenu, Logo } from '@/app/ui/shared/components'
import { useOpenSidebarStore } from '@/app/stores/user/homeHeaderProvider'

const Header = () => {
  
  const {openSidebar} = useOpenSidebarStore((state)=> state)

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
          <BtnOpenMenu openMenu={openSidebar} icon="pi pi-bars" severity='secondary' />
       </div>
    </div>
  )
}

export default Header