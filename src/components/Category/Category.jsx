import React from 'react'
import Products from '../Products/Products';
import './Category.scss';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

function Category() {
  const { id } = useParams();
  // console.log(id)
  const data = useFetch( `/api/products?populate=*&[filters][categories][id]=${id}`)
  // console.log("data",data?.data?.data?.[0]?.attributes?.categories.data[0].attributes.title)
  return (
    <div className='category-main-content'>
      <div className="layout">
        <div className="category-title">
          {data?.data?.data?.[0]?.attributes?.categories?.data?.[0].attributes.title}
        </div>

        <Products innerPage={true} products={data.data}/>
      </div>
    </div>
  )
}

export default Category