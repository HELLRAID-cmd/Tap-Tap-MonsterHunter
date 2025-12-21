import { useState } from "react";
import HitMonsterBtn from "../Monster/components/HitMonster/HitMonsterBtn";
import type { MonsterProps } from "../Monster/MonsterProps";
import { useMonsterActions } from "../Monster/useMonsterActions";
import FinalBossRegen from "./FinalBossRegen";
import FinalBossHealthBar from "./FinalBossHealthBar";
import FinalBossHpRegen from "./FinalBossHpRegen";
import FinalBossWinner from "./FinalBossWinner";
import { useFinalBoss } from "./FinalBossContext";
import { useGame } from "../context/Context";
import formatTime from "../../utils/formatTime";

const FinalBoss = ({ health }: MonsterProps) => {
  // Рандомный цвет
  const { getRandomColor } = useMonsterActions();

  const {setFinalBossHp} = useFinalBoss();

  const { timerValue, isDemo } = useGame();

  const { finalBossWinner } = useFinalBoss();

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

  // оставить 10хп
  const btn10hp = () => {
    setFinalBossHp(10);
  };

  return (
    <>
      {isDemo && <p className="demo">DEMO-MODE</p>}
      <div className="final-boss">
        <span>{formatTime(timerValue)}</span>
        <h1 className="final-boss__title">Финальный босс</h1>

        {/* Цифры урона */}
        {lastDamage?.map((dmg, index) => (
          <p className={`final-boss__damage ${animationDamage}`} key={index}>
            -{dmg.toFixed(2)}хп
          </p>
        ))}

        {/* Хп регена */}
        <FinalBossHpRegen />

        {/* Реген здоровья */}
        <FinalBossRegen />

        {/* Здоровье моба */}
        <FinalBossHealthBar />

        <div
          className="monster-enemy final-boss__enemy"
          style={{ backgroundColor: color }}
        ></div>

        {!finalBossWinner && (
          <>
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
            <button className='final-boss__btn-demo' onClick={btn10hp}>10хп</button>
          </>
        )}

        {finalBossWinner && (
          <>
            <FinalBossWinner />
          </>
        )}

        <div style={{ display: "none" }}>
          {maxHealth} {animation}
        </div>
      </div>
    </>
  );
};

export default FinalBoss;
