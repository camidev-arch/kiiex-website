import React, { createContext, useState } from 'react'

export interface IScroll{
    scrollTop:number
}
export interface IScrollProvider{
    children : React.ReactNode

}

export interface IScrollContext{
    scrollTop:number,
    setScrollTop:React.Dispatch<React.SetStateAction<number>>
}
export const scrollContext = createContext({})



const ScrollProvider = ({children}:IScrollProvider) => {
    const [scrollTop, setScrollTop] = useState(0)
  

    return (
      <div> 
      <scrollContext.Provider value={{scrollTop, setScrollTop}}>
        {children}
      </scrollContext.Provider>
    
      </div>
    )
}

export default ScrollProvider