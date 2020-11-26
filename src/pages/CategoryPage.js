import React from 'react'
import {useParams, Redirect} from 'react-router-dom'
import {useContextApp} from '../helpers/context'
import ListItems from '../components/ListItems'

const CategoryPage = () => {
  const {context} = useContextApp()
  const {category} = useParams()
  let products;

  //Category is incorrect then immidately return to HomePage
  if (category !== 'jackets' && category !== 'shirts' && category !== 'accessories') {
    return <Redirect to="/" />
  }

  if (context) {
    
    //Products based on category(jackets, shirts, accessories)
    products = context[category];

    if (!products) {
      console.log('Error: Category data is not fetch!!')
      return (
        <div>
          Error loading page!
      </div>
      )
    }
  }

  const renderHeaders = () => {
    return (
      <div className="category-header">
        <div>Product name</div>
        <div>Manufaturer</div>
        <div>Price</div>
        <div>Colors</div>
        <div>Availability</div>
      </div>
    )
  }

  return (
    <>
      {context ? 
        <div className="category-container">
          <div>
            <b># of products: </b>
            <span >{products.length}</span>
          </div>
          {renderHeaders()}
          <ListItems itemData={products} />
        </div>
        : <div>Loading...</div>}
    </>
  )
}

export default CategoryPage
