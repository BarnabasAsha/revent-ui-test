import HeadingTwo from "../HeadingTwo"
import './styles.css'

const Resume = () => {
  return (
    <section className="__container">
      <HeadingTwo title="Resume" />
      <div className="__resume">
        <div className="__resume_col">
          <div className="__resume_col_item">
            <div className="__resume_col_item_yr">2017</div>
            <h4 className="__resume_col_item_sch">Louisanna State University</h4>
            <p className="__resume_col_item_desc">Lorem Ipseum</p>
          </div>
          <div className="__resume_col_item">
            <div className="__resume_col_item_yr">2018</div>
            <h4 className="__resume_col_item_sch">Havard EdX</h4>
            <p className="__resume_col_item_desc">Principles of Design</p>
          </div>
        </div>
        <div className="__resume_col">
          <div className="__resume_col_item">
            <div className="__resume_col_item_yr">2019</div>
            <h4 className="__resume_col_item_sch">Udacity</h4>
            <p className="__resume_col_item_desc">Product Design</p>
          </div>
          <div className="__resume_col_item">
            <div className="__resume_col_item_yr">2020</div>
            <h4 className="__resume_col_item_sch">Microsoft Partner</h4>
            <p className="__resume_col_item_desc">Platinum</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume