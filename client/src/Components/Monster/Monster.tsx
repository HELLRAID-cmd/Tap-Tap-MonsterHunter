import { useState } from "react";
import type { MonsterProps } from "./MonsterProps";
import { getRandomColor, handleChangeColor, handleRestart } from "./HandleRestart";
import getNewHealth from "./getNewHealth";
import handleKill from "../Admin/Admin";
import "./Monster.scss";
import HealthBar from "./components/HealthBar";
import HitMonsterBtn from "./components/HitMonster/HitMonsterBtn";

export const Monster = ({health}: MonsterProps) => {
  const [maxHealth, setMaxHealth] = useState(health);
  const [monsterHealth, setMonsterHealth] = useState(health);
  const [color, setColor] = useState<string>(getRandomColor);
  const [animation, setAnimation] = useState<string>("");
  
  return (
    <div className="monster">

      {/* Здоровье моба */}
      <HealthBar monsterHealth={monsterHealth} maxHealth={maxHealth}/>

      {/* Монстр */}
      <div className={`monster-enemy ${monsterHealth === 0 ? "monster-enemy-dead" : ""} ${animation}`} style={{backgroundColor: color}}></div>

      {/* Ударить моба */}
      <HitMonsterBtn monsterHealth={monsterHealth} setMonsterHealth={setMonsterHealth} setAnimation={setAnimation} />

      {/* Обновить игру */}
      <button className={`btn-hidden ${monsterHealth === 0 ? "btn-restart btn" : ""}`} onClick={() => {
        const newHealth = getNewHealth();
        handleRestart({setMonsterHealth, setMaxHealth, newHealth});
        handleChangeColor({setColor});
      }}>Начать с начала</button>

      {/* Оставить 1хп */}
      <button className='btn' onClick={() => handleKill({setMonsterHealth})}>1хп</button>

      {/* Победное окно */}
      <div className={`monster-enemy-box ${monsterHealth === 0 ? "monster-enemy-winner" : ""}`}>WINNER</div>
    </div>
  );
};
