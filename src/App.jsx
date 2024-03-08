import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Routess from './components/routes/Routess'

// import {Provider} from 'react-redux'
// import store from '../src/components/Home/store/store'

const App = () => {
  return (
    <div className='w-full h-screen'>
        {/* <Provider store={store}>  */}
      <Header/>
      <Routess/>
      <Footer/>
      
      {/* </Provider> */}
    </div>
  )
}

export default App