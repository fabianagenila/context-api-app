import { createContext, useMemo, useReducer } from "react";

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });
  const value = useMemo(() => ({ ...state }), []);

  return (
    <TitleColorContext.Provider value={value}>
      {children}
    </TitleColorContext.Provider>
  );
};
