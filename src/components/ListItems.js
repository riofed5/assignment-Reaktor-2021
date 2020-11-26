import React from 'react'
import { FixedSizeList as List } from 'react-window'
import {AutoSizer} from 'react-virtualized'
import Item from '../components/Item'

const ListItems = ({ itemData }) => {
  if (!itemData || itemData.length === 0) {
    return (
      <div >
        No product !
      </div>
    )
  }
  return (
    <AutoSizer>
      {({ width }) => (
        <List
          className="list-items"
          data-testid="list-items"
          height={window.innerHeight - 150 }
          width={width}
          itemCount={itemData.length}
          itemSize={40}
          itemData={itemData}
        >
          {Item}
        </List>
      )}
    </AutoSizer>
  )
}

export default ListItems
