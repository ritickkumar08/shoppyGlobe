import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
       {/* 
        Outlet renders the matched child route.All pages must assume they live inside this layout.
      */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
