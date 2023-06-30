import React, { useState, useContext } from 'react'
import './SingleProduct.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus
} from 'react-icons/fa'
import { useParams } from 'react-router-dom';
import ProdImg from '../../assets/Product/earpiece.jpg'
import RelatedProducts from './RelatedProducts/RelatedProducts';
import useFetch from '../../hooks/useFetch'
import { Context } from '../../utils/context'

function SingleProduct() {


  const [quantity, setQuantity] = useState(1)
  const { id } = useParams()
  // console.log(id)
  const { data } = useFetch("/api/products?populate=*&[filters][id]=" + id)
  if (!data) return null;
  const product = data.data[0].attributes;
  // console.log(product)

  const { handleAddToCart } = useContext(Context);

  const increment = () => {
    setQuantity(prevState => prevState + 1)
  }
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) {
        return 1
      } else {
        return prevState - 1;
      }
    })
  }

  return (
    <div className='single-product-main-content'>
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={import.meta.env.VITE_STRAPY_API_URL + product.img.data[0].attributes.url} alt="" />
          </div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price"> &#8377; {product.price}</span>
            <span className="desc">
              {product.desc}
            </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className='add-to-cart-button' onClick={() => {
                handleAddToCart(data.data[0], quantity); 
                setQuantity(1)
              }}><FaCartPlus size={20} /> Add to Cart</button>
            </div>
            <span className='divider' />
            <div className="info-item">
              <span className="text-bold">Category:
                <span>{product.categories.data[0].attributes.title}</span>
              </span>
              <span className="text-bold">Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />

                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts productId={id} categoriesId={product.categories.data[0].id} />
      </div>
    </div>
  )
}

export default SingleProduct