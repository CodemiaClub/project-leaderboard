import TrophICon from "assets/icons/TrophIcon";
import CoinsIcon from "assets/icons/CoinsIcon";

const Row = ({ user }) => {
  const { position, name, coins } = user;

  return (
    <>
      <div className="w-1/3 flex flex-row align-middle justify-start ml-2">
        {position !== 0 && <TrophICon />}
        {position !== 0 && (
          <p className="font-bold w-1/3 text-start ml-2 ">{position}</p>
        )}
      </div>
      <p className="font-bold w-1/4 text-center ">{name}</p>
      <div className="w-1/3 flex flex-row align-middle justify-end mr-4">
        {coins !== 0 && <p className="font-bold w-1/3 text-center ">{coins}</p>}
        {coins !== 0 && <CoinsIcon />}
      </div>
    </>
  );
};

export default Row;
