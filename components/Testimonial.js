import React from 'react'
import styles from '../styles/Testimonial.module.css'

const Testimonial = () => {
  return (
    <div className={styles.container}>

      <div className="box">
        <p>add new</p>
        <input type="text" placeholder='name' className='inputBtn' />
        <input type="text" placeholder='position' className='inputBtn' />
        <input type="text" placeholder='quote' className='inputBtn' />
      </div>

      <div className="box">
        <p>change title</p>
        <input type="text" className='inputBtn' />
        <button className='cngBtn'>change</button>
      </div>

      <div className="box">
        <p>change name</p>
        <input type="text" className='inputBtn' />
        <button className='cngBtn'>change</button>
      </div>

      <div className="box">
        <p>change position</p>
        <input type="text" className='inputBtn' />
        <button className='cngBtn'>change</button>
      </div>

      <div className="box">
        <p>change quote</p>
        <input type="text" className='inputBtn' />
        <button className='cngBtn'>change</button>
      </div>

      <div className="allTestimonials">
        <h2>currents items</h2>

        <div className="box">
          <p className='name'>Wayne Song</p>
          <p className='position'>Gaming Operation Manager</p>
          <p className='quote'>“We believe that in a region with a strong hunger for Esport like the Middle East & North Africa, MLBB's tournament ecosystem will be developed into world-class quality thanks to our cooperation with ESME.”</p>
        </div>

        <div className="box">
          <p className='name'>Wayne Song</p>
          <p className='position'>Gaming Operation Manager</p>
          <p className='quote'>“We believe that in a region with a strong hunger for Esport like the Middle East & North Africa, MLBB's tournament ecosystem will be developed into world-class quality thanks to our cooperation with ESME.”</p>
        </div>

        <div className="box">
          <p className='name'>Wayne Song</p>
          <p className='position'>Gaming Operation Manager</p>
          <p className='quote'>“We believe that in a region with a strong hunger for Esport like the Middle East & North Africa, MLBB's tournament ecosystem will be developed into world-class quality thanks to our cooperation with ESME.”</p>
        </div>

        <div className="box">
          <p className='name'>Wayne Song</p>
          <p className='position'>Gaming Operation Manager</p>
          <p className='quote'>“We believe that in a region with a strong hunger for Esport like the Middle East & North Africa, MLBB's tournament ecosystem will be developed into world-class quality thanks to our cooperation with ESME.”</p>
        </div>

        <div className="box">
          <p className='name'>Wayne Song</p>
          <p className='position'>Gaming Operation Manager</p>
          <p className='quote'>“We believe that in a region with a strong hunger for Esport like the Middle East & North Africa, MLBB's tournament ecosystem will be developed into world-class quality thanks to our cooperation with ESME.”</p>
        </div>


      </div>

    </div>
  )
}

export default Testimonial