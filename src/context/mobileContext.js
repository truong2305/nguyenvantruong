import { createContext, useState } from "react";
const MobileContext = createContext()

function MobileProvider( { children } ) {
    const [isM, setIsM ] = useState(false)
    const changeIsM = () => {
        setIsM(!isM)
    }
   return (
    <MobileContext.Provider value={ {isM, changeIsM } }>
        { children }
    </MobileContext.Provider>
   )
}

export { MobileContext ,MobileProvider}