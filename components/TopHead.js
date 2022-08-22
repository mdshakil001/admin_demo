import React from 'react'
import styles from '../styles/TopHead.module.css'

const TopHead = () => {
  return (
    <div className={styles.container}>

      <div className={styles.allBox}>
        <div className="box">
          <p>change logo</p>
          <input type="file" className='inputFileBtn' />
        </div>

        <div className="box">
          <p>change language</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>social link text</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>
      </div>

      <div className={styles.allList}>
        <div className="listBox">
          <p>youtube</p>
          <input type="text" className='inputBtn' /><button className='cngBtn'>change</button>
        </div>

        <div className="listBox">

          <p>facebook</p>
          <input type="text" className='inputBtn' /><button className='cngBtn'>change</button>
        </div>

        <div className="listBox">

          <p>twitter</p>
          <input type="text" className='inputBtn' /><button className='cngBtn'>change</button>
        </div>

        <div className="listBox">

          <p>insta</p>
          <input type="text" className='inputBtn' /><button className='cngBtn'>change</button>
        </div>


        <div className="listBox">

          <p>linked</p>
          <input type="text" className='inputBtn' /><button className='cngBtn'>change</button>
        </div>


        <div className="listBox">

          <p>tiktok</p>
          <input type="text" className='inputBtn' /><button className='cngBtn'>change</button>
        </div>

      </div>
    </div>
  )
}

export default TopHead