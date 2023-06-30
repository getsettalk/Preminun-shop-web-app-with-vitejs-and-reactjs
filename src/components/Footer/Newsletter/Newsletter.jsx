import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa'
import './Newsletter.scss'

function Newsletter() {
    return (
        <div className='newsletter-section'> 
        <div className="newsletter-content">
            <span className='small-text'>Newsletter</span>
            <span className='big-text'>Setup News letter to get out new Product Information.</span>
            <form className="form">
                <input type="text" name="email" id="email" placeholder='Email Address' />
                <button>Subscribe</button>
            </form>
            <div className="text">Will be used in accordance with our Privacy & Policy.</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF  size={14}/>
                </div>
                <div className="icon">
                    <FaInstagram  size={14}/>
                </div>
                <div className="icon">
                    <FaLinkedin  size={14}/>
                </div>
                <div className="icon">
                    <FaTwitter  size={14}/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Newsletter