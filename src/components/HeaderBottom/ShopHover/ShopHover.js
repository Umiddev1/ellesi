import React,{ useState } from 'react'
import './ShopHover.css';
import '../DemoHover/DemoHover.css';
import { shopObj } from './ShopHoverObj/ShopHoverObj';
function ShopHover() {
  const [shopImg, setShopImg] = useState(shopObj.shop)
  return (
    <div className="shophover">
      <div className="shophover__wrapper">
        <ul className="shophover__list">
          <li className="demohover__item"><h3 className="demohover__title">Shopstyles</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Grid Layout</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Masonry Layout</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Rigth Sidebar</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Left Sidebar</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Listing Collection</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Infinit scrolling</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Load More Button</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Filters Area</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Header Transparent</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">RTL Shope page</a></li>
        </ul>
        <ul className="shophover__list">
          <li className="demohover__item"><h3 className="demohover__title">Product Page Styles</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product Detail Layout 1</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product Detail Layout 2</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product Detail Layout 3</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product thumb at bottom</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product thumb on right</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Lookbook Descriptions</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Gallery Descriptions</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product Videos</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product Countdown</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Tabs Full Width</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Tabs Accordions Full Width</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Sticky Description</a></li>
        </ul>
        <ul className="shophover__list">
          <li className="demohover__item"><h3 className="demohover__title">Product Types</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — Simple</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — Variable</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — Digital Download <span className="demohover__new">new</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — Grouped </a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — Pre-orders <span className="shophover__hot">hot</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — External / Affiliate</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — On Sale</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Product — Out of Stock</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Variant Images Grouped <span className="shophover__hot">hot</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Back in stock notification <span className="shophover__hot">hot</span></a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With 360 degree view</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With instagram</a></li>
        </ul>
        <ul className="shophover__list">
          <li className="demohover__item"><h3 className="demohover__title">Product features</h3></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with circle</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with radio</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with radio 2</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with radio 3</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with radio 4</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with rectangle</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with rectangle 2</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with simple </a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Swatch with simple 2</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">With Images Swatch</a></li>
          <li className="demohover__item"><a className="demohover__link" href="#">Sticky add to cart</a></li>
        </ul>
        <div className="shophover__big">
          <div className="shophover__inner">
            <img className="shophover__img" src={shopImg} alt="shop" />
            <div className="shophover__des">
              <p className="shophover__dess">#SayHisName T-Shirt</p>
              <div className="shophover__texts">
                <span className="shophover__price">35.00$</span>
                <ul className="shophover__lists">
                  <li onClick={(e) => setShopImg(shopObj.shop)} className="shophover__item"></li>
                  <li onClick={(e) => setShopImg(shopObj.shoppink)} className="shophover__item"></li>
                  <li onClick={(e) => setShopImg(shopObj.shopyellow)} className="shophover__item"></li>
                  <li onClick={(e) => setShopImg(shopObj.shopblue)} className="shophover__item"></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            {/* <h2>Bye</h2> */}
          </div>
          <div>
            {/* <h2>Good</h2> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ShopHover