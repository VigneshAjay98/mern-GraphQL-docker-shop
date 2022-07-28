import React from 'react'; 

const UserContext = React.createContext();
const AppContext = React.createContext();
const UserProvider = UserContext.Provider
const AppProvider = AppContext.Provider

export { UserProvider, AppProvider, UserContext, AppContext }