import { useEffect, useState } from "react";
import { FINAL_BOSS_REGEN, FINAL_BOSS_TIMER } from "../Config/Config";

const FinalBossHpRegen = () => {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(true);

      setTimeout(() => {
        setTimer(false);
      }, 1000);

      return () => clearInterval(interval);
    }, FINAL_BOSS_TIMER);
  }, []);

  return (
    <span className={`final-boss__hp-regen ${!timer ? "" : "hidden"}`}>
      +{FINAL_BOSS_REGEN}хп
    </span>
  );
};

export default FinalBossHpRegen;
