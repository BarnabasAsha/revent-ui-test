import HeadingTwo from "../HeadingTwo"
import { PhoneIcon, SendIcon } from "../icons"
import './styles.css'

const Contact = () => {
  return (
    <section className="__container">
      <HeadingTwo title="Get in Touch" />
      <div className="__contact">
        <div className="__contact_ctas">
          <div className="__contact_ctas_item">
            <PhoneIcon />
            <h5>Call Us</h5>
            <p>+234-806 749-700</p>
          </div>
          <div className="__contact_ctas_item">
            <SendIcon />
            <h5>Send Email</h5>
            <p>revent@digital.com</p>
          </div>
        </div>
        <form className="__contact_form">
          <div className="__contact_row">
            <input type="text" />
            <input type="text" />
          </div>
          <input type="text" />
          <textarea />
        <button className="__revent_btn">Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact