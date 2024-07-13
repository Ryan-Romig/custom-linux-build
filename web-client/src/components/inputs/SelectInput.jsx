import React from 'react'

function SelectInput({displayName,filterKey, handleChange, options, value}) {
  return (
    <select key={ filterKey} style={{maxWidth:'60px'}} id={filterKey} value={value} onChange={handleChange}>
    <option key={"all"} value={""}>All {displayName}</option>
    {options?.map(option => <option key={option} value={option}>{option}</option> )}
  </select>
  )
}

export default SelectInput