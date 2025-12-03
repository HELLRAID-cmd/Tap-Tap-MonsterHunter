import {createContext, useContext, useState } from "react";
import { CRIT_DAMAGE_LEVEL, CRIT_DAMAGE_PRICE, CRIT_DAMAGE_MULTIPLIER } from "../Config/Config";

type CritDamageType = {
  critDamage: number;
  critDamagePrice: number;
  critLevelDamage: number;
  setCritDamage: React.Dispatch<React.SetStateAction<number>>;
  setCritDamagePrice: React.Dispatch<React.SetStateAction<number>>;
  setcritLevelDamage: React.Dispatch<React.SetStateAction<number>>;
};

const CritDamageContext = createContext<CritDamageType | null>(null);

export const CritDamageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [critDamage, setCritDamage] = useState(CRIT_DAMAGE_MULTIPLIER);
  const [critDamagePrice, setCritDamagePrice] = useState(CRIT_DAMAGE_PRICE);
  const [critLevelDamage, setcritLevelDamage] = useState(CRIT_DAMAGE_LEVEL);

  return (
    <CritDamageContext.Provider
      value={{
        critDamage,
        setCritDamage,
        critLevelDamage,
        setcritLevelDamage,
        critDamagePrice,
        setCritDamagePrice,
      }}
    >
      {children}
    </CritDamageContext.Provider>
  );
};


export const useCritDamage = () => {
  const context = useContext(CritDamageContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};