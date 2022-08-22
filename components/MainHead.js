import React from 'react'
import styles from '../styles/MainHead.module.css'

const MainHead = () => {
  return (
    <div className={styles.container}>

      <div className={styles.allBox}>
        <div className="box">
          <p>logo change</p>
          <input type="file" className='inputFileBtn' />
          <button>change</button>
        </div>

        <div className="box">
          <p>change top name</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>change last name</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>change button name</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>
      </div>

      <div className={styles.menuList}>

        <div className="box">
          <p>Home link</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>About link</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>twitter link</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>



        <div className="box">
          <p>insta link</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>linked link</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

        <div className="box">
          <p>tiktok link</p>
          <input type="text" className='inputBtn' />
          <button className='cngBtn'>change</button>
        </div>

      </div>


    </div>
  )
}

export default MainHead