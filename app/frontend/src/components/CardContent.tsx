import CoinsContext from "context/CoinsProvider";
import { useContext } from "react";
import { Filter } from "./filter";
import Row from "./Row";

const CardContent = () => {
  const { results, loading, error } = useContext(CoinsContext);

  return (
    <>
      <div>
        <h1 className="font-bold text-center text-5xl md:text-6xl mb-5 mt-7 text-Codemia-orange font-lato">
          Leaderboard
        </h1>

        <h2 className=" text-center text-xl md:text-2xl mb-5 text-slate-100 font-lato">
          ¡Colabora en proyectos y tareas para conseguir Coins y subir de
          posición!
        </h2>
      </div>

      <div className="flex justify-center w-full p-3 mt-8">
        <div className="flex-row border-Codemia-blue border-2 rounded-lg w-3/5 h-8 justify-center text-center pl-2">
          <Filter />
        </div>
      </div>
      <div className="flex flex-row w-full justify-around mt-8 items-center text-xl md:text-2xl text-Codemia-green font-lato">
        <p className="font-medium w-1/4 text-center">Posición</p>
        <p className="font-medium w-2/4 text-center">Nombre</p>
        <p className="font-medium w-1/4 text-center">COINS</p>
      </div>
      <div className="overflow-y-auto h-3/5">
        {loading ? (
          <div className="w-full flex justify-center p-5 text-xl">
            <span className="text-center italic font-lato text-slate-100">
              Cargando...
            </span>
          </div>
        ) : error ? (
          <div className="w-full flex justify-center p-5 text-xl font-lato text-slate-100">
            <span className="text-center">No se pudieron cargar los datos</span>
          </div>
        ) : results.length === 0 ? (
          <div className="w-full flex justify-center p-5 text-xl text-slate-100">
            <span className="text-center font-lato">Sin resultados</span>
          </div>
        ) : (
          <div>
            {results.map((user) => (
              <div className="rounded-lg border-solid border-Codemia-blue border-2 w-full h-10 mt-3 mb-3 flex flex-row justify-around items-center text-base md:text-lg hover:bg-Codemia-blue/[.5] duration-300 font-lato">
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
