import React from 'react'

const Color = ({ color }) => {
  return (
    <div style={{
      backgroundColor: color,
      height: '15px',
      width: '15px',
      marginRight: '5px',
      border: '1px solid black',
      float: 'left'
    }}
    />
  )
}

export default Color;
