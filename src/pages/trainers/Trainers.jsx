import React from 'react'
import './trainers.css'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import Header from '../../components/Header'
import Trainer from '../../components/Trainer'


const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Praesentium corporis ad consequuntur distinctio rem magnam, 
        error repudiandae eos libero.
      </Header>
      <section className='trainers'>
        <div className="container trainers__container">
          {
            trainers.map((items)=>(
              <Trainer key={items.id} image={items.image} name={items.name} job={items.job} socials={
                [
                  {icon:<BsInstagram/>, link:items.socials[0]},
                  {icon:<AiOutlineTwitter/>, link:items.socials[1]},
                  {icon:<FaFacebookF/>, link:items.socials[2]},
                  {icon:<FaLinkedinIn/>, link:items.socials[3]}
                ]
              }/>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Trainers