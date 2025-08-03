import { createContext } from "react";


let GlobalContext = createContext();
const GlobalContextProvider = (props) => {

 
  return <GlobalContext.Provider value={"headerLogo"}>{props.children} </GlobalContext.Provider>;
} 
export { GlobalContextProvider, GlobalContext };
