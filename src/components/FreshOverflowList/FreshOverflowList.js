import React from 'react'
import './FreshOverflowList.css';

function FreshOverflowList() {
  return (
    <div className="freshover">
      <ul className="freshover__list">
        <li className="freshover__item">
          <h2 className="freshover__title">Jobbie <br/> Ice Cream</h2>
          <p className="freshover__text">Sale Off <span className="freshover__spn">25%</span></p>
          <p className="freshover__texts">Shop Now</p>
          <img className="freshover__img" src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner1_570x.jpg?v=1565666027" alt="imgs" />
        </li>
        <li className="freshover__item">
        <h2 className="freshover__title">Fresh <br/>Guava Juice</h2>
          <p className="freshover__texts">Shop Now</p>
          <img className="freshover__img" src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner2_377x.jpg?v=1565666027" alt="imgs" />
        </li>
        <li className="freshover__item">
        <h2 className="freshover__title">Fresh <br/> Vegetables</h2>
          <p className="freshover__texts">Shop Now</p>
          <img className="freshover__img" src="https://cdn.shopify.com/s/files/1/0085/5618/3637/files/organic-banner3_377x.jpg?v=1565666027" alt="" />
        </li>
      </ul>
    </div>
  )
}

export default FreshOverflowList