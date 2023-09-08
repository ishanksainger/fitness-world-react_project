import React from 'react'
import './contact.css'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Header from '../../components/Header'

const Contact = () => {
  return (
    <>
      <Header title='Get in Touch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis incidunt, maxime ex nisi beatae dicta perferendis! A doloremque id
      </Header>
      <section className='contact'>
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:isainger29@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
            <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
            <a href="https://wa.me/+918860259264" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact