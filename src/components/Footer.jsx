import React from 'react'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
            <Link to="/" className='logo'><img src={Logo} alt="" />
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iste, quibusdam itaque quia adipisci voluptate dolores ducimus veniam sapiente delectus ea? Dicta eligendi error, 
            a soluta dignissimos veniam consectetur natus quibusdam!</p>
            <div className="footer__socials">
                <a href="https://linkedin.com/ishanksainger" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
                <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
            </div>
            </article>
            <article>
                <h4>PermaLinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
            </article>
            <article>
                <h4>Get in Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 Ishank Website &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer