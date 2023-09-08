import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Quo, officia! Delectus, sed, saepe voluptate enim et recusandae similique asperiores debitis labore perspiciatis tempora 
        eius dolorum ducimus eveniet iusto modi. Distinctio!
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima illum sapiente esse adipisci alias culpa voluptatum laboriosam dignissimos, 
            deleniti suscipit temporibus, quos blanditiis placeat ipsum architecto, 
            unde officia fuga labore.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Deleniti, vitae, reprehenderit consectetur fugiat veniam eveniet officia ea ex ipsa culpa unde, labore odio.</p>
            <p>Lorem ipsum dolor. Nostrum voluptas maiores iure rerum itaque, 
            saepe non quidem vel tempora optio vero asperiores repudiandae!</p>
          </div>
        </div>
      </section>

      <section className='about__vision'>
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima illum sapiente esse adipisci alias culpa voluptatum laboriosam dignissimos, 
            deleniti suscipit temporibus, quos blanditiis placeat ipsum architecto, 
            unde officia fuga labore.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Deleniti, vitae, reprehenderit consectetur fugiat veniam eveniet officia ea ex ipsa culpa unde, labore odio.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="" />
          </div>
        </div>
      </section>

      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Minima illum sapiente esse adipisci alias culpa voluptatum laboriosam dignissimos, 
            deleniti suscipit temporibus, quos blanditiis placeat ipsum architecto, 
            unde officia fuga labore.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Deleniti, vitae, reprehenderit consectetur fugiat veniam eveniet officia ea ex ipsa culpa unde, labore odio.</p>
            <p>Lorem ipsum dolor. Nostrum voluptas maiores iure rerum itaque, 
            saepe non quidem vel tempora optio vero asperiores repudiandae!</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About