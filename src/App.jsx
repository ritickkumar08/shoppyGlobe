import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-gradient-to-r from-rose-100 to-rose-300 min-h-screen'>
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
