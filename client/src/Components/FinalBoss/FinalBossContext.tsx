import { createContext, useContext, useState } from "react";
import { FINAL_BOSS_DEAD, FINAL_BOSS_HP, FINAL_BOSS_REGEN, FINAL_BOSS_SHOW_STATUS } from "../Config/Config";

type FinalBossType = {
  finalBossHp: number;
  finalBossRegen: number;
  finalBossWinner: boolean;
  finalBossShowStatus: boolean;
  setFinalBossHp: React.Dispatch<React.SetStateAction<number>>;
  setFinalBossRegen: React.Dispatch<React.SetStateAction<number>>;
  setFinalBossWinner: React.Dispatch<React.SetStateAction<boolean>>;
  setFinalBossShowStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const FinalBossContext = createContext<FinalBossType | null>(null);

export const FinalBossProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [finalBossHp, setFinalBossHp] = useState(FINAL_BOSS_HP);
  const [finalBossRegen, setFinalBossRegen] = useState(FINAL_BOSS_REGEN);
  const [finalBossWinner, setFinalBossWinner] = useState(FINAL_BOSS_DEAD);
  const [finalBossShowStatus, setFinalBossShowStatus] = useState(FINAL_BOSS_SHOW_STATUS);

  return (
    <FinalBossContext.Provider
      value={{
        finalBossHp,
        finalBossRegen,
        finalBossWinner,
        finalBossShowStatus,
        setFinalBossHp,
        setFinalBossRegen,
        setFinalBossWinner,
        setFinalBossShowStatus,
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
