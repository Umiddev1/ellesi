import React, { useContext } from 'react'
import './AccountModal.css';
import Input from './Input/Input';
import { StoreContext } from '../../store/store';
function AccountModal({ state, setState }) {
  const value = useContext(StoreContext)
  const {langRep} = value;
  return (
    <div className={state ? "modal-bg m-block" : "modal-bg"} onClick={() => setState(false)}>
      <div className={state ? "modal tr" :"modal"}>
        <div className="modal__header">
          <p className="modal__text">SIGN IN</p>
          <p className="modal__close" onClick={() => setState(false)}><i className='bx bx-x'></i></p>
        </div>
        <form className="modal__form">
          <div className="modal__inps">
            <label className="modal__label">Email <span className="modal__spn">*</span></label>
            <Input type="email" />
            <span className="modal__icon"><i className='bx bx-user-plus'></i></span>
          </div>
          <div className="modal__inps">
            <label className="modal__label">Password <span className="modal__spn">*</span></label>
            <Input type="password" />
            <span className="modal__icons"><i className='bx bx-lock-alt'></i></span>
          </div>
          <button className="modal__btn">Login</button>
          <p className="modal__forgot">Forgot your password?</p>
        </form>
        <div className="modal__footer">
          <p className="modal__footer-icn"><i className='bx bx-user'></i></p>
          <p className="modal__footer-text">{langRep['No account yet?']}</p>
          <p className="modal__footer-texts">{langRep["Registering for this site allows you to access your order status and history. Just fill in the fields below, and well get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier."]}</p>
          <a className="modal__footer-link" href="">{langRep['Create An Account']}</a>
        </div>
      </div>
    </div>
  )
}

export default AccountModal