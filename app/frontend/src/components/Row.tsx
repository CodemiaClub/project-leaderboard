import TrophICon from "assets/icons/TrophIcon";
import CoinsIcon from "assets/icons/CoinsIcon";

const Row = ({ user }) => {
  const { position, name, coins } = user;

  return (
    <>
      <div className="w-1/3 flex flex-row justify-center">
        <div className="flex flex-row justify-center">
          {position !== 0 && <TrophICon />}
          {position !== 0 && (
            <p className="font-bold w-1/8 text-center pl-2">{position}</p>
          )}
        </div>
      </div>
      <p className="font-bold w-1/3 text-center ">{name}</p>
      <div className="w-1/3 flex flex-row align-middle justify-center">
        {coins !== 0 && <p className="font-bold text-center pr-2">{coins}</p>}
        {coins !== 0 && <CoinsIcon />}
      </div>
    </>
  );
};

export default Row;
