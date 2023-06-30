import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.scss'

import BannerIMG from '../../../assets/banner/banner4.png'
import BannerIMG2 from '../../../assets/banner/banner2.png'
function Banner() {
  return ( 
    <div className='hero-banner'>
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis cumque quaerat
                     amet quisquam? Consequuntur delectus unde facere pariatur inventore dolorem!</p>
                <div className="ctas">
                    <Link className='banner-cta'>View More</Link>
                    <Link className='banner-cta btn-2'>Buy Now</Link>
                </div>
            </div>

            <img src={BannerIMG} alt="" className='banner-img' />
           
        </div>
    </div>
  )
}

export default Banner