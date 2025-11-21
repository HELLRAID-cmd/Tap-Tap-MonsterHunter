import { createContext, useContext, useState } from "react";
import { CRIT_CHANCE } from "../Config/Config";

type GameContextType = {
  coins: number;
  attack: number;
  attackCrit: number;
  level: number;
  price: number;
  critLevel: number;
  critPrice: number;
  notEnoughCoins: boolean;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
  setAttack: React.Dispatch<React.SetStateAction<number>>;
  setAttackCrit: React.Dispatch<React.SetStateAction<number>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setCritLevel: React.Dispatch<React.SetStateAction<number>>;
  setCritPrice: React.Dispatch<React.SetStateAction<number>>;
  setNotEnoughCoins: React.Dispatch<React.SetStateAction<boolean>>;
  addCoins: () => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [coins, setCoins] = useState(0);
  const [attack, setAttack] = useState(1);
  const [level, setLevel] = useState(1);
  const [price, setPrice] = useState(1);
  const [critLevel, setCritLevel] = useState(1);
  const [critPrice, setCritPrice] = useState(30);
  const [attackCrit, setAttackCrit] = useState(CRIT_CHANCE);
  const [notEnoughCoins, setNotEnoughCoins] = useState(false);

  const addCoins = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    setCoins((prev) => prev + randomNumber);
  };

  return (
    <GameContext.Provider
      value={{
        coins,
        critLevel,
        setCritLevel,
        critPrice,
        setCritPrice,
        level,
        setLevel,
        price,
        setPrice,
        setCoins,
        attack,
        setAttack,
        attackCrit,
        setAttackCrit,
        addCoins,
        notEnoughCoins,
        setNotEnoughCoins
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
