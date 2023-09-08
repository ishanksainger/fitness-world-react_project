import React from 'react'
import './gallery.css'
import HeaderImage from '../../images/header_bg_3.jpg'
import Header from '../../components/Header'


const Gallery = () => {
  const galleryLength=15;
  const images=[]
  
  for(let i=1;i<=galleryLength;i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Laudantium eligendi vel, illum, deserunt esse odio obcaecati modi, 
        a dolores adipisci sit cumque incidunt! Quas debitis expedita alias at odit blanditiis.
      </Header>
      <section className='gallery'>
        <div className="container gallery__container">
          {
            images.map((image,index)=>(
              <article key={index}>
                <img src={image} alt="" />
              </article>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Gallery