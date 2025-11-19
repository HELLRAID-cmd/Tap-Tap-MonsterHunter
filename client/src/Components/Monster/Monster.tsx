import { useState } from "react";
import type { MonsterProps } from "./MonsterProps";
import { useMonsterActions } from "./useMonsterActions ";
import "./Monster.scss";
import HealthBar from "./components/HealthBar";
import HitMonsterBtn from "./components/HitMonster/HitMonsterBtn";
import BtnAdmin from "../Admin/BtnAdmin";
import BtnRestart from "./components/BtnRestart";

export const Monster = ({ health }: MonsterProps) => {
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
      {/* Победное окно */}
      <div
        className={`monster-enemy-box ${
          monsterHealth === 0 ? "monster-enemy-winner" : ""
        }`}
      >
        WINNER
      </div>

      {/* Цифры урона */}
      {lastDamage?.map((dmg, index) => (
        <p className={`monster-damage ${animationDamage}`} key={index}>
          -{dmg}хп
        </p>
      ))}

      {/* Здоровье моба */}
      <HealthBar monsterHealth={monsterHealth} maxHealth={maxHealth} />

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
      />

      {/* Обновить игру */}
      <BtnRestart
        newHealth={health}
        setMonsterHealth={setMonsterHealth}
        setMaxHealth={setMaxHealth}
        setColor={setColor}
        monsterHealth={monsterHealth}
      />

      {/* Оставить 1хп */}
      <BtnAdmin setMonsterHealth={setMonsterHealth} />
    </div>
  );
};
