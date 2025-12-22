import { createContext, useContext, useState } from "react";
import {
  CRIT_CHANCE,
  CRIT_LEVEL,
  CRIT_PRICE,
} from "../Config/Config";

type CritType = {
  attackCrit: number;
  critLevel: number;
  critPrice: number;
  setAttackCrit: React.Dispatch<React.SetStateAction<number>>;
  setCritLevel: React.Dispatch<React.SetStateAction<number>>;
  setCritPrice: React.Dispatch<React.SetStateAction<number>>;
  restartCrit: () => void;
};

const CritContext = createContext<CritType | null>(null);

export const CritProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [critLevel, setCritLevel] = useState(CRIT_LEVEL);
  const [critPrice, setCritPrice] = useState(CRIT_PRICE);
  const [attackCrit, setAttackCrit] = useState(CRIT_CHANCE);

  const restartCrit = () => {
    setAttackCrit(CRIT_CHANCE);
    setCritLevel(CRIT_LEVEL);
    setCritPrice(CRIT_PRICE)
  }

  return (
    <CritContext.Provider
      value={{
        critLevel,
        critPrice,
        attackCrit,
        setCritLevel,
        setCritPrice,
        setAttackCrit,
        restartCrit,
      }}
    >
      {children}
    </CritContext.Provider>
  );
};

export const useCrit = () => {
  const context = useContext(CritContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
