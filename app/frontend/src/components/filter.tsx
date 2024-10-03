import CoinsContext from "context/CoinsProvider";
import { useContext } from "react";

export const Filter = () => {
  const { handleFilterChange, filter } = useContext(CoinsContext);

  return (
    <input
      value={filter}
      onChange={handleFilterChange}
      placeholder="Filtrar por nombre"
      type="text"
      className="h-5 bg-transparent outline-none placeholder:p w-full pl-1 text-white font-lato"
    />
  );
};
