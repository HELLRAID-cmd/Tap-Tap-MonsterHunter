import { createContext, useContext, useState } from "react";
import {
  COINS_FOOTER,
  COINS_FOOTER_LEVEL,
  COINS_FOOTER_MULTIPLIER,
  COINS_FOOTER_PRICE,
} from "../Config/Config";

type CoinsType = {
  coinsFooter: number;
  coinsFooterPrice: number;
  coinsFooterLevel: number;
  coinsMultiplier: number;
  setCoinsFooter: React.Dispatch<React.SetStateAction<number>>;
  setCoinsFooterPrice: React.Dispatch<React.SetStateAction<number>>;
  setCoinsFooterLevel: React.Dispatch<React.SetStateAction<number>>;
  setCoinsMultiplier: React.Dispatch<React.SetStateAction<number>>;
};

const CoinsContext = createContext<CoinsType | null>(null);

export const CoinsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [coinsFooter, setCoinsFooter] = useState(COINS_FOOTER);
  const [coinsFooterPrice, setCoinsFooterPrice] = useState(COINS_FOOTER_PRICE);
  const [coinsFooterLevel, setCoinsFooterLevel] = useState(COINS_FOOTER_LEVEL);
  const [coinsMultiplier, setCoinsMultiplier] = useState(COINS_FOOTER_MULTIPLIER);

  return (
    <CoinsContext.Provider
      value={{
        coinsFooter,
        setCoinsFooter,
        coinsFooterPrice,
        setCoinsFooterPrice,
        coinsFooterLevel,
        setCoinsFooterLevel,
        coinsMultiplier,
        setCoinsMultiplier
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoinsFooter = () => {
  const context = useContext(CoinsContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
