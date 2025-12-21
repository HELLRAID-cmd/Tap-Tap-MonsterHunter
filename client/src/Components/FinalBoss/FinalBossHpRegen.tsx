import { useEffect, useState } from "react";
import { DEMO_FINAL_BOSS_REGEN, FINAL_BOSS_REGEN, FINAL_BOSS_TIMER } from "../Config/Config";
import { useFinalBoss } from "./FinalBossContext";
import { useGame } from "../context/Context";

const FinalBossHpRegen = () => {
  const {isDemo} = useGame();
  const [timer, setTimer] = useState(false);
  const { finalBossRegenEnable } = useFinalBoss();

  useEffect(() => {
    if (!finalBossRegenEnable) return;

    const interval = setInterval(() => {
      setTimer(true);
      setTimeout(() => setTimer(false), 1000);
    }, FINAL_BOSS_TIMER);

    return () => clearInterval(interval);
  }, [finalBossRegenEnable]);

  if(!finalBossRegenEnable) return null;

  return (
    <span className={`final-boss__hp-regen ${!timer ? "" : "hidden"}`}>
      +{isDemo ? DEMO_FINAL_BOSS_REGEN : FINAL_BOSS_REGEN}хп
    </span>
  );
};

export default FinalBossHpRegen;
