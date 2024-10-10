import React from 'react'
import { BtnCircleBack, Logo } from '@/app/ui/shared/components'


function SimpleBackHeader() {
  return (
    <div className='flex items-center justify-center '>
        <span className='absolute left-4 sm:left-8'>
            <BtnCircleBack href="/users/home"/>
        </span>
   
        <Logo/>

    </div>
  )
}

export default SimpleBackHeader