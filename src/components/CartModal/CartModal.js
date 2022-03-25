import React,{ useState, useContext } from 'react'
import '../AccounModal/AccountModal.css';
import './CartModal.css';
import fruit from '../../assets/img/shophoverimg/fruit.jpg';
import { CartContext } from '../../store/CartContext';
function CartModal({cartState, setCartState}) {
  const [count, setCount] = useState(0)
  const {carts, setCarts} = useContext(CartContext)
  const [isNone, setIsNone] = useState(false)
  function handleClick(data) {
    const filtered = carts.filter(items => items.id !== data.id)
    setCarts(filtered)
  } 
  return (
    <div className={cartState ? "cartmodal-bg cm-block" : "cartmodal-bg"}>
      <div className={cartState ? "cartmodal ctr" :"cartmodal"}>
      <div className="cartmodal__header">
          <p className="modal__text">SIGN IN</p>
          <p className="modal__close" onClick={() => setCartState(false)}><i className='bx bx-x'></i></p>
        </div>
        <div className="cartmodal__body">
          <div className="cartmodal__product">
            {
              carts.map((data) => (
                <div key={data.id} className= "cartmodal__inner">
                  <div className="cartmodal__imgss">
                  <img className="cartmodal__img" src={data.mainImg} alt="mainimg" />
                    <div className="cartmodal__des">
                      <p className="cartmodal__text">{data.title}</p>
                      <p className="cartmodal__subtext">{data.price}</p>
                    </div>
                  </div>
                <div className="cartmodal__counts">
                  <span className="cartmodal__spn">{count}</span>
                  <button className="cartmodal__next" onClick={() => setCount(count + 1)}>+</button>
                  <button className="cartmodal__prev" onClick={() => setCount(count - 1)}>-</button>
                  <p onClick={() => handleClick(data)} className="cartmodal__remove">Remove</p>
                </div>
                </div>
                
              ))
            }
          </div>
          <div className="cartmodal__textarea">
            <p className="cartmodal__textarea-text">Special instructions for seller</p>
            <textarea className="cartmodal__textareas"></textarea>    
          </div>
        </div>
        <div className="cartmodal__footer">
          <div className="cartmodal__footer-header">
            <h4 className="cartmodal__footer-title">Subtotal</h4>
            <p className="cartmodal__footer-price">$65.00</p>
          </div>
          <div className="cartmodal__footer-msg msg">
            <p className="msg__text"><span className="msg__spn">Spend $1350.0</span>0 more to reach FREE SHIPPING!</p>
            <div className="msg__inps">
            <input className="msg__inp" type="checkbox" />
            <label className="msg__lb"> I agree with the terms and conditions.</label> <br/>
            <button className="msg__btn">View Cart</button> <br />
            <button className="msg__btn">Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
