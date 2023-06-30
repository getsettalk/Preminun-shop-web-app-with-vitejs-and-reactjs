import React, { useContext } from 'react'
import './Cartitem.scss'
import { MdClose } from 'react-icons/md'
import ProdImg from '../../../assets/Product/ear2.png'
import { Context } from '../../../utils/context'


function Cartitem() {
  const { cartItems, handleCartProductQantity, handleRemoveFromCart } = useContext(Context)
  if (!cartItems) return null;
  // console.log(cartItems)
  return (
    <div className='cart-products'>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={import.meta.env.VITE_STRAPY_API_URL + item.attributes.img.data[0].attributes.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.title}</span>
            <MdClose className='close-btn' onClick={() => handleRemoveFromCart(item)} />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQantity('dec', item)}>-</span>
              <span>
                {item.attributes.quantity}
              </span>
              <span onClick={() => handleCartProductQantity('inc', item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className='highlight'>&#8377;{item.attributes.price}= {item.attributes.price * item.attributes.quantity}</span>
            </div>
          </div>
        </div>
      ))}


    </div>
  )
}

export default Cartitem