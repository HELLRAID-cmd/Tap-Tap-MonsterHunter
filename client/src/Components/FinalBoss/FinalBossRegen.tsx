import { useEffect } from "react";
import { useFinalBoss } from "./FinalBossContext";
import { FINAL_BOSS_HP, FINAL_BOSS_REGEN, FINAL_BOSS_TIMER } from "../Config/Config";

const FinalBossRegen = () => {
  const { setFinalBossHp, finalBossRegenEnable } = useFinalBoss();

  useEffect(() => {
    if(!finalBossRegenEnable) return;

    const timer = setInterval(() => {
      setFinalBossHp((prev) => Math.min(prev + FINAL_BOSS_REGEN, FINAL_BOSS_HP));
    }, FINAL_BOSS_TIMER); 

    return () => clearInterval(timer);
  }, [setFinalBossHp, finalBossRegenEnable]);

  if(!finalBossRegenEnable) return null;

  return (
    <div className="final-boss__regen">
      <div className="final-boss__fill"></div>
    </div>
  );
};

export default FinalBossRegen;
