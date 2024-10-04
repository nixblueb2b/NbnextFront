import React from 'react'
import SearchBarSelector from '../SearchBarSelector/SearchBarSelector'

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <div>logo</div>
        <SearchBarSelector/>
        <div>Menu</div>
    </div>
  )
}

export default Header