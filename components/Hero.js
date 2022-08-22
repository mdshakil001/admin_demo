import React from 'react'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.allBox}>

        <div className="box">
          <p>img or video change</p>
          <input type="file" className='inputFileBtn' />
          <button>change</button>
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
          <p>change button name</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

      </div>
    </div>
  )
}

export default Hero