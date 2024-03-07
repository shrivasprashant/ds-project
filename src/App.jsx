import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Routess from './components/routes/Routess'



const App = () => {
  return (
    <div className='w-full h-screen'>
      <Header/>
      <Routess/>
      <Footer/>
    </div>
  )
}

export default App