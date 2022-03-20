import React,{ useContext, useEffect, useState } from 'react'
import './HeaderBottom.css';
import { StoreContext } from '../../store/store';
import DemoHover from './DemoHover/DemoHover';
import ShopHover from './ShopHover/ShopHover';
import PageHover from './PageHover/PageHover';

function HeaderBottom() {
  const value = useContext(StoreContext)
  const [activClass, setActivClass] = useState(true)
  const {langRep} = value;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    let height = window.scrollY
    let count = 10;
    let elCat = document.querySelector('.category')
    if(height > count) {
      elCat.classList.add('bottom-none')
    }
    else {
    }
  }

  return (
    <div className="headerbottom">
      <div className='container'>
        <div className="headerbottom__wrapper">
          <nav className="headerbottom__nav nav">
            <h1 className="headerbottom__title">{langRep['Shop by categories']}</h1>
             <div className="headerbottom__category category">
              <ul className="category__list">
                <li className="category__item">{langRep['fruits']} <i className='bx bx-chevron-right right'></i></li>
                <li className="category__item">{langRep['drinks']} <i className='bx bx-chevron-right right'></i></li>
                <li className="category__item">{langRep['butter & egges']}</li>
                <li className="category__item">{langRep['trees']}</li>
                <li className="category__item">{langRep['cakes']}</li>
                <li className="category__item">{langRep['meates']} <i className='bx bx-chevron-right right'></i></li>
                <li className="category__item">{langRep['fish']}</li>
                <li className="category__item">{langRep['vegetables']}</li>
                <li className="category__item">{langRep['onions']}</li>
                <li className="category__item">{langRep['grapes']}</li>
                <li className="category__item">{langRep['banana']}</li>
                <li className="category__item">{langRep['potates']}</li>
              </ul>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#">{langRep['demo']}<span><i className='bx bx-chevron-down'></i></span></a>
                <DemoHover />
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">{langRep['shop']}<span><i className='bx bx-chevron-down'></i></span></a>
                <span className="nav__span">{langRep['sale']}</span>
                <ShopHover />
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">{langRep['blog']}<span><i className='bx bx-chevron-down'></i></span></a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">{langRep['pages']}<span><i className='bx bx-chevron-down'></i></span></a>
                <PageHover />
              </li>
              <li className="nav__item">
                <a className="nav__link" href="#">{langRep['buy theme']}</a>
                <span className="nav__span nav__spn">{langRep['sale']}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
