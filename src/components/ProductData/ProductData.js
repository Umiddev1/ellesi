import React, { useContext } from 'react';
import { StoreContext } from '../../store/store';
import './ProductData.css';
import { Link } from 'react-router-dom';
function ProductData() {
  const value = useContext(StoreContext)
  const { objData } = value;
  return (
    <div className="productdata">
      <ul className="productdata__list">
        {
          objData.map((items) => (
            <li className="productdata__item">
              <div className="productdata__des">
              <span className="productdata__heart"><i className='bx bx-heart'></i></span>
                <img className="productdata__img" src={items.mainImg} alt="mainimg" />
                <p>{items.title}</p>
                <p><span>{items.sale}</span> <span>{items.price}</span></p>
                <span className="productdata__eye"><i className='bx bx-low-vision'></i></span>
                <span className="productdata__cart"><i className='bx bxs-cart'></i></span>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductData