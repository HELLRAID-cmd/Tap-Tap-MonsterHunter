import { useEffect } from "react";
import { useGame } from "../context/Context";
import { useFinalBoss } from "./FinalBossContext";
import { FINAL_BOSS_HP, FINAL_BOSS_REGEN, FINAL_BOSS_TIMER } from "../Config/Config";

const HealthBarMonster = () => {
  const { isFinalBoss } = useGame();
  const { setFinalBossHp, finalBossHp } = useFinalBoss();

  useEffect(() => {
    if (!isFinalBoss) return;

    let alreadyRan = false;

    const interval = setInterval(() => {
      if (alreadyRan) return;
      alreadyRan = true;

      setFinalBossHp((prev) =>
        Math.min(prev + FINAL_BOSS_REGEN, FINAL_BOSS_HP)
      );
    }, FINAL_BOSS_TIMER);

    return () => clearInterval(interval);
  }, [isFinalBoss, setFinalBossHp,]);

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
