import Row from "./Row";

  const CardContent = () => {
    interface Codemmials {
      name: string;
      position: number;
      coins: number;
    }
  
    const MEMBERS: Codemmials[] = [
      { name: "Gracimar", position: 1, coins: 100 },
      { name: "Pechu", position: 2, coins: 50 },
      { name: "Coqui", position: 3, coins: 20 },
    ];
  
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
      <div className="flex flex-row w-full justify-around mt-20 items-center text-xl">
        <p className="font-medium w-1/3 text-start ml-2">Posición</p>
        <p className="font-medium w-1/3 text-center">Nombre</p>
        <p className="font-medium w-1/3 text-center">COINS</p>
      </div>
      <div>
        {MEMBERS.map((member) => (
          <div className="border-solid border-slate-500 border-2 w-full h-10 mt-3 mb-3 flex flex-row justify-around items-center text-lg hover:bg-red-500 duration-300">
            <Row member={member} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardContent;
