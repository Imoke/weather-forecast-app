import React, { createContext, useState ,Dispatch} from 'react'

interface Injected {
  citys: string[],
  city: string,
  setCitys:Dispatch<any>
  setCity:Dispatch<any>
}

// 1. 使用 createContext 创建上下文
export const CitysContext =  createContext<Injected>({} as Injected)

interface Props {
  children?: any
}
// 2. 创建 Provider
export const CitysProvider = (props: Props)=> {
    const [citys, setCitys] = useState(['苏州'])
    const [city, setCity] = useState('苏州')
    return (
        <CitysContext.Provider value={{ citys, city, setCitys,setCity }}>
            {props.children}
        </CitysContext.Provider>
    )
}
