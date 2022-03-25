import React,{ useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../container/Header/Header';
import Footer from '../../container/Footer/Footer';
import { StoreContext } from '../../store/store';
import { CartContext } from '../../store/CartContext';
import './Info.css';
function Info() {
  const {id} = useParams()
  const value = useContext(StoreContext);
  const [weight, setWeight] = useState('250G')
  const [count, setCount] = useState(1)
  const {objData} = value;
  const [img, setImg] = useState(true)
  let a = objData.filter((data) => {
    if(data.id === +id) {
      return data
    }
  })
  const {carts, setCarts} = useContext(CartContext)
  function hanldeAdd(data) {
    setCarts([...carts, data])
  }
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
    <div className="info">
     <Header />
     <div className="container">
     <div className="info__wrapper">
       {
         a.map((data) => (
           <div className="info__inner" key={data.id}>
              <div className="info__imgs">
                 <div className="info__miniimgs">
                  <img onClick={() => setImg(true)} className="info__miniimg" src={data.mainImg} alt="mainimg" />
                  <img onClick={() => setImg(false)} className="info__miniimg" src={data.backImg} alt="backimg" />
                </div>
             <div className="info__bigimgs">
                <img className="info__bigimg" src={img === true ? data.mainImg : data.backImg} alt="mainimg" />
             </div>
           </div>
              <div className="info__des">
                <h2 className="info__title">{data.title}</h2>
                <p className="info__text"><span className="info__spn">9</span> sold in last <span className="info__spn">18</span> hours</p>
                <p className="info__price">{data.price}</p>
                <p className="info__lorem">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p className="info__hurry">HURRY! ONLY <span className="info__spn">7</span> LEFT IN STOCK.</p>
                <div className="info__line"><span className="info__spn-line"></span></div>
                <ul className="info__list">
                  <li className="info__item"><span className="info__time">0</span><p className="info__times">Days</p></li>
                  <li className="info__item"><span className="info__time">00</span><p className="info__times">HR</p></li>
                  <li className="info__item"><span className="info__time">55</span><p className="info__times">MIN</p></li>
                  <li className="info__item"><span className="info__time">{time}</span><p className="info__times">SC</p></li>
                </ul>
                <p className="info__weight">WEIGHT: <span className="info__weights">{weight}</span></p>
                <button onClick={() => setWeight("250G")} className={weight === "250G" ? "info__btns" : "info__btn"}>250 G</button>
                <button onClick={() => setWeight("500G")} className={weight === "500G" ? "info__btns" : "info__btn"}>500 G</button>
                <button onClick={() => setWeight("1KG")} className={weight === "1KG" ? "info__btns" : "info__btn"}>1 KG</button>
                <div className="info__add">
                  <div className="info__counts">
                    <button onClick={() => setCount(count - 1)} className="info__count-btn minus">-</button>
                    <span className="info__count">{count}</span>
                    <button onClick={() => setCount(count + 1)} className="info__count-btn plus">+</button>
                  </div>
                  <button onClick={() => hanldeAdd(data)} className="info__addcart">ADD TO CART</button>
                </div>
                <p className="info__or">— or —</p>
                <button className="info__buy-btn">BUY IT NOW</button>
                <p className="info__order">Order in the next <span className="info__weights">18 hours 10 minutes</span> to get it by Friday 04/08/2022</p>
                <img className="info__visa-img" src={'https://elessi.netlify.app/static/media/payment.0ee6201c11e8401baa06.webp'} alt="imgs" />
              </div>
           </div>
         ))
       }
     </div>
     </div>
     <Footer />
    </div>
  )
}

export default Info