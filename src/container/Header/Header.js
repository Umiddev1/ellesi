import React from "react";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderMiddle from "../../components/HeaderMiddle/HeaderMiddle";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";
function Header() {
  return (
    <header>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
    </header>
  )
}

export default Header