import { About, Contact, Hero, Navbar, Portfolio, Resume } from "./components"
import './index.css'

function App() {

  return (
    <main className="__main">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default App
