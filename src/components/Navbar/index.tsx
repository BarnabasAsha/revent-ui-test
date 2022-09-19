import { useState } from 'react'
import './styles.css'

const routes = ['About Us', 'Portfolio', 'Experience', 'Contact']

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
    <nav className="__navbar_wrapper">
    <button onClick={() => setShowMenu(state => !state)} className="__navbar_menu">{showMenu ? 'CLOSE' : 'MENU'}</button>
      <div className={`__navbar ${showMenu && 'open'}`}>
      {
        routes.map(route => (
          
          <a key={route} className="__navbar_link" href="#">{route}</a>
        ) )
      }
      </div>
    </nav>
    </header>
  )
}

export default Navbar