import React from 'react'
import styles from '../styles/Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className="">
                <li className={styles.list}>Top Head</li>
                <li>Main Head</li>
                <li>Hero</li>
                <li>About</li>
                <li>Servicves</li>
                <li>Team</li>
                <li>Portfolio</li>
                <li>Portfolio Detail</li>
                <li>Testimoni</li>
                <li>Blog</li>
                <li>Blog Detail</li>
                <li>Contact</li>
                <li>Footer</li>
            </ul>
        </div>
    )
}

export default Sidebar