import React from 'react'
import './RelatedProducts.scss'
import Products from '../../Products/Products';
import useFetch from '../../../hooks/useFetch';


function RelatedProducts({ productId, categoriesId }) {
  const { data } = useFetch(`/api/products?populate=*&[filters][id][$ne]= ${productId}&filters[categories][id]=${categoriesId}&pagination[start]=0&pagination[limit]=4`)
  if (!data) return null;

  return (
    <div className='related-products'>
      <Products headingText='Related Products' products={data}/>
    </div>
  )
}

export default RelatedProducts