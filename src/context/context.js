import { createContext } from "react"
import { useEffect } from "react"
import { useReducer } from "react"
import Reducer from "./reducer"


// At first there are no user 
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false 
}

export  const Context = createContext(INITIAL_STATE)

// Now how we can provide a user to almost every component

export const ContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
      //stringify convert the javascript value to JSON which make easy to read 

    },[state.user])

    return (
        <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
    )
        

        

    
}