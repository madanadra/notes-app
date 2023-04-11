import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const NotesAppContext = createContext();

export const NotesApp = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
    <NotesAppContext.Provider value={{ state, dispatch }}>
        {children}
    </NotesAppContext.Provider>
    );
}