import React from 'react'
import './DemoHover.css';

function DemoHover() {
  return (
    <div className="demohover">
      <div className="demohover__wrapper">
      <ul className="demohover__list">
          <li className="demohover__item"><h3 className="demohover__title">Homepages</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home1</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home2</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home3</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home4</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home5</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home6</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home7</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home8</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Home9</a></li>
        </ul>
        <ul className="demohover__list">
          <li className="demohover__item"><h3 className="demohover__title">Niche Layouts</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">T-Shirt <span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Cosmetik <span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Jewelry <span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Furniture<span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Orgainc <span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Electronic</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Baby</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Bike</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Bag</a></li>
        </ul>
        <ul className="demohover__list">
          <li className="demohover__item"><h3 className="demohover__title">Homepages</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">T-Shirt</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Cosmetik</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Jewelry</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Furniture</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Orgainc</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Electronic</a></li>
        </ul>
      </div>
    </div>
  )
}

export default DemoHover