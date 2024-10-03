import React from 'react'
import { InputText } from 'primereact/inputtext'

function SearchInput({roundedLeft}: {roundedLeft?: boolean}) {
  return (
    <InputText pt={{
        root: {
            className: `rounded-r-none ${!roundedLeft && "rounded-l-none"}`
        }
    }}/>
  )
}

export default SearchInput