
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Add from './components/Add'




function App() {
 

  return (
    <>
      <Header/>

      <Routes>
       
          <Route path='/' element ={<Landing/>}/>
          <Route path='/home' element ={<Home/>}/>
          <Route path='/Watchhistory' element={<Watchhistory/>} />
  
       </Routes>
      

      <Footer/>
    </>
  )
}

export default App

