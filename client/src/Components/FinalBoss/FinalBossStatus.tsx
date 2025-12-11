import { useAttackDamage } from "../context/AttackContext";
import { useCoinsFooter } from "../context/CoinsContext";
import { useGame } from "../context/Context";
import { useCrit } from "../context/CritContext";
import { useCritDamage } from "../context/CritDamageContext";

export const FinalBossStatus = () => {
  const {attack} = useAttackDamage();
  const {attackCrit} = useCrit();
  const {critDamage} = useCritDamage();
  const {coinsMultiplier} = useCoinsFooter();
  const {totalDamage, totalCoins, totalCoinsSpent, statusClick} = useGame();
  
  return (
    <div className="final-boss__status">
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
          <p className="final-boss__item-name">Всего ударов: </p>
          <span className="final-boss__item-info">{statusClick}</span>
        </li>
      </ul>
    </div>
  );
};

export default FinalBossStatus;
