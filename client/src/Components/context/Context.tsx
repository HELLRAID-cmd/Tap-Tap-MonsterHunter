import { createContext, useContext, useState } from "react";
import { CRIT_CHANCE } from "../Config/Config";

type GameContextType = {
  coins: number;
  attack: number;
  attackCrit: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  setAttack: React.Dispatch<React.SetStateAction<number>>;
  setAttackCrit: React.Dispatch<React.SetStateAction<number>>;
  addCoins: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = useState(0);
  const [attack, setAttack] = useState(1);
  const [attackCrit, setAttackCrit] = useState(CRIT_CHANCE);

  const addCoins = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setCoins((prev) => prev + randomNumber);
  };

  return (
    <GameContext.Provider value={{ coins, setCoins, attack, setAttack, attackCrit, setAttackCrit, addCoins }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
