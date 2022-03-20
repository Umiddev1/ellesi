import React from 'react';
import './FooterTop.css';
import logo from '../../assets/img/Logo.png'
const FooterTop = () => {
    return (
        <div className='footer__top ftop row align-items-center'>
            <a className='ftop__logo col-md-3 col-sm-6 col-xs-12' href="#">
                <img src={logo} alt="logo" />
            </a>
            <ul className="ftop__links col-md-3 col-sm-6 col-xs-12">
                <li className="ftop__link">
                    <a href="#">
                        <i className='ftop__icon bx bxl-facebook'></i>
                    </a>
                </li>
                <li className="ftop__link">
                    <a href="#">
                        <i className='ftop__icon bx bxl-twitter' ></i>
                    </a>
                </li>
                <li className="ftop__link">
                    <a href="#">
                        <i className='ftop__icon bx bxl-google-plus' ></i>
                    </a>
                </li>
                <li className="ftop__link">
                    <a href="#">
                        <i className='ftop__icon bx bxl-pinterest-alt' ></i>
                    </a>
                </li>
                <li className="ftop__link">
                    <a href="#">
                        <i className='ftop__icon bx bxl-instagram' ></i>
                    </a>
                </li>
            </ul>
            <h3 className="newsletter__title-res">Newsletter</h3>
            <form className='footer__form newsletter col-md-6 col-xs-12'>
                <h3 className="newsletter__title">Newsletter</h3>
                <input className='newsletter__input' type="email" placeholder='Your email address' required/>
                <button className='newsletter__btn' type='button'>subscribe</button>
            </form>
        </div>
    );
}

export default FooterTop;
