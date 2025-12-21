import { useEffect } from "react";
import { useGame } from "../context/Context";
import { useFinalBoss } from "./FinalBossContext";
import {
  DEMO_FINAL_BOSS_HP,
  DEMO_FINAL_BOSS_REGEN,
  FINAL_BOSS_HP,
  FINAL_BOSS_REGEN,
  FINAL_BOSS_TIMER,
} from "../Config/Config";

const HealthBarMonster = () => {
  const { isFinalBoss, isDemo } = useGame();
  const { setFinalBossHp, finalBossHp, finalBossRegenEnable } = useFinalBoss();

  useEffect(() => {
    if (!isFinalBoss) return;
    if (!finalBossRegenEnable) return;
    if (!isDemo) return;

    let alreadyRan = false;

    const interval = setInterval(() => {
      if (alreadyRan) return;
      alreadyRan = true;

      if (isDemo) {
        setFinalBossHp((prev) =>
          Math.min(prev + DEMO_FINAL_BOSS_REGEN, DEMO_FINAL_BOSS_HP)
        );
      } else {
        setFinalBossHp((prev) =>
          Math.min(prev + FINAL_BOSS_REGEN, FINAL_BOSS_HP)
        );
      }
    }, FINAL_BOSS_TIMER);

    return () => clearInterval(interval);
  }, [isFinalBoss, setFinalBossHp, finalBossRegenEnable, isDemo]);

  return (
    <div className="health-bar">
      <div
        className="health-bar__fill"
        style={{ width: `${(finalBossHp / FINAL_BOSS_HP) * 100}%` }}
      ></div>
      <span className="health-bar__number">{finalBossHp.toFixed(2)}хп</span>
    </div>
  );
};

export default HealthBarMonster;
