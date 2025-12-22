import { useAttackDamage } from "../context/AttackContext";
import { useCoinsFooter } from "../context/CoinsContext";
import { useGame } from "../context/Context";
import { useCrit } from "../context/CritContext";
import { useCritDamage } from "../context/CritDamageContext";
import formatTime from "../../utils/formatTime";
import { useFinalBoss } from "./FinalBossContext";

export const FinalBossStatus = () => {
  const {attack, restartAttack} = useAttackDamage();
  const {attackCrit, restartCrit} = useCrit();
  const {critDamage, restartCritDamage} = useCritDamage();
  const {coinsMultiplier, restartCoins} = useCoinsFooter();
  const {totalDamage, totalCoins, totalCoinsSpent, statusClick, restartGame, timerValue} = useGame();
  const {restartFinalBoss} = useFinalBoss();

  const handleRestart = () => {
    restartGame();
    restartFinalBoss();
    restartCrit();
    restartAttack();
    restartCoins();
    restartCritDamage();
  }
  
  return (
    <div className="final-boss__status">
      <h1 className="final-boss__status-title">Общая статистика</h1>
      <ul className="final-boss__list">
        <li className="final-boss__item">
          <p className="final-boss__item-name">Атака: </p>
          <span className="final-boss__item-info">{attack}</span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Шанс крит: </p>
          <span className="final-boss__item-info">
            {(attackCrit * 100).toFixed(0)}%
          </span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Множитель крита: </p>
          <span className="final-boss__item-info">{critDamage.toFixed(1)}x</span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Множитель монет: </p>
          <span className="final-boss__item-info">
            {coinsMultiplier.toFixed(1)}x
          </span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Нанесено урона: </p>
          <span className="final-boss__item-info">{totalDamage}</span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Накоплено монет: </p>
          <span className="final-boss__item-info">{totalCoins}</span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Потрачено монет: </p>
          <span className="final-boss__item-info">{(totalCoinsSpent).toFixed(0)}</span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Время: </p>
          <span className="final-boss__item-info">{formatTime(timerValue)}</span>
        </li>
        <li className="final-boss__item">
          <p className="final-boss__item-name">Всего ударов: </p>
          <span className="final-boss__item-info">{statusClick}</span>
        </li>
      </ul>
      <button className="final-boss__status-restart" onClick={handleRestart}>Начать с начала</button>
    </div>
  );
};

export default FinalBossStatus;
