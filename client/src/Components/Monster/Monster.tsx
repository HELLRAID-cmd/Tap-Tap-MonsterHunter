import { useState } from "react";
import "./Monster.scss";

type MonsterProps = {
  health: number;
}

export const Monster = ({health}: MonsterProps) => {
  const [maxHealth, setMaxHealth] = useState(health);
  const [monsterHealth, setMonsterHealth] = useState(health);
  const [color, setColor] = useState<string>(getRandomColor);

  const newHealth = Math.floor(Math.random() * 10000) + 1;
  
  // Ударить моба
  const handleClick = () => {
    setMonsterHealth(prev => Math.max(prev - (Math.floor(Math.random() * 10) + 1), 0));
  };

  // Обноавить игру
  const handleRestart = () => {
    const newHealth = Math.floor(Math.random() * 10000) + 1;
    setMonsterHealth(newHealth);
    setMaxHealth(newHealth);
  }

  // оставить 1хп
  const handleKill = () => {
    setMonsterHealth(1);
  }
  
  return (
    <div className="monster">
      <div className="health-bar">
        <div className="health-bar__fill" style={{width: `${(monsterHealth / maxHealth) * 300}px`}}></div>
        <span className="health-bar__number">{monsterHealth}хп</span>
      </div>
        <div className={`monster-enemy ${monsterHealth === 0 ? "monster-enemy-dead" : ""}`} style={{backgroundColor: color}}></div>
        {/* Ударить моба */}
        <button className={`btn ${monsterHealth === 0 ? "btn-hidden" : ""}`} onClick={handleClick}>Ударить</button>
        {/* Обноавить игру */}
        <button className={`btn-hidden ${monsterHealth === 0 ? "btn-restart btn" : ""}`} onClick={() => {
          handleRestart({setMonsterHealth, setMaxHealth, newHealth});
          handleChangeColor({setColor});
        }}>Начать с начала</button>
        {/* Оставить 1хп */}
        <button className='btn' onClick={handleKill}>1хп</button>
        {/* Победное окно */}
        <div className={`monster-enemy-box ${monsterHealth === 0 ? "monster-enemy-winner" : ""}`}>Вы победили!</div>
    </div>
  );
};
