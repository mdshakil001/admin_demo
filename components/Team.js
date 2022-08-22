import React from 'react'
import styles from '../styles/Team.module.css'

const Team = () => {
  return (
    <div className={styles.container}>


      <div className="box">
        <p>add new </p>
        <input type="file" />
        <input type="text" placeholder='name' className='inputBtn' />
        <button className='cngBtn'>submit</button>
        <input type="text" placeholder='position' className='inputBtn' />
        <button className='cngBtn'>submit</button>
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


      <div className="allServices">
        <h2>current team members</h2>

        <div className="box">
          <img src="./images/team.png" alt="" />
          <div className="text">
            <h6>name</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quisquam ipsam dolorem voluptatem illum nam eius animi neque soluta.</p>
          </div>
        </div>

        <div className="box">
          <img src="./images/team.png" alt="" />
          <div className="text">
            <h6>name</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quisquam ipsam dolorem voluptatem illum nam eius animi neque soluta.</p>
          </div>
        </div>

        <div className="box">
          <img src="./images/team.png" alt="" />
          <div className="text">
            <h6>name</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quisquam ipsam dolorem voluptatem illum nam eius animi neque soluta.</p>
          </div>
        </div>

        <div className="box">
          <img src="./images/team.png" alt="" />
          <div className="text">
            <h6>name</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quisquam ipsam dolorem voluptatem illum nam eius animi neque soluta.</p>
          </div>
        </div>

        <div className="box">
          <img src="./images/team.png" alt="" />
          <div className="text">
            <h6>name</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quisquam ipsam dolorem voluptatem illum nam eius animi neque soluta.</p>
          </div>
        </div>

        <div className="box">
          <img src="./images/team.png" alt="" />
          <div className="text">
            <h6>name</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quisquam ipsam dolorem voluptatem illum nam eius animi neque soluta.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Team