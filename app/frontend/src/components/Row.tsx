import TrophyICon from "assets/icons/trophyicons";
import CoinsIcon from "assets/icons/coinsicons";
const Row = ({ member }) => {
  const { position, name, coins } = member;

  return (
    <>
      <div className="w-1/3 flex flex-row align-middle justify-start ml-2">
        <TrophyICon />
        <p className="font-bold w-1/3 text-start ml-2 ">{position}</p>
      </div>
      <p className="font-bold w-1/4 text-center ">{name}</p>
      <div className="w-1/3 flex flex-row align-middle justify-end mr-4">
        <p className="font-bold w-1/3 text-center ">{coins}</p>
        <CoinsIcon />
      </div>
    </>
  );
};

export default Row;
