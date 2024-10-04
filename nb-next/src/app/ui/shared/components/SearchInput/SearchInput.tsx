import React from 'react'
import { InputText } from 'primereact/inputtext'

interface SearchInputProps {
  roundedLeft?: boolean;
  width?: string
}


function SearchInput({roundedLeft, width}:SearchInputProps ) {
  return (
    <InputText pt={{
        root: {
            className: `rounded-r-none ${width}  ${!roundedLeft && "rounded-l-none"}`
        }
    }}/>
  )
}

export default SearchInput