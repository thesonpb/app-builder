import { useState, createContext } from "react";
import { UserInterface } from "../models/interface";

const useValue = () => {
  const [user, setUser] = useState<UserInterface | null>();
  return {
    user,
    setUser,
  };
};

const AppContext = createContext({} as ReturnType<typeof useValue>);

const AppProvider = (props: any) => {
  return (
    <AppContext.Provider value={useValue()}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
