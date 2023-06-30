import React from 'react'
import './Products.scss'

import Product from './Product/Product'
function Products({ products, innerPage, headingText }) {
  if (!products) {
    return null;
  }
  return (
    <div className='product-container'>
      {!innerPage && <div className="sec-heading"> {headingText} </div>}
      <div className="products">
        {products?.data?.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}

      </div>
    </div>
  )
}

export default Products