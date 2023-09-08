import React from 'react'
import SectionHead from './SectionHead'
import {FaQuestion} from 'react-icons/fa'
import { faqs } from '../data'
import FAQ from './FAQ'

const FAQs = () => {
  return (
     <section className='faqs'>
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion/>} title="FAQs"/>
        <div className="faqs__wrapper">
          {
            faqs.map((items)=>(
              <FAQ key={items.id} question={items.question} answer={items.answer}/>
            ))
          }
        </div>
      </div>
     </section>
  )
}

export default FAQs