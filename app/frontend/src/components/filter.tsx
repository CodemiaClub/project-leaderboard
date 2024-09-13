import CoinsContext from "context/CoinsProvider";
import { useContext } from "react";

export const Filter = () => {
  const { filterer, filter } = useContext(CoinsContext);

  return (
    <input
      value={filter}
      onChange={filterer}
      type="text"
      placeholder="Filtrar por nombre"
      className="h-5 bg-transparent outline-none"
    />
  );
};
