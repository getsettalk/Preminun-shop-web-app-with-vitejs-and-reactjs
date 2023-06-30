import React, { useEffect, useContext } from 'react'
import { faker } from '@faker-js/faker';
import Banner from './Banner/Banner';
import Newsletter from '../Footer/Newsletter/Newsletter';
import Category from './Category/Category';
import { fetchDataFromApi } from '../../utils/api';
import './Home.scss';
import Products from '../Products/Products';
import { Context } from '../../utils/context';

function Home() {

  const { categories, setCategories, products, setProducts } = useContext(Context);

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then(res => {
      console.log(res)
      setProducts(res)
    })
  }

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then(res => {
      console.log(res)
      setCategories(res)
    })
  }
  useEffect(() => {
    getCategories()
    getProducts()
  }, [])


  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText='Popular Products' />
        </div>
      </div>

      <Newsletter />

    </div>
  )
}

export default Home