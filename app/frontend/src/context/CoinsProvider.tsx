import { PropsWithChildren, useState } from "react";
import { createContext } from "react";

interface IUser {
  name: string;
  position: number;
  coins: number;
}

export interface CoinsContextProps {
  filter;
  filterer: (e) => void;
  results: IUser[];
}

const CoinsContext = createContext<CoinsContextProps>({} as CoinsContextProps);

const CoinsProvider = ({ children }: PropsWithChildren) => {
  const users: IUser[] = [
    { name: "", position: 0, coins: 0 },
    { name: "", position: 0, coins: 0 },
  ];

  //FILTRO USESTATE

  const [filter, setFilter] = useState("");

  //busqueda

  const filterer = (e) => {
    setFilter(e.target.value);
  };

  // filtrador
  let results: IUser[] = [];
  if (!filter) {
    results = users;
  } else {
    results = users.filter((username) =>
      username.name.toLowerCase().startsWith(filter.toLocaleLowerCase()),
    );

    if (results.length == 0) {
      console.log("noresults");
    }
  }

  return (
    <CoinsContext.Provider
      value={{
        results,
        filter,
        filterer,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};
export { CoinsProvider };
export default CoinsContext;
