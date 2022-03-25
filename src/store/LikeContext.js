import { createContext, useState } from 'react';

export const LikeContext = createContext()

export function LikeProvider({children}) {
  const [likeArr, setLikeArr] = useState([])

  return (
    <LikeContext.Provider value={{likeArr, setLikeArr}}>
      {children}
    </LikeContext.Provider>
  )
} 