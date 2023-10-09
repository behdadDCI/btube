import React, { createContext, useState } from "react";

interface IApp {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IApp>({} as IApp);

export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const [id, setId] = useState<string>("");
  return (
    <AppContext.Provider
      value={{ searchInputValue, setSearchInputValue, id, setId }}
    >
      {children}
    </AppContext.Provider>
  );
};
