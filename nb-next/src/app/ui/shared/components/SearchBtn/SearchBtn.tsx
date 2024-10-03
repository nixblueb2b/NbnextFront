import React from 'react'
import { Button } from 'primereact/button'

const SearchBtn = () => {
  return (
    <Button icon="pi pi-search" pt={{
        root: {
            className: 'primary-blue rounded-l-none'
        }
    }} />
  )
}

export default SearchBtn