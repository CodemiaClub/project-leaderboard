import CoinsIcon from "assets/icons/CoinsIcon";
import FirstIcon from "assets/icons/FirstIcon";
import SecondIcon from "assets/icons/SecondIcon";
import ThirdIcon from "assets/icons/ThirdIcon";

const Row = ({ user }) => {
  const { position, name, coins } = user;

  return (
    <>
      <div className="w-1/4 flex flex-row justify-center text-slate-100">
        <div className="flex flex-row justify-center ">
          {position === 1 && <FirstIcon />}
          {position === 2 && <SecondIcon />}
          {position === 3 && <ThirdIcon />}
          {position > 3 && (
            <p className="font-bold w-1/8 text-center">{position}</p>
          )}
        </div>
      </div>
      <p className="font-bold w-2/4 text-center text-slate-100">{name}</p>
      <div className="w-1/4 flex flex-row align-middle justify-center text-slate-100 items-center">
        {coins !== 0 && <p className="font-bold text-center pr-2">{coins}</p>}
        {coins !== 0 && <CoinsIcon />}
      </div>
    </>
  );
};

export default Row;
