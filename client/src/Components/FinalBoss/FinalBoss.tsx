import { useState } from "react";
import HitMonsterBtn from "../Monster/components/HitMonster/HitMonsterBtn";
import type { MonsterProps } from "../Monster/MonsterProps";
import { useMonsterActions } from "../Monster/useMonsterActions ";
import FinalBossRegen from "./FinalBossRegen";
import FinalBossHealthBar from "./FinalBossHealthBar";

const FinalBoss = ({ health }: MonsterProps) => {
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
  const [_animation, setAnimation] = useState<string>("");

  // Анимация цифр урона
  const [animationDamage, setAnimationDamage] = useState<string>("");

  return (
    <div className="final-boss">
      <h1 className="final-boss__title">Финальный босс</h1>
      {/* Цифры урона */}
      {lastDamage?.map((dmg, index) => (
        <p className={`monster-damage ${animationDamage}`} key={index}>
          -{dmg.toFixed(2)}хп
        </p>
      ))}

      {/* Реген здоровья */}
      <FinalBossRegen />
      
      {/* Здоровье моба */}
      <FinalBossHealthBar/>

      <div
        className='monster-enemy final-boss__enemy'
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
  );
};

export default FinalBoss;
