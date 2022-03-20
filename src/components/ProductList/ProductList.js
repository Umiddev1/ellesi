import React,{ useContext, useState } from 'react';
import { StoreContext } from '../../store/store';
import './ProductList.css';

function ProductList() {
  const value = useContext(StoreContext)
  const { handleFruit, handleVege, handleMilk, handleBanana, handleSea } = value
  const [isClass, setIsClass] = useState(1)
  return (
    <div className="productlist">
      <div className="productlist__wrapper">
      <h1 className="productlist__title">Best Seller Product</h1>
      <ul className="productlist__list">
        <li className="productlist__item" onClick={handleFruit}>
          <p onClick={() => setIsClass(1)} className={isClass === 1 ? "productlist__links" : "productlist__link"}>FRUITS</p>
        </li>
        <li className="productlist__item" onClick={handleVege}>
          <p onClick={() => setIsClass(2)} className={isClass === 2 ? "productlist__links" : "productlist__link"}>VEGETABLES</p>
        </li>
        <li className="productlist__item" onClick={handleMilk}>
          <p onClick={() => setIsClass(3)} className={isClass === 3 ? "productlist__links" : "productlist__link"}>MILK & CREAM</p>
        </li>
        <li className="productlist__item" onClick={handleBanana}>
          <p onClick={() => setIsClass(4)} className={isClass === 4 ? "productlist__links" : "productlist__link"}>BANANA</p>
        </li>
        <li className="productlist__item" onClick={handleSea}>
          <p onClick={() => setIsClass(5)} className={isClass === 5 ? "productlist__links" : "productlist__link"}>SEA FOOD</p>
        </li>
      </ul>      
      </div>
    </div>
  )
}

export default ProductList