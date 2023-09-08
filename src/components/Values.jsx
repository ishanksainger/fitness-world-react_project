import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
      <div className="container values__container">
        <div className="values__left">
        <div className="values__image">
          <img src={Image} alt="" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond/>} title="Values"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptatem ullam iure, saepe voluptate, hic pariatur ipsa soluta minima, minus cupiditate tempore consequuntur 
          ducimus architecto incidunt? Voluptate dicta blanditiis placeat earum?</p>
          <div className="values__wrapper">
            {
              values.map((items)=>(
                <Card key={items.id} className='values__value'>
                  <span>{items.icon}</span>
                  <h4>{items.title}</h4>
                  <small>{items.desc}</small>
                </Card>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values