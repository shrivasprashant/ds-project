import React from 'react'
import Carsole from './Carsole'
import BeautyImage from './BeautyImage'
import ActiveSlider from './ActiveSlider'
import ProductList from './ProductList'
import Background from './Background'
import Layer from './Layer'
import Bottom from './Bottom'

const Home = () => {
  return (
    <div className="w-full">
      <Background/>
      <Carsole />
      <BeautyImage/>
      <ActiveSlider/>
      {/* <ProductList/> */}
      <Layer/>
      <Bottom/>
    </div>

  )
}

export default Home