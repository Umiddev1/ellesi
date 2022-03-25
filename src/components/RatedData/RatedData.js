import React,{ useState } from 'react'
import './RatedData.css';
import { topRated } from './RatedDataObj';
import { bestSilling } from './RatedDataObj';
import { onSale } from './RatedDataObj';
function RatedData() {
  const [data, setData] = useState(topRated)
  return (
    <div className="rateddata">
      <div className="rateddata__titles">
        <h2 className="rateddata__title">Top Rated</h2>
        <h2 className="rateddata__title">Best Selling</h2>
        <h2 className="rateddata__title">On Sale</h2>
      </div>
      <div className="rateddata__wrapper">
      <ul className="rateddata__list"> 
        {
          data.map((info) => (
            <li key={info.id} className="rateddata__item">
              <div className="rateddata__des">
                <img src={info.img} alt="info-img" />
                <div className="rateddata__texts">
                  <p>{info.title}</p>
                  <p><span>{info.price}</span> <span>{info.sale}</span></p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      <ul className="rateddata__list"> 
        {
          bestSilling.map((info) => (
            <li key={info.id} className="rateddata__item">
              <div className="rateddata__des">
                <img src={info.img} alt="info-img" />
                <div className="rateddata__texts">
                  <p>{info.title}</p>
                  <p><span>{info.price}</span> <span>{info.sale}</span></p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      <ul className="rateddata__list"> 
        {
          onSale.map((info) => (
            <li key={info.id} className="rateddata__item">
              <div className="rateddata__des">
                <img src={info.img} alt="info-img" />
                <div className="rateddata__texts">
                  <p>{info.title}</p>
                  <p><span>{info.price}</span> <span>{info.sale}</span></p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default RatedData