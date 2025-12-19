import { useState } from "react";
import type { MonsterProps } from "./MonsterProps";
import "./Monster.scss";
import { useMonsterActions } from "./useMonsterActions";
import HealthBarMonster from "./components/HealthBarMonster";
import HitMonsterBtn from "./components/HitMonster/HitMonsterBtn";
import BtnAdmin from "../Admin/BtnAdmin";
import { useGame } from "../context/Context";
import FinalBossBtn from "../FinalBoss/FinalBossBtn";
import { useAttackDamage } from "../context/AttackContext";
import { useCrit } from "../context/CritContext";
import { useCritDamage } from "../context/CritDamageContext";
import formatTime from "../../utils/formatTime";

export const Monster = ({ health }: MonsterProps) => {
  const { levelMonster, timerValue } = useGame();

  const { level } = useAttackDamage();
  const { critLevel } = useCrit();
  const { critLevelDamage } = useCritDamage();

  // Рандомный цвет
  const { getRandomColor } = useMonsterActions();
  // Максимальное здоровье
  const [maxHealth, setMaxHealth] = useState(health);

  // Здоровье монстра
  const [monsterHealth, setMonsterHealth] = useState(health);

  // Последний урон
  const [lastDamage, setLastDamage] = useState<number[]>([]);

  // Рандомный цвет
  const [color, setColor] = useState<string>(getRandomColor);

  // Анимация удара крита
  const [animation, setAnimation] = useState<string>("");

  // Анимация цифр урона
  const [animationDamage, setAnimationDamage] = useState<string>("");

  return (
    <div className="monster">
      <span>{formatTime(timerValue)}</span>
      <p className="monster-lvl">Уровень: {levelMonster}</p>
      <div className="monster-wrapper">
        {/* Цифры урона */}
        {lastDamage?.map((dmg, index) => (
          <p className={`monster-damage ${animationDamage}`} key={index}>
            -{dmg.toFixed(2)}хп
          </p>
        ))}

        {/* Здоровье моба */}
        <HealthBarMonster monsterHealth={monsterHealth} maxHealth={maxHealth} />

        {/* Монстр */}
        <div
          className={`monster-enemy ${
            monsterHealth === 0 ? "monster-enemy-dead" : ""
          } ${animation}`}
          style={{ backgroundColor: color }}
        ></div>

        {/* Ударить моба */}
        <HitMonsterBtn
          monsterHealth={monsterHealth}
          setAnimationDamage={setAnimationDamage}
          setMonsterHealth={setMonsterHealth}
          setAnimation={setAnimation}
          setLastDamage={setLastDamage}
          setMaxHealth={setMaxHealth}
          setColor={setColor}
        />
      </div>

      {level >= 120 && critLevel >= 25 && critLevelDamage >= 25 && (
        <FinalBossBtn />
      )}

      {/* Админ кнопки */}
      <BtnAdmin setMonsterHealth={setMonsterHealth} />
    </div>
  );
};
