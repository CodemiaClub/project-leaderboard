import { useContext } from "react";
import Row from "./Row";
import CoinsContext from "context/CoinsProvider";
import { Filter } from "./filter";

const CardContent = () => {
  const { results, Loading } = useContext(CoinsContext);

  return (
    <>
      <div>
        <h1 className="font-bold text-center text-5xl mb-5 mt-7">
          Leaderboard
        </h1>

        <h2 className="font-semibold text-center text-2xl mb-5">
          ¡Colabora en proyectos y tareas para conseguir Coins y subir de
          posición!
        </h2>
      </div>

      <div className="flex justify-center w-full p-3 mt-8">
        <div className="flex-row border-slate-700 border-2 rounded-lg w-1/3 h-8">
          <Filter />
        </div>
      </div>
      <div className="flex flex-row w-full justify-around mt-3 items-center text-xl">
        <p className="font-medium w-1/3 text-center">Posición</p>
        <p className="font-medium w-1/3 text-center">Nombre</p>
        <p className="font-medium w-1/3 text-center">COINS</p>
      </div>
      <div>
        {Loading ? (
          <div className="w-full flex justify-center p-5 text-xl">
            <span className="text-center italic">Cargando...</span>
          </div>
        ) : results.length === 0 ? (
          <div className="w-full flex justify-center p-5 text-xl">
            <span className="text-center">Sin resultados</span>
          </div>
        ) : (
          <div>
            {results.map((user) => (
              <div className="border-solid border-slate-500 border-2 w-full h-10 mt-3 mb-3 flex flex-row justify-around items-center text-lg hover:bg-red-500 duration-300">
                <Row user={user} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardContent;
