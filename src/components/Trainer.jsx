import React from 'react'
import Card from '../UI/Card'


const Trainer = (props) => {
    const {image,name,job,socials}=props
  return (
    <Card classname='trainer'>
        <div className="trainer__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
            {
                socials.map((items,index)=>(
                     <a key={index} href={items.link} target='_blank' rel='noreferrer noopener'>{items.icon}</a>
                ))
            }
        </div>
    </Card>
  )
}

export default Trainer