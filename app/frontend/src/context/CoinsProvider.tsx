import { PropsWithChildren, useEffect, useState } from "react";
import { createContext } from "react";

export interface CoinsContextProps {
  filter;
  handleFilterChange: (e) => void;
  results;
  Loading;
}

const CoinsContext = createContext<CoinsContextProps>({} as CoinsContextProps);

const CoinsProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/table");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Datos no cargados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let results = users;
  if (filter) {
    results = users.filter((username) =>
      username.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  }

  return (
    <CoinsContext.Provider
      value={{
        results,
        filter,
        handleFilterChange,
        Loading,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};
export { CoinsProvider };
export default CoinsContext;
