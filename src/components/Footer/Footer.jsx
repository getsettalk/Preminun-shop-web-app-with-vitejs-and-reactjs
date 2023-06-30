import React from 'react'

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FooterIMG from '../../assets/footeIMG/LogosPy.png'
import './Footer.scss'
function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea qui iusto
            dolorum facilis! Et vitae iste cupiditate culpa ea possimus architecto omnis!
            Illo recusandae, ea quas ducimus magnam alias.
          </div>
        </div>
        <div className="col">
          <div className="title">Content</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Darbhanga, Patna, Bihar, India 847000
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">
              Phone: +91 7371 0404 99
            </div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">
              Email: rajrock7254@gmail.com
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>

          <Link className="text">HeadPhones</Link>
          <Link className="text">Smart Watch</Link>
          <Link className="text">Ear Pods</Link>
          <Link className="text">Home theatre</Link>
          <Link className="text">Projectors</Link>
        </div>
        <div className="col">
          <div className="title">Pages</div>

          <Link className="text">Home</Link>
          <Link className="text">About</Link>
          <Link className="text">Privacy & Policy</Link>
          <Link className="text">Return</Link>
          <Link className="text">Contact US</Link>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            PREMIUM SHOP {new Date().getFullYear()} CREATED BY SUJEET KUMAR, WEB SOLUTIONS.
          </div>
          <img src={FooterIMG} alt="" width={250}/>
        </div>
      </div>
    </footer>
  )
}

export default Footer