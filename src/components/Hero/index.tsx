import HeroImg from '../../assets/hero_img.png'
import { BehanceIcon, DribbleIcon, FacebookIcon, HeroVector, Logo } from '../icons'
import './styles.css'

const Hero = () => {
  return (
    <section className="__hero">
      
      <div className="__hero_content">
      <a href="" className="__hero_content_logo">
        <Logo />
      </a>
        <h1 className="__hero_content_title">Innovative Solution Taliored to your Business need</h1>
        <p className="__hero_content_text __revent_text">We can partner with your business to provide a symbiotic relationship and synergy to help you or your business achieve more business growth through strategic financial advisory, investment business and human resource planning and management.​</p>
        <button className="__revent_btn">Get in touch</button>
        <ul className="__hero_content_list">
          <li className="__hero_content_list_item">
            <a href="#">
              <BehanceIcon />
            </a>
          </li>
          <li className="_hero_content_list_item">
            <a href="#">
              <DribbleIcon />
            </a>
          </li>
          <li className="_hero_content_list_item">
            <a href="#">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="__hero_img">
        <img src={HeroImg} alt="" />
        <HeroVector />
      </div>

    </section>
  )
}

export default Hero