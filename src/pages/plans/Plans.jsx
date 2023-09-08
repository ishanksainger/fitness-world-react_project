import React from 'react'
import './plans.css'
import HeaderImage from '../../images/header_bg_4.jpg'
import { plans } from '../../data'
import Header from '../../components/Header'
import Card from '../../UI/Card'

const Plans = () => {
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Similique laborum, harum eum doloremque corporis facilis.
      </Header>
      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map((items)=>(
              <Card key={items.id} className='plan'>
                <h3>{items.name}</h3>
                <small>{items.desc}</small>
                <h1>{`$${items.price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {
                  items.features.map((item,index)=>(
                    <p key={index} className={!item.available ? 'disabled' : ''}>{item.feature}</p>
                  ))
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Plans