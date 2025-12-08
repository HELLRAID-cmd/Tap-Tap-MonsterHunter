import { createContext, useContext, useState } from "react";
import { FINAL_BOSS_HP, FINAL_BOSS_REGEN } from "../Config/Config";

type FinalBossType = {
  finalBossHp: number;
  finalBossRegen: number;
  setFinalBossHp: React.Dispatch<React.SetStateAction<number>>;
  setFinalBossRegen: React.Dispatch<React.SetStateAction<number>>;
};

const FinalBossContext = createContext<FinalBossType | null>(null);

export const FinalBossProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [finalBossHp, setFinalBossHp] = useState(FINAL_BOSS_HP);
  const [finalBossRegen, setFinalBossRegen] = useState(FINAL_BOSS_REGEN);

  return (
    <FinalBossContext.Provider
      value={{
        finalBossHp,
        finalBossRegen,
        setFinalBossHp,
        setFinalBossRegen,
      }}
    >
      {children}
    </FinalBossContext.Provider>
  );
};

export const useFinalBoss = () => {
  const context = useContext(FinalBossContext);
  if (!context) throw new Error("useGame must be used inside GameProvider");
  return context;
};
