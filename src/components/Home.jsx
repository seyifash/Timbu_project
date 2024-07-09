import React from 'react'
import ProductList from './ProductList'
import ClearStorageButton from './clearStorage'

const Home = () => {
  return (
    <div>
      <ProductList />
      <ClearStorageButton />
    </div>
  )
}

export default Home