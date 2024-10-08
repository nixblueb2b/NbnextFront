import React from 'react'
import { BtnCloseMenu, Logo } from '@/app/ui/shared/components'
import { useOpenSidebarStore } from '@/app/stores/user/homeHeaderProvider'

function SidebarHeader() {
 const {closeSidebar} = useOpenSidebarStore((store)=>store)
  return (
    <div className='flex justify-between w-full'>
        <Logo/>
        <BtnCloseMenu closeMenu={closeSidebar} severity="secondary" icon="pi pi-times" />
    </div>
  )
}

export default SidebarHeader