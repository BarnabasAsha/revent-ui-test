
import { HeadingVector } from '../icons'
import './styles.css'

const HeadingTwo = ({ title }:{title: string}) => {
  return (
    <div className="__revent_heading2x">
      <h2>{title}</h2>
      <HeadingVector />
    </div>
  )
}

export default HeadingTwo