import { PropsWithChildren, useState } from "react";
import { createContext } from "react";

interface IUser {
  name: string;
  position: number;
  coins: number;
}

export interface CoinsContextProps {
  filter;
  handleFilterChange: (e) => void;
  results: IUser[];
}

const CoinsContext = createContext<CoinsContextProps>({} as CoinsContextProps);

const CoinsProvider = ({ children }: PropsWithChildren) => {
  const users: IUser[] = [
    { name: "", position: 0, coins: 0 },
    { name: "", position: 0, coins: 0 },
  ];

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let results: IUser[] = users;
  if (filter) {
    results = users.filter((username) =>
      username.name.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()),
    );
  }

  return (
    <CoinsContext.Provider
      value={{
        results,
        filter,
        handleFilterChange,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};
export { CoinsProvider };
export default CoinsContext;
