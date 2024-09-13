import CoinsContext from "context/CoinsProvider";
import { useContext } from "react";

export const Filter = () => {
  const { handleFilterChange, filter } = useContext(CoinsContext);

  return (
    <input
      value={filter}
      onChange={handleFilterChange}
      type="text"
      placeholder="Filtrar por nombre"
      className="h-5 bg-transparent outline-none"
    />
  );
};
