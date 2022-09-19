import HeadingTwo from "../HeadingTwo"
import AboutImg from "../../assets/about_img.png"
import './styles.css'

const About = () => {
  return (
    <section className="__container">
      <HeadingTwo title="About Us" />
      <div className="__about">
        <div className="__about_img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="__about_content">
          <h3 className="__about_content_title">We focus on value and excellence</h3>
          <p className="__revent_text">We are focused on providing products which deliver demonstrably good value for our clients and end-customers – be that a specific return, outperforming an index or achieving returns at lower risk.​​</p>
          <p className="__revent_text">Through achieving value for the clients whose assets we manage, efficiently controlling costs, effectiveness and efficiency, we deliver value to our shareholders and wider stakeholders</p>
          <button className="__revent_btn">Work with Us</button>
        </div>
      </div>
    </section>
  )
}

export default About