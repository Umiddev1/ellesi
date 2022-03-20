import React,{ useState } from 'react'
import './CollectionData.css';
import { collOneObj } from '../CollectionHero/CollectionObj';
import { collTwoObj } from '../CollectionHero/CollectionObj';
import { collThreeObj } from '../CollectionHero/CollectionObj';
import '../../components/OrganicContent/OrganicContent.css';
function CollectionData() {
  const [data, setData] = useState(collOneObj)
  const [isClass, setIsClass] = useState("colldata__img-290")
  return (
    <div className="container">
      <div className="collectiondata colldata">
        <div className="colldata__header">
          <p className="colldata__text">SHOWING 25–33 OF 33 RESULTS</p>
          <ul className="colldata__list">
            <li onClick={() => setIsClass("colldata__img-590")} className="colldata__item">
              <span className={isClass === "colldata__img-590" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-590" ? "colldata__spnn" : "colldata__spn"}></span>
            </li>
            <li onClick={() => setIsClass("colldata__img-400")} className="colldata__item">
              <span className={isClass === "colldata__img-400" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-400" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-400" ? "colldata__spnn" : "colldata__spn"}></span>
            </li>
            <li  onClick={() => setIsClass("colldata__img-290")} className="colldata__item">
              <span className={isClass === "colldata__img-290" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-290" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-290" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-290" ? "colldata__spnn" : "colldata__spn"}></span>
            </li>
            <li onClick={() => setIsClass("colldata__img-190")} className="colldata__item">
              <span className={isClass === "colldata__img-190" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-190" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-190" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-190" ? "colldata__spnn" : "colldata__spn"}></span>
              <span className={isClass === "colldata__img-190" ? "colldata__spnn" : "colldata__spn"}></span>
            </li>
          </ul>
          <p>Featured</p>
        </div>
        <div className="colldata__info">
          <ul className="colldata__info-list p-0">
            {
              data.map((data) => (
                <li className="colldata__info-item">
                  <div className="colldata__info-des">
                  <span className="colldata__heart"><i className='bx bx-heart'></i></span>
                    <img className={isClass} src={data.mainImg} alt="mainimg" />
                    <p className="colldata__info-text">{data.title}</p>
                    <p><span className="colldata__oldprice"><del>{data.oldPrice}</del></span> <span className="colldata__price">{data.price}</span></p>
                    <span className="colldata__eye"><i className='bx bx-low-vision'></i></span>
                    <span className="colldata__cart"><i className='bx bxs-cart'></i></span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="colldata__btns">
          <button onClick={() => setData(collOneObj)} className={data === collOneObj ? "colldata__btnn" : "colldata__btn"}>1</button>
          <button onClick={() => setData(collTwoObj)} className={data === collTwoObj ? "colldata__btnn" : "colldata__btn"}>2</button>
          <button onClick={() => setData(collThreeObj)} className={data === collThreeObj ? "colldata__btnn" : "colldata__btn"}>3</button>
        </div>
      </div>
    </div>
  )
}

export default CollectionData