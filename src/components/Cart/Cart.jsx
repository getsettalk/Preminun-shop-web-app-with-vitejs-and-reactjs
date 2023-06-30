import React, { useContext } from 'react'
import './Cart.scss';
import { MdClose } from 'react-icons/md';
import { BsCartX } from 'react-icons/bs';
import Cartitem from './Cartitem/Cartitem';
import { Context } from '../../utils/context';

function Cart({ setShowCart }) {

  const { cartItems, cartSubTotal } = useContext(Context)
  return (
    <div className='cart-panel'>
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart:</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className='text' > close</span>
          </span>
        </div>

        {!cartItems?.length && <div className="empty-cart">
          <BsCartX />
          <span >
            No Products in Cart
          </span>
          <button className='return-cta'>Return To Shop</button>
        </div>}


        {!!cartItems?.length && <>
          <Cartitem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Sub Total:</span>
              <span className="text total">&#8377; {cartSubTotal}</span>
            </div>
            <div className="button">
              <button className='checkout-cta'>Checkout</button>
            </div>
          </div>
        </>}

      </div>
    </div>
  )
}

export default Cart