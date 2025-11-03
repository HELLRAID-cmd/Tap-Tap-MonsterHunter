import { useState } from "react";
import "./Monster.scss";
import handleKill from "../Admin/Admin";
import { getRandomColor, handleChangeColor, handleRestart } from "./HandleRestart";
import type { MonsterProps } from "./MonsterProps";
import hitMonster from "./hitMonster";
import getNewHealth from "./newHealthMonster";

export const Monster = ({health}: MonsterProps) => {
  const [maxHealth, setMaxHealth] = useState(health);
  const [monsterHealth, setMonsterHealth] = useState(health);
  const [color, setColor] = useState<string>(getRandomColor);
  
  return (
    <div className="monster">
      <div className="health-bar">
        <div className="health-bar__fill" style={{width: `${(monsterHealth / maxHealth) * 300}px`}}></div>
        <span className="health-bar__number">{monsterHealth}хп</span>
      </div>
        <div className={`monster-enemy ${monsterHealth === 0 ? "monster-enemy-dead" : ""}`} style={{backgroundColor: color}}></div>

        {/* Ударить моба */}
        <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={() => hitMonster({setMonsterHealth})}>Ударить</button>

        {/* Обновить игру */}
        <button className={`btn-hidden ${monsterHealth === 0 ? "btn-restart btn" : ""}`} onClick={() => {
          const newHealth = getNewHealth();
          handleRestart({setMonsterHealth, setMaxHealth, newHealth});
          handleChangeColor({setColor});
        }}>Начать с начала</button>

        {/* Оставить 1хп */}
        <button className='btn' onClick={() => handleKill({setMonsterHealth})}>1хп</button>

        {/* Победное окно */}
        <div className={`monster-enemy-box ${monsterHealth === 0 ? "monster-enemy-winner" : ""}`}>Вы победили!</div>
    </div>
  );
};
