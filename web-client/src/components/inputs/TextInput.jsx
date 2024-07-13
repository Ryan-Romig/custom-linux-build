import React from 'react'

function TextInput({ name, placeholder,  handleChange, overrideStyle, readOnly , children, value}) {
  const style = overrideStyle ? overrideStyle : {
    borderStyle: 'none',
    maxWidth: '100px',
    margin: '5px',
    height: '30px',
    borderRadius: '10px',
    padding: '3px'

  }
  return (readOnly ?
    <>{children}</>
    : <>
    
      <input style={style} value={value} name={name} id={name} type='text' placeholder={placeholder} onChange={handleChange} />
    </>
  )
}

export default TextInput