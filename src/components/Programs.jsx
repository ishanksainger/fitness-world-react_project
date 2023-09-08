import React from 'react'
import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'

const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead icon={<FaCrown />} title="Programs" />
                <div className='programs__wrapper'>
                    {
                        programs.map((items) => (
                            <Card className='programs__program' key={items.id}>
                                <span>{items.icon}</span>
                                <h4>{items.title}</h4>
                                <small>{items.info}</small>
                                <Link to={items.path} className='btn sm'>Learn More<AiFillCaretRight /></Link>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs