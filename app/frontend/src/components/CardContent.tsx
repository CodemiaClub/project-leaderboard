const CardContent = () => {
  return (
    <>
      <div className="Titles">
        <h1 className="font-bold text-center text-5xl mb-5 mt-7">
          Leaderboard
        </h1>

        <h2 className="font-semibold text-center text-2xl mb-5">
          ¡Colabora en proyectos y tareas para conseguir Coins y subir de
          posición!
        </h2>
      </div>
      <div className="flex flex-row w-full justify-around mt-20 items-center text-xl">
        <p className="font-medium w-1/3 text-start ml-2">Posición</p>
        <p className="font-medium w-1/3 text-center">Nombre</p>
        <p className="font-medium w-1/3 text-center">COINS</p>
      </div>
      <div className="Entries-Container">
        <div className="Entry border-solid border-slate-500 border-2 w-full h-10 mt-3 mb-3 flex flex-row justify-around items-center text-lg hover:bg-red-500 duration-300"></div>
        <div className="Entry border-solid border-slate-500 border-2 w-full h-10 mt-3 mb-3 flex flex-row justify-around items-center text-lg hover:bg-red-500 duration-300"></div>
      </div>
    </>
  );
};

export default CardContent;
