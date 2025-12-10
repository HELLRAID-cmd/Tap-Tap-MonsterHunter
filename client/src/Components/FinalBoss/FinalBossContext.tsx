import { createContext, useContext, useState } from "react";
import { FINAL_BOSS_DEAD, FINAL_BOSS_HP, FINAL_BOSS_REGEN } from "../Config/Config";

type FinalBossType = {
  finalBossHp: number;
  finalBossRegen: number;
  finalBossDead: boolean;
  setFinalBossHp: React.Dispatch<React.SetStateAction<number>>;
  setFinalBossRegen: React.Dispatch<React.SetStateAction<number>>;
  setFinalBossDead: React.Dispatch<React.SetStateAction<boolean>>;
};

const FinalBossContext = createContext<FinalBossType | null>(null);

export const FinalBossProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [finalBossHp, setFinalBossHp] = useState(FINAL_BOSS_HP);
  const [finalBossRegen, setFinalBossRegen] = useState(FINAL_BOSS_REGEN);
  const [finalBossDead, setFinalBossDead] = useState(FINAL_BOSS_DEAD);

  return (
    <FinalBossContext.Provider
      value={{
        finalBossHp,
        finalBossRegen,
        finalBossDead,
        setFinalBossHp,
        setFinalBossRegen,
        setFinalBossDead
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
