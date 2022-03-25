import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
  const [carts, setCarts] = useState([
    {
    id:1,
    mainImg:"https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato_360x.jpg?v=1565592563",
    backImg:"https://cdn.shopify.com/s/files/1/0085/5618/3637/products/mini-plum-tomato-3_360x.jpg?v=1565592563",
    title:"Plum Tomato",
    price:"$15.00"
  },
  {
    id:2,
    mainImg:"https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado_360x.jpg?v=1565594363",
    backImg:"https://cdn.shopify.com/s/files/1/0085/5618/3637/products/pinkerton-avocado-1_360x.jpg?v=1565594363",
    title:"Pinkerton Avocado",
    price:"$15.00"
  },
])
  return (
    <CartContext.Provider value={{carts,setCarts}}>
      {children}
    </CartContext.Provider>
  )
}