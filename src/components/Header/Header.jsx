import React, { useContext, useEffect, useState } from 'react'
import "./Header.scss";

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

import Search from './Search/Search'
import Cart from '../Cart/Cart'

import { Context } from '../../utils/context'
import { useNavigate } from 'react-router-dom';


function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setshowSearch] = useState(false)

  const navigate = useNavigate();

  const handleScroll = () => {
    // handle scroll to sticky nav bar
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const {cartCount} =useContext(Context)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])



  return (
    <>
      <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
        <div className="header-content">
          <ul className='left'>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
          <div className="center" onClick={() => navigate("/")}>Premium Shop</div>
          <div className="right">
            <TbSearch onClick={() => setshowSearch(true)} />
            <AiOutlineHeart />
            <span className='cart-icon' onClick={() => setShowCart(true)}>
              <CgShoppingCart />
             {!!cartCount && <span>{cartCount}</span>}
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart} />}
      {showSearch && <Search setshowSearch={setshowSearch} />}

    </>
  )
}

export default Header