import { useEffect } from "react";
import { useFinalBoss } from "./FinalBossContext";
import {
  DEMO_FINAL_BOSS_HP,
  DEMO_FINAL_BOSS_REGEN,
  FINAL_BOSS_HP,
  FINAL_BOSS_REGEN,
  FINAL_BOSS_TIMER,
} from "../Config/Config";
import { useGame } from "../context/Context";

const FinalBossRegen = () => {
  const { isDemo } = useGame();
  const { setFinalBossHp, finalBossRegenEnable } = useFinalBoss();

  useEffect(() => {
    if (!finalBossRegenEnable) return;
    if (!isDemo) return;

    if (isDemo) {
      const timer = setInterval(() => {
        setFinalBossHp((prev) =>
          Math.min(prev + DEMO_FINAL_BOSS_REGEN, DEMO_FINAL_BOSS_HP)
        );
      }, FINAL_BOSS_TIMER);
      return () => clearInterval(timer);
    } else {
      const timer = setInterval(() => {
        setFinalBossHp((prev) =>
          Math.min(prev + FINAL_BOSS_REGEN, FINAL_BOSS_HP)
        );
      }, FINAL_BOSS_TIMER);

      return () => clearInterval(timer);
    }
  }, [setFinalBossHp, finalBossRegenEnable, isDemo]);

  if (!finalBossRegenEnable) return null;

  return (
    <div className="final-boss__regen">
      <div className="final-boss__fill"></div>
    </div>
  );
};

export default FinalBossRegen;
