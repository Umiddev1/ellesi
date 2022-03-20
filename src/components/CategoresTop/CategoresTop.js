import React, { useState } from 'react'
import './CategoresTop.css';
import { categoresObj } from './CategoresObj';
import { Link } from 'react-router-dom';
export default function CategoresTop() {
  const [catObj, setCatObj] = useState(categoresObj)
  return (
    <div className="categorestop">
      <div className="container">
        <div className="categorestop__des">
          <h2 className="categorestop__title">Top Categories</h2>
          <ul className="categorestop__list">
            {
              catObj.map((items) => {
                const {img, text} = items
                return <li key={items.id} className="categorestop__item">
                  <Link to='/collection'>
                  <img className="categorestop__img" src={img} alt="img" />
                  <p className="categorestop__text">{text}</p>
                  </Link>
                  </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
