import { useEffect } from "react";
import { useFinalBoss } from "./FinalBossContext";
import { FINAL_BOSS_REGEN, FINAL_BOSS_TIMER } from "../Config/Config";

const FinalBossRegen = () => {
  const { setFinalBossHp } = useFinalBoss();

  useEffect(() => {
    const timer = setInterval(() => {
      setFinalBossHp((prev) => Math.min(prev + FINAL_BOSS_REGEN, 700000));
    }, FINAL_BOSS_TIMER); 

    return () => clearInterval(timer);
  }, [setFinalBossHp]);

  return (
    <div className="final-boss__regen">
      <div className="final-boss__fill"></div>
    </div>
  );
};

export default FinalBossRegen;
