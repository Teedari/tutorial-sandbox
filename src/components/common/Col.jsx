import React from 'react'

const Col = ({label="", children}) => {
  return (
    <div className='col'>
     { label && <h3 style={{padding: '2rem'}}>{label}</h3> }
      {children}
    </div>
  )
}

export default Col
