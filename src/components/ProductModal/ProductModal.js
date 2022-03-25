import React, { useState, useEffect } from 'react'
import './ProductModal.css';
function ProductModal({open, handleOpen, handleClose, current}) {
  const [addedBadge, setAddedBadge] = useState(false)
  const [count, setCount] = useState(1)
  const [time, setTime] = useState(60);
    const timer = () => {
        setTime(time - 1);
    }
    useEffect(() => {
        if (time <= 0) {
            return setTime(60);
        }
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, [time])
  return (
    <div className={open ? "productmodal-bg" : "pnone"}>
      <div className="productmodal">
        <button onClick={() => handleClose(false)} className="productmodal__close"><i className='bx bx-x'></i></button>
        <div className="productmodal__wrapper">
          <div className="productmodal__imgs">
            <img className="productmodal__img" src={current.mainImg} alt="maing" />
          </div>
          <div className="productmodal__des">
              <h2 className="info__title">{current.title}</h2>
              <p className="info__text"><span className="info__spn">9</span> sold in last <span className="info__spn">18</span> hours</p>
              <p className="info__price">{current.price}</p>
              <p className="info__lorem">Lorem Ipsum has been the ever since the 1500s.</p>
              <p className="info__hurry">HURRY! ONLY <span className="info__spn">7</span> LEFT IN STOCK.</p>
              <div style={{width:"400px"}} className="info__line"><span className="info__spn-line"></span></div>
              <ul className="info__list">
                  <li className="info__item"><span className="info__time">0</span><p className="info__times">Days</p></li>
                  <li className="info__item"><span className="info__time">00</span><p className="info__times">HR</p></li>
                  <li className="info__item"><span className="info__time">55</span><p className="info__times">MIN</p></li>
                  <li className="info__item"><span className="info__time">{time}</span><p className="info__times">SC</p></li>
                </ul>
                <div className="info__add">
                  <div className="info__counts">
                    <button onClick={() => setCount(count - 1)} className="info__count-btn minus">-</button>
                    <span className="info__count">{count}</span>
                    <button onClick={() => setCount(count + 1)} className="info__count-btn plus">+</button>
                  </div>
                  <button style={{width:"70%"}} className="info__addcart">ADD TO CART</button>
                </div>
          </div>
        </div>
      </div>
    </div>  
  )
}


export default ProductModal