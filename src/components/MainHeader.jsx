import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main__header'>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfWorkout</h4>
          <h1>Join the Legends of the Fitness World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Enim consectetur corporis blanditiis quidem error. Cumque quae at explicabo amet sapiente fugiat mollitia provident alias soluta accusantium! Suscipit quis provident natus.</p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default MainHeader