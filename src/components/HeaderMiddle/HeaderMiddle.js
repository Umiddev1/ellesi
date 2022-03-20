import React,{ useContext, useState } from 'react'
import './HeaderMiddle.css';
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../store/store';
import AccountModal from '../AccounModal/AccountModal';
import CartModal from '../CartModal/CartModal';
function HeaderMiddle() {
  const value = useContext(StoreContext)
  const {langRep} = value
  const [state, setState] = useState(false)
  const [cartState, setCartState] = useState(false)
  function handleClick() {
    setState(true)
  }
  function CartClick() {
    setCartState(true)
  }
  return (
    <div className="headermiddle">
      <div className="container">
        <div className="headermiddle__wrapper">
        <div className='headermiddle__logos'>
          <a href="#"><img src={Logo} alt="logo" /></a>
        </div>
        <div className="headermiddle__inps">
          <form className="headermiddle__form">
            <input className="headermiddle__inp" type="search" placeholder={langRep['Search for products']} />
            <button className="headermiddle__btn"><i className='bx bx-search-alt-2'></i></button>
          </form>
        </div>
        <div className='headermiddle__icons'>
          <button onClick={handleClick} className="headermiddle__btns"><i className='bx bx-user-circle'></i></button>
          <Link to="/likepage" className="headermiddle__btns"><i className='bx bx-heart'></i> <span className="headermiddle__spn">0</span></Link>
          <button onClick={CartClick} className="headermiddle__btns"><i className='bx bx-cart-alt'></i> <span className="headermiddle__spn spn-animation">9</span></button>
        </div>
        </div>
        <AccountModal state={state} setState={setState} />
        <CartModal cartState={cartState} setCartState={setCartState} />
      </div>
    </div>
  )
}

export default HeaderMiddle
