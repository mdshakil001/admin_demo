import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.allBox}>

        <div className="box">
          <p>change image</p>
          <input type="file" className='inputFileBtn' />
          <button>change</button>
        </div>

        <div className="box">
          <p>change image number</p>
          <input type="number" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>change image text</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>change title</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>change details</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>change upper left number</p>
          <input type="number" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

      </div>
    </div>
  )
}

export default About