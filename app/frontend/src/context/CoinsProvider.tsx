import { PropsWithChildren, useEffect, useState } from "react";
import { createContext } from "react";

export interface CoinsContextProps {
  filter;
  handleFilterChange: (e) => void;
  results;
  loading;
  error;
}

const CoinsContext = createContext<CoinsContextProps>({} as CoinsContextProps);

const CoinsProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.URL}/table`);
        const data = await response.json();
        setUsers(data);
      }  catch (error){
        setError(true);
      }
      
      finally {
        setLoading(false);
        setError(false);
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
        loading,
        error,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};
export { CoinsProvider };
export default CoinsContext;
