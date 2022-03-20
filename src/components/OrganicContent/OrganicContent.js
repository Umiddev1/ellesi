import React,{ useState } from 'react'
import './OrganicContent.css';
import { organicObj } from './OrganicObj';
function OrganicContent() {
  const [arr, setArr] = useState(organicObj);
  const [slider, setSlider] = useState(0)
  return (
    <div className="organic__content">
      <div className="organic__contents"> 
         <div className="organic__wrapper">
           <ul className="organic__list" style={{transform:`translateX(${-slider * 1149}px)`}}> 
            {
              arr.map((data) => (
                <li key={data.id} className="organic__item">
                  <div className="organic__des">
                    <div className="organic__imgs">
                    <span className="organic__heart"><i className='bx bx-heart'></i></span>
                    <img className="organic__mainimg" src={data.mainImg} alt="mainimg" />
                    <img className="organic__backimg" src={data.backImg} alt="backimg" />
                    <span className="organic__eye"><i className='bx bx-low-vision'></i></span>
                    <span className="organic__cart"><i className='bx bxs-cart'></i></span>
                    </div>
                    <span className="organic__spn">{data.sale}</span>
                    <div className="organic__texts">
                      <h2 className="organic__title">{data.title}</h2>
                      <span className="organic__oldprice"><del>{data.oldPrice}</del></span>
                      <span className="organic__newprice">{data.newPrice}</span>
                      <div className="organic__num">
                        <p className="organic__num-text">Available:<strong>75</strong></p>
                        <p className="organic__num-text">Already Sold:<strong className="organic__num-spn">25</strong></p>
                      </div>
                      <div className="organic__line">
                        <span className="organic__line-spn">dsa</span>
                      </div>  
                      <div className="organic__slider">
                        <button onClick={() => setSlider(slider - 1)} className="organic__btn"><span className="organic__chevl"><i className='bx bx-chevron-left'></i></span> Prev deal</button>
                        <span className="organic__lines">|</span>
                        <button onClick={() => setSlider(slider + 1)} className="organic__btn">Next deal <span className="organic__chevr"><i className='bx bx-chevron-right'></i></span></button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            }
           </ul>
          </div>
         </div>
      </div>
  )
}

export default OrganicContent