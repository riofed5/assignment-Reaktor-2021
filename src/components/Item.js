import React from 'react'
import Availability from './Availability'
import Color from './ColorOfItem'

const Item = ({ data, index, style }) => {

  const Colors = ({ colors }) => {
    return (
      <>
        { colors && colors.map((color) => <Color color={color} key={color} />)}
      </>
    )
  }

  return (
    <div style={style} className={(index % 2 === 0) ? 'even' : 'odd'}>
      <div className="item-content">
        <div>{data[index].name}</div>
        <div>{data[index].manufacturer}</div>
        <div>{data[index].price}</div>
        <div>
          <Colors colors={data[index].color} />
        </div>
          <Availability manufacturer={data[index].manufacturer} id={data[index].id} />
      </div>
    </div>
  )
}

export default Item
