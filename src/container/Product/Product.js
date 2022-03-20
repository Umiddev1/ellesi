import React from 'react'
import './Product.css';
import ProductList from '../../components/ProductList/ProductList';
import ProductData from '../../components/ProductData/ProductData';
function Product() {
  return (
    <div className="container">
      <ProductList />
      <ProductData />
    </div>
  )
}

export default Product