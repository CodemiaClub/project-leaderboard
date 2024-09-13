import Row from "./Row";

const CardContent = () => {
  interface IUser {
    name: string;
    position: number;
    coins: number;
  }

  const users: IUser[] = [
    { name: "", position: 0, coins: 0 },
    { name: "", position: 0, coins: 0 },
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
        <p className="font-medium w-1/3 text-center ml-4">Nombre</p>
        <p className="font-medium w-1/3 text-right mr-8">COINS</p>
      </div>
      <div>
        {users.map((user) => (
          <div className="border-solid border-slate-500 border-2 w-full h-10 mt-3 mb-3 flex flex-row justify-around items-center text-lg hover:bg-red-500 duration-300">
            <Row user={user} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CardContent;
