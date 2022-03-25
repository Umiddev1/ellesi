import React,{ useContext } from 'react'
import './LikePage.css';
import { LikeContext } from '../../store/LikeContext';
import Header from '../../container/Header/Header';
import Footer from '../../container/Footer/Footer';
function LikePage() {
  const {likeArr, setLikeArr} = useContext(LikeContext)
  function handleDelete(item) {
    const filttred = likeArr.filter(info => info.id !== item.id)
    setLikeArr(filttred) 
  }
  return (
    <div>
      <Header />
      <div className="container">
        <div className="like__des"> 
          <h1 className="like__title">Wishlist</h1>
          <div className="like__texts">
            <p className="like__text">PRODUCT NAME</p>
            <p className="like__text">UNIT PRICE</p>
            <p className="like__text">STOCK STATUS	</p>
          </div>
          {
            likeArr.length > 0 ? (
              likeArr.map((data) => (
                <div className="like__data" key={data.id}>
                  <div className="like__imgs">
                    <button onClick={() => handleDelete(data)} className="like__close"><i className='bx bx-x'></i></button>
                    <img className="like__img" src={data.mainImg} alt="" />
                    <p className="like__subtitle">{data.title}</p>
                  </div>
                  <p className="like__price">{data.price}</p>
                  <div className="like__btns">
                    <button className="like__stock">IN STOCK</button>
                    <button className="like__btn">ADD TO CART</button>
                  </div>
                </div>
              ))
            ) : (<p className="like__none">No Products were added to the wishlist</p>)
          }
        </div>
      </div>
      <Footer />
      </div>
  )
}

export default LikePage