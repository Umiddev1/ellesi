import React,{ useState, createContext } from "react";
import { en } from "../lang/lang";
import { uz } from "../lang/lang";
import { fruitData } from "../components/ProductData/ProductDataObj";
import { vegetablesData } from "../components/ProductData/ProductDataObj";
import { milkCreamData } from "../components/ProductData/ProductDataObj";
import { bananaData } from "../components/ProductData/ProductDataObj";
import { seaFoodData } from "../components/ProductData/ProductDataObj";
export const StoreContext = createContext();

export function StoreProvider({children}) {
  const [langRep, setLangRep] = useState(en);
  const [objData, setObjData] = useState(fruitData)
  function handleLang() {
    setLangRep(uz)
  }
  function handleLangs() {
    setLangRep(en)
  }
  function handleFruit() {
    setObjData(fruitData)
  }
  function handleVege() {
    setObjData(vegetablesData)
  }
  function handleMilk() {
    setObjData(milkCreamData)
  }
  function handleBanana() {
    setObjData(bananaData)
  }
  function handleSea() {
    setObjData(seaFoodData)
  }

  const value = {
    langRep:langRep,
    handleLang:handleLang,
    handleLangs:handleLangs,
    objData:objData,
    handleFruit:handleFruit,
    handleVege:handleVege,
    handleMilk:handleMilk,
    handleBanana:handleBanana,
    handleSea:handleSea
  }
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}