import { createContext, useContext, useReducer } from "react";

export const JourneysContext = createContext([]);

export const useDataValue = () => useContext(JourneysContext);

export const JourneysData = ({ initialState, reducer, children }) => (
  <JourneysContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </JourneysContext.Provider>
);
