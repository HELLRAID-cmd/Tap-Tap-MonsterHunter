import { createContext, useContext, useState } from "react";
import {
  COINS,
  MAX_COINS,
  MONSTER_LEVEL,
  STATUS_CLICK,
  TOTAL_COINS,
  TOTAL_COINS_SPENT,
  TOTAL_DAMAGE,
} from "../Config/Config";

type GameContextType = {
  coins: number;
  notEnoughCoins: boolean;
  totalDamage: number;
  totalCoins: number;
  totalCoinsSpent: number;
  statusClick: number;
  levelMonster: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  setNotEnoughCoins: React.Dispatch<React.SetStateAction<boolean>>;
  setTotalDamage: React.Dispatch<React.SetStateAction<number>>;
  setTotalCoins: React.Dispatch<React.SetStateAction<number>>;
  setTotalCoinsSpent: React.Dispatch<React.SetStateAction<number>>;
  setStatusClick: React.Dispatch<React.SetStateAction<number>>;
  setLevelMonster: React.Dispatch<React.SetStateAction<number>>;
  addCoins: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = useState(COINS);
  const [notEnoughCoins, setNotEnoughCoins] = useState(false);
  const [totalDamage, setTotalDamage] = useState(TOTAL_DAMAGE);
  const [totalCoins, setTotalCoins] = useState(TOTAL_COINS);
  const [totalCoinsSpent, setTotalCoinsSpent] = useState(TOTAL_COINS_SPENT);
  const [statusClick, setStatusClick] = useState(STATUS_CLICK);
  const [levelMonster, setLevelMonster] = useState(MONSTER_LEVEL);

  const addCoins = () => {
    const randomNumber = Math.floor(Math.random() * MAX_COINS) + 1;
    setCoins((prev) => prev + randomNumber);
    setTotalCoins((prev) => prev + randomNumber);
  };

  return (
    <GameContext.Provider
      value={{
        coins,
        setCoins,
        addCoins,
        notEnoughCoins,
        setNotEnoughCoins,
        totalDamage,
        setTotalDamage,
        totalCoins,
        setTotalCoins,
        totalCoinsSpent,
        setTotalCoinsSpent,
        statusClick,
        setStatusClick,
        levelMonster,
        setLevelMonster,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
