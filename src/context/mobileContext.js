import { createContext, useState } from "react";
const MobileContext = createContext()

function MobileProvider( { children } ) {
    const [isM, setIsM ] = useState(false)
    const [user, setUser] = useState(null)
    const changeIsM = () => {
        setIsM(!isM)
    }
   return (
    <MobileContext.Provider value={ {isM, changeIsM, user, setUser } }>
        { children }
    </MobileContext.Provider>
   )
}

export { MobileContext ,MobileProvider}