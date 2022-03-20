import React from 'react'
import FooterTop from '../../components/FooterTop/FooterTop'
import FooterMiddle from '../../components/FooterMiddle/FooterMiddle';
import FooterBottom from '../../components/FooterBottom/FooterBottom';
import './Footer.css';
function Footer() {
  return (
    <div className="footers">
      <div className="footer">
      <div className="container">
        <FooterTop />
        <FooterMiddle />
      </div>  
    </div>
    <FooterBottom />
    </div>
  )
}

export default Footer