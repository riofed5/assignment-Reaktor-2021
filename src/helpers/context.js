import React, {useContext} from 'react'

const AppContext = React.createContext({})

const AppProvider = AppContext.Provider

const useContextApp = ()=>{
    return useContext(AppContext);
}

export {AppProvider, useContextApp};
