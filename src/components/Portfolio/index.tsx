import HeadingTwo from "../HeadingTwo"
import TabImg from '../../assets/tab_img.png'
import './styles.css'
import { useState } from "react"

const Portfolio = () => {
  const tabs = ['All', 'Website', 'MobileApp', 'CSS', 'GitHub']

  const [activeTab, setActiveTab] = useState('All')

  return (
    <section className="__container">
      <HeadingTwo title="Portfolio" />
      <div className="__portfolio">
        <ul className="__portfolio_tablist">
          {tabs.map((tab) => (
            <li key={tab} onClick={() => setActiveTab(tab)} className={`__portfolio_tablist_tab ${activeTab === tab && 'active'}`}>{tab}</li>
          )
          )}
        </ul>
        <div className="__portfolio_tabpanel">
          <div className="__portfolio_tabpanel_img">
            <img src={TabImg} />
          </div>
          <div className="__portfolio_tabpanel_img">
            <img src={TabImg} />
          </div>
          <div className="__portfolio_tabpanel_img">
            <img src={TabImg} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio