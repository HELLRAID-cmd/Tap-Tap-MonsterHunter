import "./coins.scss";

const Coins = ({coins}: {coins: number}) => {
  return (
    <div className="coins">
      <span className="coins-icon"></span>
      <span className="coins-number">{!coins ? 0 : coins}</span>
    </div>
  );
};

export default Coins;