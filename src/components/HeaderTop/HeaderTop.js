import React,{ useContext, useState } from 'react'
import './HeaderTop.css';
import { StoreContext } from '../../store/store';
function HeaderTop() {
  const value = useContext(StoreContext)
  const {langRep, handleLang, handleLangs} = useContext(StoreContext) 
  return (
    <div className='headertop'>
      <div className="container">
       <div className='headertop__wrapper'>
          <ul className='headertop__list'>
            <li className="headertop__item"><a className="headertop__link" href='#'><i className='bx bxl-facebook'></i></a></li>
            <li className="headertop__item"><a className="headertop__link"  href='#'><i className='bx bxl-twitter'></i></a></li>
            <li className="headertop__item"><a className="headertop__link"  href='#'><i className='bx bxl-google-plus' ></i></a></li>
            <li className="headertop__item"><a className="headertop__link"  href='#'><i className='bx bxl-pinterest' ></i></a></li>
            <li className="headertop__item"><a className="headertop__link"  href='#'><i className='bx bxl-instagram' ></i></a></li>
            <li className="headertop__item"><span>{langRep['call']}: </span><a className='headertop__call' href="tel:123456789">+01 23456789</a></li>
          </ul>
          <div className='headertop__langs'>
            <div className="headertop__lang">
            <p className="headertop__lang-text">ENG<span><i className='bx bx-chevron-down'></i></span></p>
            <div className="headertop__lang-list lang-list">
              <p onClick={handleLangs} className="lang-list-text">ENG</p>
              <p onClick={handleLang} className="lang-list-text">UZB</p>
            </div>
            </div>
          </div>
       </div>
       </div>
    </div>
  )
}

export default HeaderTop
