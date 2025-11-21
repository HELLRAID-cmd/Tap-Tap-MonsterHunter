import { useGame } from "../context/Context";
import "./coins.scss";

const Coins = () => {
  const {coins, notEnoughCoins} = useGame()
  
  return (
    <div className={`coins ${notEnoughCoins ? "not-enough" : ""}`}>
      <span className="coins-icon"></span>
      <span className="coins-number">{!coins ? 0 : coins}</span>
    </div>
  );
};

export default Coins;