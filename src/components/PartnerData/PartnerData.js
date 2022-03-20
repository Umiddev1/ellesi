import React from 'react'
import { partnerObj } from './PartnerDataObj';
import './PartnerData.css';
function PartnerData() {
  return (
    <div className="partnerdata">
      <ul className="partnerdata__list">
        {
          partnerObj.map((info) => (
            <li className="partnerdata__item" key={info.id}><img className="partnerdata__img" src={info.img} alt="" /></li>
          ))
        }
      </ul>
    </div>
  )
}

export default PartnerData