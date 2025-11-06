import { useState } from "react";
import type { MonsterProps } from "./MonsterProps";
import { useMonsterActions } from "./useMonsterActions ";
import "./Monster.scss";
import HealthBar from "./components/HealthBar";
import HitMonsterBtn from "./components/HitMonster/HitMonsterBtn";
import BtnAdmin from "../Admin/BtnAdmin";
import BtnRestart from "./components/BtnRestart";

export const Monster = ({health}: MonsterProps) => {
  const { getRandomColor } = useMonsterActions();
  const [maxHealth, setMaxHealth] = useState(health);
  const [monsterHealth, setMonsterHealth] = useState(health);

  // Последний урон
  const [lastDamage, setLastDamage] = useState<number | null>(null);

  const [color, setColor] = useState<string>(getRandomColor);
  const [animation, setAnimation] = useState<string>("");
  
  return (
    <div className="monster">
      {lastDamage !== null && 
        <p className="monster-damage">-{lastDamage}хп</p>
      }

      {/* Здоровье моба */}
      <HealthBar monsterHealth={monsterHealth} maxHealth={maxHealth}/>

      {/* Монстр */}
      <div className={`monster-enemy ${monsterHealth === 0 ? "monster-enemy-dead" : ""} ${animation}`} style={{backgroundColor: color}}></div>

      {/* Ударить моба */}
      <HitMonsterBtn monsterHealth={monsterHealth} setMonsterHealth={setMonsterHealth} setAnimation={setAnimation} setLastDamage={setLastDamage}/>

      {/* Обновить игру */}
      <BtnRestart newHealth={health} setMonsterHealth={setMonsterHealth} setMaxHealth={setMaxHealth} setColor={setColor} monsterHealth={monsterHealth}/>

      {/* Оставить 1хп */}
      <BtnAdmin setMonsterHealth={setMonsterHealth}/>

      {/* Победное окно */}
      <div className={`monster-enemy-box ${monsterHealth === 0 ? "monster-enemy-winner" : ""}`}>WINNER</div>
    </div>
  );
};
