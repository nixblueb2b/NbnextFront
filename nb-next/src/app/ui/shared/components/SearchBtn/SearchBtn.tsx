import React from 'react'
import { Button } from 'primereact/button'

const SearchBtn = ({height}: {height?: number}) => {
  return (
    <Button icon="pi pi-search" pt={{
        root: {
            className: `rounded-l-none h-${height}`
        }
    }} />
  )
}

export default SearchBtn