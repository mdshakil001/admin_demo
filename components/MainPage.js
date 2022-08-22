import React, { useState } from 'react'
import Sidebar from './Sidebar'
import styles from '../styles/MainPage.module.css'
import TopHead from './TopHead'
import MainHead from './MainHead'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Team from './Team'
import Portfolio from './Portfolio'
import PortfolioDetail from './PortfolioDetail'
import Testimonial from './Testimonial'
import Blog from './Blog'
import BlogDetail from './BlogDetail'
import Contact from './Contact'
import Footer from './Footer'

import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

const MainPage = () => {
  const [top, setTop] = useState(true);
  const [main, setMain] = useState(false);
  const [hero, setHero] = useState(false);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [team, setTeam] = useState(false);
  const [port, setPort] = useState(false);
  const [portD, setPortD] = useState(false);
  const [test, setTest] = useState(false);
  const [blog, setBlog] = useState(false);
  const [blogD, setBlogD] = useState(false);
  const [contact, setContact] = useState(false);
  const [footer, setFooter] = useState(false);

  const topFunc = () => {
    setTop(true);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const mainFunc = () => {
    setTop(false);
    setMain(true);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const heroFunc = () => {
    setTop(false);
    setMain(false);
    setHero(true);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const aboutFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(true);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const serviceFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(true);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const teamFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(true);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const portFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(true);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const portDFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(true);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const testFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(true);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const blogFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(true);
    setBlogD(false);
    setContact(false);
    setFooter(false);
  }
  const blogDFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(true);
    setContact(false);
    setFooter(false);
  }
  const contactFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(true);
    setFooter(false);
  }
  const footerFunc = () => {
    setTop(false);
    setMain(false);
    setHero(false);
    setAbout(false);
    setService(false);
    setTeam(false);
    setPort(false);
    setPortD(false);
    setTest(false);
    setBlog(false);
    setBlogD(false);
    setContact(false);
    setFooter(true);
  }


  const [resNav, setResNav] = useState(false);
  const openNav = () => {
    setResNav(true);
  }
  const closeNav = () => {
    setResNav(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebarCon}>
        {/* <Sidebar /> */}
        <div className={styles.sidebar}>
          <p className='control_nav'>control panel</p>
          <ul className="">
            <li onClick={topFunc} className={top ? 'linkClick' : ''}>Top Head</li>
            <li onClick={mainFunc} className={main ? 'linkClick' : ''}>Main Head</li>
            <li onClick={heroFunc} className={hero ? 'linkClick' : ''}>Hero</li>
            <li onClick={aboutFunc} className={about ? 'linkClick' : ''}>About</li>
            <li onClick={serviceFunc} className={service ? 'linkClick' : ''}>Servicves</li>
            <li onClick={teamFunc} className={team ? 'linkClick' : ''}>Team</li>
            <li onClick={portFunc} className={port ? 'linkClick' : ''}>Portfolio</li>
            {/* <li onClick={portDFunc} className={portD ? 'linkClick' : ''}>Portfolio Detail</li> */}
            <li onClick={testFunc} className={test ? 'linkClick' : ''}>Testimoni</li>
            <li onClick={blogFunc} className={blog ? 'linkClick' : ''}>Blog</li>
            {/* <li onClick={blogDFunc} className={blogD ? 'linkClick' : ''}>Blog Detail</li> */}
            <li onClick={contactFunc} className={contact ? 'linkClick' : ''}>Contact</li>
            <li onClick={footerFunc} className={footer ? 'linkClick' : ''}>Footer</li>
          </ul>
        </div>
      </div>


      <div className={resNav ? "responsiveSide open" : "responsiveSide"}>
        {/* <div className="responsiveSide open"> */}
        <div className={styles.SidebarRes}>

          <div className="header">
            <p className='control_nav'>control panel</p>
            <p className='close' onClick={closeNav}>X</p>
          </div>

          <ul className="">
            <li onClick={topFunc} className={top ? 'linkClick' : ''}>Top Head</li>
            <li onClick={mainFunc} className={main ? 'linkClick' : ''}>Main Head</li>
            <li onClick={heroFunc} className={hero ? 'linkClick' : ''}>Hero</li>
            <li onClick={aboutFunc} className={about ? 'linkClick' : ''}>About</li>
            <li onClick={serviceFunc} className={service ? 'linkClick' : ''}>Servicves</li>
            <li onClick={teamFunc} className={team ? 'linkClick' : ''}>Team</li>
            <li onClick={portFunc} className={port ? 'linkClick' : ''}>Portfolio</li>
            {/* <li onClick={portDFunc} className={portD ? 'linkClick' : ''}>Portfolio Detail</li> */}
            <li onClick={testFunc} className={test ? 'linkClick' : ''}>Testimoni</li>
            <li onClick={blogFunc} className={blog ? 'linkClick' : ''}>Blog</li>
            {/* <li onClick={blogDFunc} className={blogD ? 'linkClick' : ''}>Blog Detail</li> */}
            <li onClick={contactFunc} className={contact ? 'linkClick' : ''}>Contact</li>
            <li onClick={footerFunc} className={footer ? 'linkClick' : ''}>Footer</li>
          </ul>
        </div>
      </div>

      <div className={styles.contents}>
        <div className="fixedNav">
          <p>contents section</p>
          <div className="icon" onClick={openNav}><FaBars size={30} color="white" /></div>
        </div>
        {top && <TopHead />}
        {main && <MainHead />}
        {hero && <Hero />}
        {about && <About />}
        {service && <Services />}
        {team && <Team />}
        {port && <Portfolio />}
        {portD && <PortfolioDetail />}
        {test && <Testimonial />}
        {blog && <Blog />}
        {blogD && <BlogDetail />}
        {contact && <Contact />}
        {footer && <Footer />}
      </div>
    </div>
  )
}

export default MainPage