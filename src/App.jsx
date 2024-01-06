
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'
import Hero from './sections/Hero/Hero'
import Quotes from './sections/Quotes/Quotes'
import Inspiration from './sections/Inspiration/Inspiration'
import Advice from './sections/Advice/Advice'
import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' element={<Hero/>}/>
        <Route path='quotes' element={<Quotes/>}/>
        <Route path='inspiration' element={<Inspiration/>}/>
        <Route path='advice' element={<Advice/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
