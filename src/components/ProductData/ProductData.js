import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/store';
import { LikeContext } from '../../store/LikeContext';
import './ProductData.css';
import { Link } from 'react-router-dom';
import ProductModal from '../ProductModal/ProductModal';
function ProductData() {
  const value = useContext(StoreContext)
  const {likeArr, setLikeArr} = useContext(LikeContext)
  const { objData } = value;
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(1)
  function handleHeart(items) {
    setLikeArr([...likeArr, items])
    if(items.liked) {
      items.liked = false
    } 
    else {
      items.liked = true
    }
    setLikeArr(
      objData.filter(items =>{
        return items.liked
      })
    )
  }
  function handleOpen(items) {
    setOpen(true)
    setCurrent(items);
  }
  function handleClose() {
    setOpen(false)
  }
  return (
    <div className="productdata">
      <ul className="productdata__list">
        <ProductModal 
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          current={current}
        />
        {
          objData.map((items) => (
            <li key={items.id} className="productdata__item">
               <span onClick={() => handleHeart(items)} className="productdata__heart"><i className={items.liked ? "bx bxs-heart" : "bx bx-heart"}></i></span>
              <Link to={`/info${items.id}`}>
              <div className="productdata__des">
                <img className="productdata__img" src={items.mainImg} alt="mainimg" />
                <p className="productdata__title">{items.title}</p>
                <p><span className="productdata__sale"><del>{items.sale}</del></span> <span className="productdata__price">{items.price}</span></p>
                <span className="productdata__cart"><i className='bx bxs-cart'></i></span>
              </div>
              </Link>
              <span onClick={() => handleOpen(items)} className="productdata__eye"><i className='bx bx-low-vision'></i></span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductData