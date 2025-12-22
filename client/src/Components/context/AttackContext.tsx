import { createContext, useContext, useState } from "react";
import {
  ATTACK_DAMAGE,
  ATTACK_LEVEL,
  ATTACK_PRICE,
} from "../Config/Config";

type AttackType = {
  attack: number;
  level: number;
  price: number;
  setAttack: React.Dispatch<React.SetStateAction<number>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  restartAttack: () => void;
};

const AttackContext = createContext<AttackType | null>(null);

export const AttackProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [attack, setAttack] = useState(ATTACK_DAMAGE);
  const [level, setLevel] = useState(ATTACK_LEVEL);
  const [price, setPrice] = useState(ATTACK_PRICE);

  const restartAttack = () => {
    setAttack(ATTACK_DAMAGE);
    setLevel(ATTACK_LEVEL);
    setPrice(ATTACK_PRICE)
  }

  return (
    <AttackContext.Provider
      value={{
        level,
        price,
        attack,
        setLevel,
        setPrice,
        setAttack,
        restartAttack,
      }}
    >
      {children}
    </AttackContext.Provider>
  );
};

export const useAttackDamage = () => {
  const context = useContext(AttackContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
