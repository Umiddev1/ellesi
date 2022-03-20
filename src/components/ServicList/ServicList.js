import React,{ useContext } from 'react'
import './ServicList.css';
import { StoreContext } from '../../store/store';

function ServicList() {
  const value = useContext(StoreContext)
  const {langRep} = value
  return (
    <div className="serviclists">
      <ul className="serviclist">
        <li className="serviclist__item">
          <i className='bx bxs-plane-alt serviclist__icon'></i>
          <h4 className="serviclist__title">{langRep['Free Shipping']}</h4>
          <p className="serviclist__text">{langRep['Free Shipping for all US order']}</p>
        </li>
        <li className="serviclist__item ">
          <i className='bx bx-headphone serviclist__icon'></i>
          <h4 className="serviclist__title">{langRep['Support 24/7']}</h4>
          <p className="serviclist__text">{langRep['We support 24h a day']}</p>
        </li>
        <li className="serviclist__item">
          <i className='bx bx-refresh serviclist__icon'></i>
          <h4 className="serviclist__title">{langRep['100% Money Back']}</h4>
          <p className="serviclist__text">{langRep['You have 30 days to Return']}</p>
        </li>
        <li className="serviclist__item ">
          <i className='bx bx-gift serviclist__icon'></i>
          <h4 className="serviclist__title">{langRep['Payment Secure']}</h4>
          <p className="serviclist__text">{langRep['We ensure secure payment']}</p>
        </li>
      </ul>
    </div>
  )
}

export default ServicList
